import LeftComponent from "./LeftComponent/LeftComponent";
import RightComponent from "./RightComponent/RightComponent";
import { useState } from "react";
type Tab = {
  id: number;
  title: string;
  Description: string;
};

const App = () => {
  const tabs: Tab[] = [
    { id: 1, title: "Home", Description: "This is the Home page here we can see the overview." },
    { id: 2, title: "Profile", Description: "This is the Profile page here we can update and edit the profile." },
    { id: 3, title: "Contact", Description: "This is the Contact page here we can see the contact information." },
  ];
  
  const [activeId, setActiveId] = useState(1);
  const activeTab = tabs.find(tab => tab.id === activeId) || tabs[0];
  
  return (
    <div style={{ display: "flex" }}>
      <LeftComponent tabs={tabs} activeId={activeId} setActiveId={setActiveId} />
      <RightComponent activeTab={activeTab} />
    </div>
  );
};
export default App;
 