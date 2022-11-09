import React from 'react';
import classNames from 'classnames';
import { IButtonProps } from "./Button.types";

const Button = ({type, title, className, disabled, onClick, children}: IButtonProps) => {

    return (
        <button
            type={type}
            title={title}
            className={classNames(
                "py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-slate-200 hover:bg-slate-100",
                {'text-white bg-green-500 hover:bg-green-600 hover:text-white': type === 'submit'},
                className
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;