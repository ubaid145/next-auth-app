import { FunctionComponent } from "react";

type InputProps = {
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  className?: string;
  value?: string | number;
  onChange?: any;
  name?: string;
  id?: string;
  required?: any;
  labelClassName?: string;
  label?: string;
  type?: string;
  error?: string;
};

export const Input: FunctionComponent<InputProps> = ({
  placeholder = "",
  isDisabled = false,
  isReadOnly = false,
  className,
  value,
  onChange,
  name,
  id,
  type = "text",
  labelClassName,
  label,
  required,
  error,
}) => {
  return (
    <>
      <label className={labelClassName}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled || isReadOnly}
        onChange={(e) => onChange(e)}
        className={className}
        name={name}
        required={required}
      />
      {error && (
        <p className="text-sm" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </>
  );
};
