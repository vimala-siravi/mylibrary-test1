import { FormControl } from "@vimala-siravi/my-library";
import { InputLabel } from "@vimala-siravi/my-library";
import { Select } from "@vimala-siravi/my-library";
import { MenuItem } from "@vimala-siravi/my-library";

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
