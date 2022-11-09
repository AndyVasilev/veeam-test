import React from 'react';
import FormLabel from '../FormLabel/FormLabel';
import { ITextInputProps } from './TextInput.types';

const TextInput = ({className, label, hint, value, placeholder, disabled, name, type}:ITextInputProps): JSX.Element => {
    const htmlId = React.useId();

    return (
        <div className="flex flex-col">
            {label && <FormLabel htmlFor={htmlId} className="mb-1">{label}</FormLabel>}

            <input
                id={htmlId}
                name={name}
                className="py-2 px-3 border border-slate-200 rounded-md"
                defaultValue={value}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    );
};

export default TextInput;