function TabLink({ setActiveTab, tabName }) {
  return (
    <button className="" onClick={() => setActiveTab(tabName)}>
      {tabName}
    </button>
  );
}

export default TabLink;
