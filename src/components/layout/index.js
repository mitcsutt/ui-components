/**
 * External Dependencies
 */

import React from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */
import View from "components/view";

const Layout = ({ children }) => {
    const layoutClasses = classNames("layout");
    const layoutItemClasses = classNames("layout-item");
    return (
        <View className={layoutClasses}>
            <View className={layoutItemClasses}>{children}</View>
        </View>
    );
};

export default Layout;
