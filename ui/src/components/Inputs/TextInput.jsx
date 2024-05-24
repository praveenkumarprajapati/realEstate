export const TextInput = ({
  label,
  name,
  placeholder,
  register,
  type = "text",
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...register(name, { required: true })}
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        className="form-control bg-transparent"
        area-described-by={`${name}-info`}
      ></input>
    </div>
  );
};
