import { useState } from "react";
type Tab = {
    id: number;
    title: string;
    Description: string;
};
const TabsLayout = () => {
    const tabs: Tab[] = [
        { id: 1, title: "Home", Description: "Home page content here we can see the overview" },
        { id: 2, title: "Profile", Description: "Profile page content here we can see the profile details" },
        { id: 3, title: "Contact", Description: "Contact page content here we can see the contact details" }
    ];
    const [activeId, setActiveId] = useState(0);
    const activeTab = tabs.find(tab => tab.id === activeId);
    return (
        <div style={{ display: "flex" }}>
            <div>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        onClick={() => setActiveId(tab.id)}
                        style={{ padding: "10px", cursor: "pointer", background: activeId === tab.id ? "#cce5ff" : "#fff" }}>
                        {tab.title}
                    </div>
                ))}
            </div>
            <div style={{ marginLeft: "20px" }}>
                <h3>{activeTab?.title}</h3>
                <p>{activeTab?.Description}</p>
            </div>
        </div>
    );
};

export default TabsLayout;
