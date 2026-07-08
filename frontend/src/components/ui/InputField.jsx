function InputField({
  label,
  icon: Icon,
  className = "",
  min,
  max,
  step = "any",
  ...props
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="flex items-center rounded-xl border border-slate-700 bg-slate-950 px-4 transition focus-within:border-blue-500">

        {Icon && (
          <Icon
            size={18}
            className="mr-3 text-slate-500"
          />
        )}

        <input
          {...props}
          min={min}
          max={max}
          step={step}
          className="w-full bg-transparent py-3 text-white outline-none"
        />

      </div>
    </div>
  );
}

export default InputField;