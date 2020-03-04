/**
 * External Dependencies
 */

import React from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */

const Form = ({ className, children }) => {
    const formClassNames = classNames("form", className);
    return <form className={formClassNames}>{children}</form>;
};

export default Form;
