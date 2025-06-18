/* const Navigation = ({ activeTab, setActiveTab }) => {
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <nav>
            <ul className="navigation-tabs">
                {["Tutti", "Completati", "In Corso", "Wishlist", "Abbandonati"].map((tab) => (
                    <li
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
        </nav>
    );
}; */

const tabs = [

{label:"Tutti", value : "Tutti"},
{label:"Completati", value : "Completati"},
{label:"In Corso", value : "In Corso"},
{label:"Wishlist", value : "Wishlist"},
{label:"Abbandonati", value : "Abbandonati"},

]

const getTabClass = (isActive) => isActive ? "active-tab" : "idle-tab";

function Navigation({activeTab, setActiveTab}) {
    return (
        <nav className = "navigation">{
            tabs.map((tab) => (
                <button
                    key={tab.value}
                    className={getTabClass(activeTab === tab.value)}
                    onClick={() => setActiveTab(tab.value)}
                >
                    {tab.label}
                </button>
            ))
        }
        </nav>
    )
}

export default Navigation

