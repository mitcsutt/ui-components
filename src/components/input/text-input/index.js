/**
 * External Dependencies
 */

import React from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */
import StyledInput from "components/input/styled-input";

const TextInput = (props, { className }) => {
    const textClassNames = classNames("text-input", className);
    return <StyledInput className={textClassNames} type="text" {...props} />;
};

export default TextInput;
