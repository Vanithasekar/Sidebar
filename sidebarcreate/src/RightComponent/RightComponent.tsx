type Tab={
    id: number;
    title: string;
    Description : string;
};
type RightComponentProps={
    activeTab: Tab;
};
const RightComponent=({activeTab}:RightComponentProps)=>{
    return(
        
    <div style={{ marginLeft: "20px" }}>
                <h3>{activeTab?.title}</h3>
                <p>{activeTab?.Description}</p>
            </div>
    );
}
export default RightComponent;