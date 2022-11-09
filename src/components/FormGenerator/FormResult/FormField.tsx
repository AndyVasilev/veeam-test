import React from 'react';
import CheckBox from '../../CheckBox/CheckBox';
import RadioGroup from '../../RadioGroup/RadioGroup';
import TextArea from '../../TextArea/TextArea';
import TextInput from '../../TextInput/TextInput';
import { InputType } from '../../../types/form';
import { IFormFieldProps } from './FormField.types';

const FormField = ({schema}:IFormFieldProps) => {
    let exhaustiveCheck: never;

    switch (schema.type) {
        case InputType.checkbox:
            return (
                <CheckBox
                    name={schema.name}
                    value={schema.value}
                    label={schema.label}
                    disabled={schema.disabled}
                    checked={schema.checked}
                />
            );
        case InputType.datefield:
            return (
                <TextInput
                    name={schema.name}
                    value={schema.value}
                    label={schema.label}
                    disabled={schema.disabled}
                    type="date"
                />
            );
        case InputType.numberfield:
            return (
                <TextInput
                    name={schema.name}
                    value={typeof schema.value === 'number' ? schema.value.toString() : ''}
                    label={schema.label}
                    disabled={schema.disabled}
                    placeholder={schema.placeholder}
                    type="number"
                />
            );
        case InputType.radiogroup:
            return (
                <RadioGroup
                    name={schema.name}
                    label={schema.label}
                    options={schema.options}
                    disabled={schema.disabled}
                />
            );
        case InputType.textarea:
            return (
                <TextArea
                    name={schema.name}
                    value={schema.value}
                    label={schema.label}
                    disabled={schema.disabled}
                    placeholder={schema.placeholder}
                />
            );
        case InputType.textfield:
            return (
                <TextInput
                    name={schema.name}
                    value={schema.value}
                    label={schema.label}
                    disabled={schema.disabled}
                    placeholder={schema.placeholder}
                    type="text"
                />
            );
        default:
            exhaustiveCheck = schema;

            return exhaustiveCheck;
    }
};

export default FormField;