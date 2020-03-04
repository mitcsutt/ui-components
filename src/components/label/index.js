/**
 * External Dependencies
 */

import React from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */

const Label = ({ htmlFor, children, className }) => {
    const labelStyles = classNames("label", className);
    return (
        <label htmlFor={htmlFor} className={labelStyles}>
            {children}
        </label>
    );
};

export default Label;
