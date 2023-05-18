
export const dateFormat = (dateTime) => {
    var d =  new Date(dateTime);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    
    var hour = d.getHours();
    var minute = d.getMinutes();

    if(day < 10) day = '0' + day;
    if(month < 10 ) month = '0' + month;
    if(hour < 10 ) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;


    return {
         date: `${day}.${month}.${year}`,
         time:  `${hour}:${minute}`
    }
}
export const initialDate = (day=0 ) =>{
        var today = new Date();
        today.setDate(today.getDate() + day)
        return today.toISOString().slice(0, 10) +" " + new Date().toLocaleTimeString('tr-TR').slice(0, 5)
}
export const totalRentDayResult = (rentEndDate, rentStartDate) => {
      
        const date1 = new Date(rentEndDate);
        const date2 = new Date(rentStartDate);
        const diffTime = Math.abs(date2 - date1)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays;
}

export const expriyFormat = (value) => {
  const expdate = value;
  const expDateFormatter =
  expdate.replace(/\//g, "").substring(0, 2) +
  (expdate.length > 2 ? "/" : "") +
  expdate.replace(/\//g, "").substring(2, 4);

  return expDateFormatter;
}


export const socialLinks = [
    {
      url: "#",
      icon: "ri-facebook-line",
    },
    {
      url: "#",
      icon: "ri-instagram-line",
    },
    {
      url: "#",
      icon: "ri-linkedin-line",
    },
    {
      url: "#",
      icon: "ri-twitter-line",
    },
  ];


 
