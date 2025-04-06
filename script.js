const userInput = document.getElementById("birthDate");
userInput.max = new Date().toISOString().split("T")[0]; // Set max date to today
const calculateButton = document.getElementById("calculateBtn");
const Result = document.getElementById("result");


calculateButton.addEventListener("click", ()=>{
    calculateAge();
});
function calculateAge() {
   const birthDate = new Date(userInput.value);
   const today = new Date();
   let d1 = birthDate.getDate();
   let m1 = birthDate.getMonth() + 1; // Months are zero-based
   let y1 = birthDate.getFullYear();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // Months are zero-based
    let y2 = today.getFullYear();
    let year, month, day;
    
    year = y2 - y1; // Calculate age in years
    
    
    if (m2 >= m1 ) {
        month = m2 - m1; // Calculate age in months
    }
    else{
        year--;
        month = 12 + m2 - m1; // Calculate age in months
    }
    if (d2 >= d1) {
        day = d2 - d1; // Calculate age in days
    } else {
        month--;
        day = getDaysInMonth(y1, m1 ) + d2 - d1 // Get the number of days in the previous month
    }
    if(month<0){
        month = 11;
        year--;

    }
    Result.style.fontSize = "1.5rem";
    Result.innerHTML =`You are <span>${year}</span> years, <span>${month}</span> months, and <span>${day}</span> days old.`;
};
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}



