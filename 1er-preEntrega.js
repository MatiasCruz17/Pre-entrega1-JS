//Simulador de plazo fijo tradicional. Utilizo el ingles para poder familiarizarme y aprender.
const moneyInvested = parseFloat(prompt("The monthly yield is 4%. how much money do you want to invest?"));
const monthlyPercentage = 0.04;
const increment = moneyInvested * monthlyPercentage;
const total = increment + moneyInvested;

for(let investment = 1; investment <= 5000000; investment++){
    if (investment>5000000){
        alert("The amount exceeds the limit");
        break;
    }
}

alert("Its monthly performance is $" + total);
