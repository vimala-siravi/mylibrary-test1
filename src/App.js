import { useState } from "react";
import SelectField from "./components/common/SelectField";

function App() {
  const data = [
    { id: 1, value: "Red", label: "Red" },
    { id: 2, value: "Orange", label: "Orange" },
    { id: 3, value: "Green", label: "Green" },
    { id: 4, value: "Yellow", label: "Yellow" },
  ];

  const [color, setColor] = useState(data[0].label);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="px-2 py-2">
      <h1 className="ml-5 text-center font-bold">Dropdown component</h1>
      <div className="ml-5 mt-5">Selected color is {color}</div>
      <SelectField
        name="Colors"
        spacing={2}
        defaultValue={data[0].label || color}
        onChange={handleChange}
        options={data.map((data) => ({
          key: data.id,
          value: data.value,
          label: data.label,
          id: data.id,
        }))}
      />
    </div>
  );
}

export default App;
