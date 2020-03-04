/**
 * External Dependencies
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Internal Dependencies
 */

import './styles.scss'

const Button = ({
    onClick = () => null,
    onHover = () => null,
    autofocus = false,
    name = "",
    value = "",
    type = "",
    disabled = false,
    className,
    children,
    ...rest
}) => {
    const buttonClassNames = classNames("button", className);
    return (
        <button
            autofocus={autofocus}
            name={name}
            value={value}
            type={type}
            disabled={disabled}
            className={buttonClassNames}
            onClick={onClick}
            onHover={onHover}
            {...rest}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    onHover: PropTypes.func,
    autofocus: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.bool,
    type: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button;
