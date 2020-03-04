/**
 * External Dependencies
 */

import React, { useState } from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */
import View from "components/view";
import Label from "components/label";
import Input from "components/input";

const Checkbox = ({ name, value, onChange, type = "checkbox", className }) => {
    const checkboxClassNames = classNames(
        "checkbox",
        value && "checkbox--checked",
        className
    );
    const labelClassNames = classNames("checkbox__label");
    const inputClassNames = classNames("checkbox__input");

    return (
        <View className={checkboxClassNames}>
            <Input
                name={name}
                type={type}
                value={value}
                className={inputClassNames}
                onChange={() => onChange(!value)}
            />
            <Label htmlFor={name} className={labelClassNames}>
                {name}
            </Label>
        </View>
    );
};

export default Checkbox;
