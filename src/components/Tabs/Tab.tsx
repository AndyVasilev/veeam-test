import React from 'react';
import {ITabProps} from "./Tab.types";

const Tab = ({ children }:ITabProps) => {
    return <div className="flex flex-col w-full text-sm bg-slate-100 p-5 overflow-y-scroll">{children}</div>
}

export default Tab