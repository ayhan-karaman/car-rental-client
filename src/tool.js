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
export const initialDate = (day) =>{
        var today = new Date();
        today.setDate(today.getDate() + day)
        return today.toISOString().slice(0, 16) 
}
export const totalRentDayResult = (rentEndDate, rentStartDate) => {
        var date1 = new Date(rentEndDate.toString());
        var date2 = new Date(rentStartDate.toString());
        var difference = date1.getTime() - date2.getTime();
        var numberOfDays = Math.ceil(difference / (1000 * 3600 * 24)); 
        return numberOfDays;
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