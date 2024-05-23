export const TextInput = ({ label, name, placeholder, register }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...register(name, { required: true })}
        type="text"
        name={name}
        placeholder={placeholder}
        id={name}
        className="form-control bg-transparent text-light"
        area-described-by={`${name}-info`}
      ></input>
    </div>
  );
};
