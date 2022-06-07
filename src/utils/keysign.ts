// https://github.com/Keysign-Wallet/keysign/blob/master/DOCS.md#documentation
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace leap_keysign {
  function requestHandshake(callback: () => void): void;
  function requestTransfer(
    txs: {to: string; amount: number; memo: string}[],
    callback: (res: any) => void,
    ipAddress: string,
    code?: string,
  ): void;
  function requestVerify(
    accountNumber: string,
    callback: (res: {
      success: boolean;
      error: string;
      message: string;
      request_id: number;
      data: {
        accountNumber: string;
        code: string;
        request_id: number;
        result: {
          accountNumber: string;
          signature: string;
          verified: boolean;
        };
        type: 'verify';
      };
    }) => void,
    code?: string,
  ): void;
}

export const isKeySignInstalled = () => {
  if (leap_keysign) {
    return true;
  }

  return false;
};

export const requestKeysignVerify = ({
  accountNumber,
  code,
  onFailure,
  onSuccess,
}: {
  accountNumber: string;
  code?: string;
  onFailure: () => void;
  onSuccess: (signature: string) => void;
}) => {
  if (isKeySignInstalled()) {
    console.log(code);
    leap_keysign.requestVerify(
      accountNumber,
      (res) => {
        if (res.success) {
          onSuccess(res.data.result.signature);
        } else {
          onFailure();
        }
      },
      code,
    );
  }

  return onFailure();
};

export const requestAccountNumber = ({
  accountNumber,
  onFailure,
  onSuccess,
}: {
  accountNumber: string;
  onFailure: () => void;
  onSuccess: (userAccountNumber: string) => void;
}) => {
  if (isKeySignInstalled()) {
    leap_keysign.requestVerify(accountNumber, (res) => {
      if (res.success) {
        onSuccess(res.data.result.accountNumber);
      } else {
        onFailure();
      }
    });
  }

  return onFailure();
};
