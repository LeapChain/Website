import React, {ChangeEvent, FocusEvent, useEffect, useRef} from 'react';
import clsx from 'clsx';
import {bemify} from '@leapchain/utils';
import {SFC} from 'types/generic';

import './TextArea.scss';

export interface BaseInputProps {
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  name?: string;
  onBlur?(e: FocusEvent<HTMLTextAreaElement>): void;
  onChange?(e: ChangeEvent<HTMLTextAreaElement>): void;
  placeholder?: string;
  value: string;
}

const InputTextArea: SFC<BaseInputProps> = ({
  className,
  disabled = false,
  error = false,
  focused = false,
  name,
  onBlur,
  onChange,
  placeholder = 'Enter',
  value,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (focused) {
      textareaRef.current?.focus();
    }
  }, [focused, textareaRef]);

  return (
    <textarea
      className={clsx('TextArea', className, {
        'TextArea--error': error,
        ...bemify(className, '--error', error),
      })}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      ref={textareaRef}
      value={value}
    />
  );
};

export default InputTextArea;
