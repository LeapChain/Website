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
      result: string | null;
      message: string;
      data: {
        request_id: number;
        type: 'verify';
        accountNumber: string;
        code: string;
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
  onSuccess: () => void;
}) => {
  if (isKeySignInstalled()) {
    leap_keysign.requestVerify(
      accountNumber,
      (res) => {
        if (res.success) {
          onSuccess();
        } else {
          onFailure();
        }
      },
      code,
    );
  }

  return onFailure();
};
