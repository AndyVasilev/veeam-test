import React from 'react';
import FormLabel from "../FormLabel/FormLabel";
import { ITextAreaProps } from './TextArea.types';

const TextArea = ({ label, hint, name, value, placeholder, rows, onChange, disabled }:ITextAreaProps): JSX.Element => {

    const htmlId = React.useId();
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;

        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="flex flex-col grow">
            {label && <FormLabel htmlFor={htmlId} className="mb-1">{label}</FormLabel>}
            <textarea
                id={htmlId}
                name={name}
                className="grow py-2 px-3 border border-slate-200 rounded-md"
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextArea;