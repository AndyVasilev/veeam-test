import React from 'react';
import Form from "../../Form/Form";
import FormField from "./FormField";
import { IFormResultProps } from './FormResult.types';

const defaultAction = 'https://httpbin.org/post';
const defaultMethod = 'post';

const FormResult = (props: IFormResultProps) => {
    const { schema, className } = props;
    const { title, items, actions } = schema;
    const buttons = actions?.map((action) => ({
        type: action.type,
        children: action.text,
    }));

    return (
        <Form
            testId="FormResult"
            action={defaultAction}
            method={defaultMethod}
            title={title}
            actions={buttons}
            className={className}
        >
            {items.length > 0 && (
                items.map((item, index) => (
                    <FormField
                        // we have no control over the uniqueness of any input property
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        schema={item}
                    />
                ))
            )}
        </Form>
    );
};

export default FormResult;