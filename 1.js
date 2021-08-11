const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const date = new Date();

const day = date.getDay();

console.log("Today is: " + days[day])

let hour = date.getHours();

if(hour < 12 )
    console.log("Current time is : " + hour % 12 + " AM " + " : " + date.getMinutes() +" : " + date.getSeconds())
else
    console.log("Current time is : " + hour % 12 + " PM " + " : " + date.getMinutes() + " : " + date.getSeconds())