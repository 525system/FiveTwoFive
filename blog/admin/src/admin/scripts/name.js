
const authName = document.querySelector('#authName');
// let emailID = sessionStorage.getItem("email");
let name = sessionStorage.getItem("username");
console.log(name)


const htmlName = `
        <h1> Welcome, ${name}</h1>
      `;
authName.innerHTML = htmlName;

