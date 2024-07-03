/* pode tener un orden y reutilizar */

//funciones
function SeeYou() {
    alert("Solo nos queda 2 semanas")
}

/* Funcion sumar */
function Sumar(NumA, NumB) {
    NumA = parseInt(NumA);
    NumB = parseInt(NumB);
    document.getElementById('Resultado').innerHTML=NumA+NumB;
}

function Multiplicar(NumA, NumB) {
    NumA = parseInt(NumA);
    NumB = parseInt(NumB);
    document.getElementById('Resultado').innerHTML=NumA*NumB;
}

function Login() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
  
    if (user == "Leo" && pass == "pass750") {
      window.location.href = "productos.html";
    } else {
      alert("Usuario o contraseña incorrectos");
      document.getElementById("user").value = "";
      document.getElementById("pass").value = "";
      document.getElementById("user").focus();
    }
  }