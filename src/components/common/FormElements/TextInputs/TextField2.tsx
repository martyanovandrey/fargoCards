import React from "react";

import "./TextInputs.scss";
import { FieldProps } from "formik";

type OwnProps = FieldProps< string, any>;

export const TextField2 = ({ field, form, meta, ...props }: Partial<OwnProps>): JSX.Element => {
    const name  = field?.name || "_test";
    const hasError = form?.touched[name] && form.errors[name];

    return (
        <div className={`formControl ${hasError ? "errorInput" : ""}`}>
            <input className="textField"
                {...field} {...props} />
            <div className="errorContainer">
                {hasError && (
                    <span className="error">{form?.errors[name]}</span>
                )}
            </div>

        </div>
    );
};


