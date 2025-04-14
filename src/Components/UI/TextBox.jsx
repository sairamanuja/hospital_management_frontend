export const TextBox = ({ label, type, value, placeholder, onChange, ariaLabel }) => (
   
   
   
   
   <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-label={ariaLabel}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );