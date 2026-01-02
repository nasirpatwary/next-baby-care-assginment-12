// components/FormInput.js
import { Controller } from "react-hook-form";

const FormInput = ({ name, control, label, type = "text", placeholder = "", readOnly, rules = {} }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text mb-1">{label}</span>
      </label>
      
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type={type}
              readOnly={readOnly}
              placeholder={placeholder}
              className={`input outline-0 w-full ${error && "input-error"}`}
            />
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

export default FormInput;