import TopBarV2 from "./components/TopBarV2";
import ModulesDisplay from "./components/ModulesDisplay";
import "./ModulesSelection.css";

function ModuleSelection() {
  return (
    <div className="selectdiv">
      <TopBarV2 />
      <ModulesDisplay />
    </div>
  );
}




export default ModuleSelection;
