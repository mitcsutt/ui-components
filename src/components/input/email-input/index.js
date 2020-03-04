/**
 * External Dependencies
 */

import React from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */
import StyledInput from "components/input/styled-input";

const EmailInput = (props, { className }) => {
    const emailClassNames = classNames("email-input", className);
    return <StyledInput className={emailClassNames} type="email" {...props} />;
};

export default EmailInput;
