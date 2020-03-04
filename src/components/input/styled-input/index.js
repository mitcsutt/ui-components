/**
 * External Dependencies
 */

import React from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */
import View from "components/view";
import Label from "components/label";
import Input from "components/input";

import useFocus from "hooks/use-focus";

const StyledInput = ({
    name,
    value,
    onChange,
    type = "text",
    className,
    children,
    onBlur
}) => {
    const [focus, setFocus, unsetFocus] = useFocus();

    const blur = () => {
        setFocus();
        onBlur();
    };

    const textInputClassNames = classNames(
        "text-input",
        (focus || value) && "text-input--transformed",
        focus && "text-input--focused",
        className
    );
    const labelClassNames = classNames("text-input__label");
    const inputClassNames = classNames("text-input__input");

    return (
        <View className={textInputClassNames}>
            <Label className={labelClassNames}>{name}</Label>
            <Input
                name={name}
                type={type}
                className={inputClassNames}
                onChange={e => onChange(e.target.value)}
                onFocus={setFocus}
                onBlur={blur}
                value={value}
            />
            {children}
        </View>
    );
};

export default StyledInput;
