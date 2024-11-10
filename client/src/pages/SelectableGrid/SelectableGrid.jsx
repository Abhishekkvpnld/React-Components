import SelectableGridComponent from "../../components/Selectable Grid/SelectableGridComponent";
import "./selectableGrid.css";

const SelectableGrid = () => {
  return (
    <div className="selectable-grid">
      <h2>Selectable Grid</h2>
      <SelectableGridComponent rows={10} column={10} />
    </div>
  )
}

export default SelectableGrid;