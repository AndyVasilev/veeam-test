import React from 'react';
import FormLabel from '../FormLabel/FormLabel';
import { ICheckBoxProps } from './CheckBox.types';

const CheckBox = ({className, label, hint, value, disabled, checked, name}:ICheckBoxProps): JSX.Element => {
    const htmlId = React.useId();

    return (
        <div className={ className }>
            <div className="flex items-center">
                <input
                    id={htmlId}
                    name={name}
                    value={value}
                    defaultChecked={checked}
                    type="checkbox"
                    disabled={disabled}
                    className="w-4 h-4 text-green-500 rounded border border-slate-200 focus:ring-3 focus:ring-green-300 cursor-pointer"
                />

                <FormLabel htmlFor={htmlId} className="ml-2 cursor-pointer">{label}</FormLabel>
            </div>
        </div>
    );
};

export default CheckBox;