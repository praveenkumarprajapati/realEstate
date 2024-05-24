export const SelectInput = ({
  label,
  defaultValue,
  name,
  register,
  options,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor="furniture" className="form-label">
        {label}
      </label>
      <select
        {...register(name, { required: true })}
        name={name}
        id={name}
        className="form-select bg-transparent"
        defaultValue={defaultValue}
        area-described-by={`${name}-info`}
      >
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};
