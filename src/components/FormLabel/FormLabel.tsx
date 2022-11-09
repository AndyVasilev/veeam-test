import React from 'react';
import classNames from 'classnames';
import { IFormLabelProps } from './FormLabel.types';

const FormLabel = ({ children, htmlFor, className }:IFormLabelProps): JSX.Element => {
    return (<label htmlFor={htmlFor} className={classNames("font-bold", className)}>{children}</label>);
};

export default FormLabel;