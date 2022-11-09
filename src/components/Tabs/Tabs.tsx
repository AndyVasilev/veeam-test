import React, { useState } from "react";
import { ITabsProps } from "./Tabs.types";
import TabTitle from "./TabTitle";

const Tabs = ({ children }:ITabsProps) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <>
            <div className="flex space-x-4 bg-white border-b border-slate-200 px-4">
                {children.map((item, index) => (
                    <TabTitle
                        key={index}
                        className={selectedTab === index ? "text-gray-700 border-green-500" : ""}
                        title={item.props.title}
                        index={index}
                        setSelectedTab={setSelectedTab}
                    />
                ))}
            </div>
            <div className="flex h-full overflow-y-scroll">
                {children[selectedTab]}
            </div>
        </>
    )
}

export default Tabs