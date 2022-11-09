import React from 'react';
import Form from "../../Form/Form";
import TextArea from "../../TextArea/TextArea";
import { useDebounce } from '../../../hooks/useDebounce';
import { ActionType, IForm, InputType } from '../../../types/form';
import { IButtonProps } from "../../Button/Button.types";
import { FormGeneratorAction, IFormGeneratorAction } from '../../../model';
import { IFormParserProps } from "./FormConfig.types"

const placeholder: IForm = {
    title: 'Form Title',
    items: [{ type: InputType.textfield }],
    actions: [{ type: ActionType.submit, text: 'Submit' }],
};

const debounceTimeoutInMs = 300;

const getActions = (dispatch: React.Dispatch<IFormGeneratorAction>): IButtonProps[] => {
    const actions: IButtonProps[] = [
        {
            type: 'reset',
            children: 'Clear',
            className: '',
            onClick: () => dispatch({ type: FormGeneratorAction.clear }),
        },
        {
            type: 'reset',
            children: 'Example',
            title: 'Insert an example config',
            className: '',
            onClick: () => dispatch({ type: FormGeneratorAction.reset }),
        },
        {
            type: 'button',
            children: 'Prettify',
            title: 'Prettify your config',
            className: '',
            onClick: () => dispatch({ type: FormGeneratorAction.prettify }),
        },
    ];

    return actions.map((action) => ({ ...action, theme: 'flat' }) as IButtonProps);
};

const FormConfig = (props: IFormParserProps): React.ReactElement => {
    // In the real world I would use redux hooks, but our app is too small for it, so let’s use props
    const { state, dispatch } = props;
    const [value, setValue] = React.useState<string>(state.text);
    const actions = getActions(dispatch);

    const dispatchChange = React.useCallback((text: string) => {
        dispatch({
            type: FormGeneratorAction.update,
            payload: { text },
        });
    }, [dispatch]);

    const debouncedChangeHandler = useDebounce(dispatchChange, debounceTimeoutInMs);

    const handleChange = (text: string) => {
        setValue(text);
        debouncedChangeHandler(text);
    };

    // Reset the value if the state in the store has changed
    React.useEffect(
        () => setValue(state.text),
        [state.text],
    );

    return (
        <Form
            title="Form Generator"
            actions={actions}
        >
            <TextArea
                value={value}
                label="Describe your form in JSON"
                placeholder={JSON.stringify(placeholder, null, 2)}
                rows={15}
                onChange={handleChange}
            />
        </Form>
    );
};

export default FormConfig;