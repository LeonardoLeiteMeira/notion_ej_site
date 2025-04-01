import checkboxeOption from "@/models/types/checkboxOption";


type CheckboxProps = {
    options: checkboxeOption[];
    onChange: (option: checkboxeOption) => void;
}

export default function Checkboxs({ options, onChange }: CheckboxProps) {
  return (
    <div className="checkbox-list">
            {options.map((option) => (
              <label className="checkbox-item" key={option.id}>
                <input 
                  type="checkbox"
                  checked={option.isChecked}
                  onChange={() => onChange(option)}
                /> {option.label}
              </label>
            ))}
        </div>
    );
}