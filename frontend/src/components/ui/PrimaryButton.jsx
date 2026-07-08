function PrimaryButton({
  children,
  loading = false,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading}
      className={`w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,.35)] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {loading ? "Predicting..." : children}
    </button>
  );
}

export default PrimaryButton;