type Tab = {
  id: number;
  title: string;
  Description: string;
};

type LeftNavbarProps = {
  tabs: Tab[];
  activeId: number;
  setActiveId: (id: number) => void;
};
const LeftComponent = ({ tabs, activeId, setActiveId }: LeftNavbarProps) => {
    return (
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
    );
}
export default LeftComponent;
