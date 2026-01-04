export function convertToHours(duration) {
    const value = parseInt(duration);      
    const unit = duration.slice(-1);       
  if (unit === "h") return value;
  if (unit === "d") return value * 24;

  throw new Error("Invalid duration format");
}