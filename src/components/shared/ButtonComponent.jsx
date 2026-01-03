const ButtonComponent = ({ 
  onClick, 
  children, 
  type = "primary", // primary, secondary, outline
  className = "" 
}) => {
  
  const baseStyles = "px-8 py-2 cursor-pointer rounded-full font-semibold transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center gap-2 text-lg";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-secondary text-base-content hover:bg-opacity-80",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[type]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent