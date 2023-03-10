import { Button } from "react-bootstrap";

function TabLink({ setActiveTab, tabName, activeTab }) {
  return (
    <Button
      variant="outline-dark"
      size="lg"
      onClick={() => setActiveTab(tabName)}
      active={activeTab === tabName}
    >
      {tabName}
    </Button>
  );
}

export default TabLink;
