export function convertUnixTimestamp(dt,...proto) {
    const date = new Date(dt * 1000);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    if(proto){
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

export function convertUnixTimestamp_Days(dt) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dt * 1000);
    const dayOfWeek = days[date.getDay()];
    const month = date.toLocaleString("default", { month: "short" });
    const dayOfMonth = ("0" + date.getDate()).slice(-2);
   
    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
    
  }