/**
 * External Dependencies
 */

import React, { useState } from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */
import StyledInput from "components/input/styled-input";
import View from "components/view";
import Icon from "components/icon";

const PasswordInput = (props, { className }) => {
    const [visible, setVisible] = useState(false);
    const textClassNames = classNames("text-input", className);
    return (
        <View className={classNames("password-container")}>
            <StyledInput
                className={textClassNames}
                type={visible ? "text" : "password"}
                {...props}
            />
            <Icon
                onClick={() => setVisible(!visible)}
                className="password-icon"
                type="Feather"
                name={visible ? "eye" : "eye-off"}
                color="black"
            />
        </View>
    );
};

export default PasswordInput;
