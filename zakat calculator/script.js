// ac may hum nay initial value kalie space rakee hai because we dont need any thing
let default_value = "";
// ac ko ac ley banaya hai kay sare buttons akk array may ajay
let values = document.querySelectorAll('.btn');
console.log(values)
// ac may 
for (let i = 0; i < values.length; i++) {
  values[i].addEventListener('click', (e) => {
    console.log(values[i].textContent);
    let n = (values[i].textContent);
// conditions hai 
    // = button
    if (n == "=") {
      document.querySelector('input').value = eval(document.querySelector('input').value);
    }

    // C button 
    // ac may agr click hoga tou whole value '' empty space se replace hojay gee or kuch memory may nhi hoga
    else if (e.target.innerHTML == 'C') {
      default_value = ""
      document.querySelector('input').value = default_value;
    }
     // Multiply
     else if (e.target.innerHTML == 'X') {
      document.querySelector('input').value += "*";
    }
    // current gold
    else if (e.target.innerHTML == 'Currrent Gold') {
        document.querySelector('input').value += "232125.831";
      }
    // current silver
    else if (e.target.innerHTML == 'Currrent Silver') {
        document.querySelector('input').value += "2686";
      }

    // calculating zakat
    else if (e.target.innerHTML == 'calculate zakat') {
        document.querySelector('input').value += "0.025";
      }

    // calculating user input zakat
    else if (e.target.innerHTML == 'Save') {
      saveInput()
     
    }

    // Backspace button
    // ac may agr click hoga tou last digit remove hoga ac leye hum nay slice(0, -1) de hai kay wo start se...
    // ... akk kam tak show karay
    else if (e.target.innerHTML == '⌫') {
      let inputValue = document.querySelector('input').value;
      document.querySelector('input').value = inputValue.slice(0, -1);
      default_value = inputValue.slice(0, -1);
    }
// ye ac leye hai koi 2 digit ko operation kay sath dekanay kay key use kia hai like 2+3 ,3/7 etc
    else {
      document.querySelector('input').value += n;
    }
  });
}
// -----------------------------------------------------------------------------------------------------------
// input from user
function saveInput() {
  let inputField = document.getElementById("#inputField");
  let inputValue_gold = inputField.value;
  document.querySelector('input').value += String(inputValue_gold);

  console.log("The input value is: " + inputValue_gold);
  // You can use the inputValue variable for further processing
}