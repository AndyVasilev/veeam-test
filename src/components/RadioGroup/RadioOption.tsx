import React from 'react';
import FormLabel from '../FormLabel/FormLabel';
import { IRadioOptionProps } from './RadioOption.types';

const RadioOption = ({name, value, caption, checked, hint, disabled}:IRadioOptionProps): JSX.Element => {
    const htmlId = React.useId();

    return (
        <div className="flex">
            <div className="flex items-center">
                <input
                    type="radio"
                    id={htmlId}
                    name={name}
                    value={value}
                    defaultChecked={checked}
                    disabled={disabled}
                    className="w-4 h-4 text-green-500 border border-slate-200 focus:ring-3 focus:ring-green-300 cursor-pointer"
                />

                <FormLabel htmlFor={htmlId} className="ml-2">{caption}</FormLabel>
            </div>
        </div>
    );
};

export default RadioOption;