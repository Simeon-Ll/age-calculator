const $id = item => document.getElementById(item)


let dayError = {}, monthError = {}, yearError = {}

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth()
let currentDay = currentDate.getDate()

let daysOfTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
if (currentYear % 4 == 0) {
    daysOfTheMonth[1] = 29
}






let age = {
    year: '--',
    month: '--',
    day: '--',
}

//Logic for age calculation
const calculate = (inputDay, inputMonth, inputYear) =>{
    if (inputMonth < currentMonth) {
        age.year = currentYear - inputYear
        if (inputDay <= currentDay) {
            age.month = currentMonth - inputMonth
            age.day = currentDay - inputDay
        }else{
            
            age.month = currentMonth - inputMonth -1
            age.day = (daysOfTheMonth[currentMonth-1] - inputDay) + currentDay
        }

        return {
            month: age.month,
            day: age.day,
            year: age.year
        }
    }else if(inputMonth >= currentMonth){
       
   
        age.year = currentYear - inputYear -1
        if (inputDay <= currentDay) {
            age.month = (11 - inputMonth + currentMonth) + 1
            age.day = currentDay - inputDay
        }else{
            age.month = (11 - inputMonth + currentMonth)
            age.day = (daysOfTheMonth[currentMonth-1] - inputDay) + currentDay
        }

        if(age.month == 12){
            age.year += 1
            age.month = 0
        }

        return {
            day: age.day,
            month: age.month,
            year: age.year
        }
        
    }
}





export default{
    age,
    calculate,
    
}