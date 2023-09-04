import { FormControl } from "tscommon-components";
import { InputLabel } from "tscommon-components";
import { Select } from "tscommon-components";
import { MenuItem } from "tscommon-components";

export default function SelectField({
  name,
  id,
  options,
  onChange,
  className,
}) {
  return (
    <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
      <InputLabel id={id}>{name}</InputLabel>
      <Select
        defaultValue={options[0].value}
        displayEmpty
        labelId={id}
        onChange={onChange}
        id={id}
        label={name}
        className={className}
      >
        {options?.map((item) => (
          <MenuItem key={item.key} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
