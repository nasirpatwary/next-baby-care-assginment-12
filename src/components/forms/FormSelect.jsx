// components/FormSelect.js
import { Controller } from "react-hook-form";

const FormSelect = ({ name, control, label, options = [], rules = {} }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-semibold mb-1">{label}</span>
      </label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <select 
              {...field} 
              className={`select outline-0 w-full ${error ? "select-error" : "select-gray-300"}`}
            >
              <option value="" disabled>Select one</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {error && (
              <label className="label">
                <span className="label-text-alt text-error">{error.message}</span>
              </label>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormSelect;


