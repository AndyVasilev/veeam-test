import React from "react";
import classNames from 'classnames';
import {ITabTitleProps} from "./TabTitle.types";

const TabTitle = ({ className, title, setSelectedTab, index }:ITabTitleProps) => {

    return (
        <button type="button" className={classNames("focus:outline-none text-gray-400 hover:text-gray-500 py-2 px-1 border-t-2 text-sm tracking-wide font-medium border-transparent", className)} onClick={() => setSelectedTab(index)}>{title}</button>
    )
}

export default TabTitle