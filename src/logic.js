let dayError = {state: false}, monthError = {state: false}, yearError = {state: false}

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

let state = false

const check = (inputDay, inputMonth, inputYear) =>{

    
   if (inputDay == '') {
    dayError.state = true
    dayError.error = 'This field is required'
    state = false
   }else if (inputDay > daysOfTheMonth[inputMonth] || (inputDay == 29 && inputMonth == 2 && inputYear % 4 != 0)) {
    dayError.state = true
    dayError.error = 'Must be a valid day'
    state = false
   }else{
    state = true
    dayError.state = false
   }

   if (inputMonth == '') {
    monthError.state = true
    monthError.error = 'This field is required'
    state = false
   }else if (inputMonth > 11) {
    monthError.state = true
    monthError.error = 'Must be a valid month'
    state = false
   }else{
    state = true
    monthError.state = false
   }

   if (inputYear == '') {
    yearError.state = true
    yearError.error = 'This field is required'
    state = false
   }else if (inputYear > currentYear) {
    yearError.state = true
    yearError.error = 'Must be in the past'
    state = false
   }else{
    state = true
    yearError.state = false
   }
   

if (dayError.state || monthError.state || yearError.state) {
    
    return {
        year: '--',
        month: '--',
        day: '--',
    }

}else{
    
    return calculate(inputDay, inputMonth-1, inputYear)
}
   
}





export default{
    age,
    check,
    error:{
      dayError,
      monthError,
      yearError  
    }
    
    
}