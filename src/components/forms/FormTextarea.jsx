// components/FormTextarea.js
import { Controller } from "react-hook-form";

const FormTextarea = ({ name, control, label, placeholder = "", rows = 4, rules = {} }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text mb-1 text-gray-700">{label}</span>
      </label>
      
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <textarea
              {...field}
              rows={rows}
              placeholder={placeholder}
              className={`textarea outline-0 textarea-gray-300 w-full ${
                error && "textarea-error border-red-500"
              }`}
            />
            {error && (
              <label className="label py-1">
                <span className="label-text-alt text-error font-medium">
                  {error.message}
                </span>
              </label>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormTextarea;