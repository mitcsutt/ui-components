/**
 * External Dependencies
 */

import React, { useState, useRef } from "react";
import classNames from "classnames";

/**
 * Internal Dependencies
 */
import View from "components/view";
import Input from "components/input";
import Icon from "components/icon";

const Dropzone = ({ classes }) => {
    const [highlight, setHighlight] = useState(false);
    const fileInputRef = useRef(null);

    const openFileDialogue = event => {
        fileInputRef.current.click();
    };

    const onFileChange = event => {
        event.preventDefault();
        const files = event.target.files;
        console.log(files);
    };

    const onDrop = event => {
        console.log("files");

        event.stopPropagation();
        event.preventDefault();

        const files = event.dataTransfer.files;
        console.log(files);
    };

    const dropzoneClassNames = classNames(
        "dropzone",
        highlight && "dropzone--highlighted"
    );

    return (
        <View
            onDragOver={event => {
                setHighlight(true);
                event.stopPropagation();
            }}
            onDragLeave={() => setHighlight(false)}
            onMouseOver={() => setHighlight(true)}
            onMouseOut={() => setHighlight(false)}
            onDrop={onDrop}
            onClick={openFileDialogue}
            className={dropzoneClassNames}
        >
            <Input
                onDrop={onDrop}
                onChange={onFileChange}
                ref={fileInputRef}
                className="dropzone__input"
                type="file"
            />
            <View className="dropzone__info">
                <Icon
                    className="dropzone__icon"
                    font="Feather"
                    name="upload-cloud"
                    color="inherit"
                ></Icon>
                <span className="dropzone__text">Upload Files</span>
            </View>
        </View>
    );
};

export default Dropzone;
