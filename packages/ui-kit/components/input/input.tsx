import { TextBox, TextBoxProps } from '@ws-serenity/react-text-inputs';
import '@ws-serenity/react-text-inputs/lib/index.css';
import './input.scss';
import { ForwardedRef, forwardRef } from 'react';

export interface InputProps extends TextBoxProps {

}

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { ...rest } = props;
    return (
        <TextBox
          {...rest}
          ref={ref}
        />
    );
});
