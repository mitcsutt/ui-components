/**
 * External Dependencies
 */

import React, { forwardRef } from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */

const Input = forwardRef(
    ({ name, type, value, onChange, className, ...rest }, ref) => {
        const inputClassName = classNames("input", className);
        return (
            <input
                ref={ref}
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={inputClassName}
                {...rest}
            />
        );
    }
);

export default Input;
