import React from 'react';
import RadioOption from './RadioOption';
import { IRadioGroupProps } from './RadioGroup.types';

import FormLabel from '../FormLabel/FormLabel';

const RadioGroup = ({className, name, hint, checked, options, label, disabled}:IRadioGroupProps): JSX.Element => {
    const htmlId = React.useId();

    return (
        <div className={ className }>
            <div className="">
                <FormLabel htmlFor={htmlId}>{label}</FormLabel>
            </div>

            <div className="flex flex-col gap-2 mt-2">
                {options.map((option) => (
                    <RadioOption
                        key={option.value}
                        name={name || htmlId}
                        value={option.value}
                        caption={option.caption}
                        hint={option.hint}
                        checked={option.checked}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;