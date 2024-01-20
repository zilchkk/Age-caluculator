const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge () {
  const birthdayvalue = birthdayEl.value;
  if (birthdayvalue === " "){
    alert("Please enter proper birth age")
  }
  else {
    const age = getAge(birthdayvalue);
    resultEl.innerText = `your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayvalue) {
  const currentDate= new Date();
  const birthDate = new Date(birthdayvalue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  
  if (month < 0 || 
    month === 0 && currentDate.getDate() < birthDate.getDate()
    )
    {
     age -- ;
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);