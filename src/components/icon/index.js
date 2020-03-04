/**
 * External Dependencies
 */

import React from "react";
import Icon from "react-web-vector-icons";
import classNames from "classnames";

/**
 * Internal Dependencies
 */

import View from "components/view";

export default ({
    className,
    onClick = () => null,
    type = "MaterialCommunityIcons",
    name = "crop-square",
    size = "2rem",
    color = "white",
    ...rest
}) => {
    return (
        <View onClick={onClick} className={classNames("icon", className)}>
            <Icon
                className={className}
                font={type}
                name={name}
                style={{ fontSize: size, color }}
                {...rest}
            />
        </View>
    );
};
