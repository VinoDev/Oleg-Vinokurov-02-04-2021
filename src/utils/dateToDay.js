
const dateToDay = (date) => {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dateObj = new Date(date);
    
    return days[dateObj.getDay()];
}

export default dateToDay