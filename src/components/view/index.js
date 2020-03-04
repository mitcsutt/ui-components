/**
 * External Dependencies
 */

import React, { forwardRef } from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */

const View = forwardRef(({ children, className, ...rest }, ref) => {
    const viewClassname = classNames(className, "view");

    return (
        <div ref={ref} className={viewClassname} {...rest}>
            {children}
        </div>
    );
});

export default View;
