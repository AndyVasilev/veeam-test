import { validate } from '../schema/validate';
import { defaultSchema, stateFromSchema } from './state';
import { FormGeneratorAction, IFormGeneratorState, IFormGeneratorAction } from './types';

const safeParseJson = (text: string) => {
    try {
        const schema = JSON.parse(text);
        return { schema, error: null };
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return { schema: null, error: message };
    }
};

const safeValidateText = (text: string) => {
    const { schema, error } = safeParseJson(text);

    if (error) {
        return { schema, error };
    }

    const result = validate(schema);
    const validateError = result.errors ? result.errors.join('. ') : '';

    return { schema, error: validateError };
};

export function reducer(
    state: IFormGeneratorState,
    action: IFormGeneratorAction,
): IFormGeneratorState {
    if (action.type === FormGeneratorAction.update) {
        const text = action.payload.text.trim();

        if (text.trim().length === 0) {
            return {
                ...state,
                text,
                error: '',
            };
        }

        const { schema, error } = safeValidateText(text);

        if (error) {
            return {
                ...state,
                text,
                error,
            };
        }

        return {
            schema,
            text,
            lastValidText: text,
            error: '',
        };
    }

    if (action.type === FormGeneratorAction.clear) {
        return {
            schema: { items: [], actions: [] },
            lastValidText: state.lastValidText,
            text: '',
            error: '',
        };
    }

    if (action.type === FormGeneratorAction.reset) {
        return stateFromSchema(defaultSchema);
    }

    if (action.type === FormGeneratorAction.prettify && !state.error) {
        return stateFromSchema(state.schema);
    }

    return state;
}