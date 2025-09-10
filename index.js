const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
  let password1 = "";
  let password2 = "";
  let passwordEl1 = document.querySelector("#password-el-1");
  let passwordEl2 = document.querySelector("#password-el-2");
  for (let i = 0; i < 13; i++) {
    let index1 = Math.floor(Math.random() * characters.length);
    let index2 = Math.floor(Math.random() * characters.length);
    password1 += characters[index1];
    password2 += characters[index2];
  }
  passwordEl1.textContent = password1;
  passwordEl2.textContent = password2;
}
