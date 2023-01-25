import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@ws-serenity/react-button';
import '@ws-serenity/react-button/lib/index.css';
import clsx from 'clsx';
import './button.scss';

export type ButtonProps = BaseButtonProps;

export function Button(props: ButtonProps) {
    const { className, ...rest } = props;
    return (
        <BaseButton
          className={clsx(
                className,
                // todo: add modifiers
            )}
          {...rest}
        />
    );
}
