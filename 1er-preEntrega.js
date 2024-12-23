//PRE-ENTREGA 1
//Simulador de plazo fijo tradicional. Utilizo el ingles para poder familiarizarme y aprender.
/*const moneyInvested = parseFloat(prompt("The monthly yield is 4%. how much money do you want to invest?"));
const monthlyPercentage = 0.04;


if(moneyInvested > 5000000){
    alert("The amount exceeds the limit");
    } else {
        const increment = moneyInvested * monthlyPercentage;
        const total = increment + moneyInvested;

        alert("The total amount after one month is $ "+total.toFixed(2));
    }



//PRE-ENTREGA 2

/*Estructura HTML del proyecto. 
Variables de JS necesarias. 
Funciones esenciales del proceso a simular.
Objetos de JS.
Arrays.
Métodos de búsqueda y filtrado sobre el Array.*/

//Simular una financiera

alert("Next we will ask you for some information to simulate the loan.")

const userData= {
    name: prompt("What's your name?"),
    age: parseInt(prompt ("How old are you?")),
};

if (userData.age < 18){
    alert("You are a minor. You cannot simulate a loan.");
} /*esta parte no me funciona*/ else {
    const availableAmount = [
        {amount: 10000, interes: 0.02},
        {amount: 30000, interes: 0.03},
        {amount: 50000, interes: 0.05}
    ];


const availableOptions = availableAmount.map(option=> option.amount );
const chooseOption = parseInt(prompt("How much money do you need? " + availableOptions.join(", ")));

const chooseAmount = availableAmount.find(option=> option.amount === chooseOption);

if (chooseAmount){
    const totalPayment= chooseAmount.amount*(1+chooseAmount.interes)
    alert("Hello, "+ userData.name + ". You selected a loan of " + chooseAmount.amount +".");
    alert ("With an interest of " + (chooseOption.interes * 100) + "%, the total to pay is $ " + totalPayment.toFixed(2));
}else { 
    alert("Invalid loan amount selected.");
    }
}