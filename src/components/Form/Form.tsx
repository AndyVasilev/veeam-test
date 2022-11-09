import React from 'react';
import Button from "../Button/Button";
import { IFormProps } from './Form.types';
import { hasChildren } from "../../utils/hasChildren";

const Form = ({action, actions, method, onSubmit, title, children}: IFormProps): JSX.Element => {

    return (
        <form
            className="flex flex-col grow"
            action={action}
            method={method}
            onSubmit={onSubmit}
            target="_blank"
        >
            {title && <h4 className="text-xl font-bold mb-4">{title}</h4>}

            {hasChildren(children) && (
                <div className="flex flex-col gap-4 h-full">{children}</div>
            )}

            {actions && actions.length > 0 && (
                <div className="inline-flex gap-2 mt-4" role="group">
                    {actions.map((action, index) => (
                        <Button
                            // we have no control over the uniqueness of any button property
                            key={index}
                            type={action.type}
                            theme={action.theme}
                            title={action.title}
                            className={action.className}
                            disabled={action.disabled}
                            onClick={action.onClick}
                        >
                            {action.children}
                        </Button>
                    ))}
                </div>
            )}
        </form>
    );
};

export default Form;