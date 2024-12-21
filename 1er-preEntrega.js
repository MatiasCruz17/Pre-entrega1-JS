//Simulador de plazo fijo tradicional. Utilizo el ingles para poder familiarizarme y aprender.
const moneyInvested = parseFloat(prompt("The monthly yield is 4%. how much money do you want to invest?"));
const monthlyPercentage = 0.04;


if(moneyInvested > 5000000){
    alert("The amount exceeds the limit");
    } else {
        const increment = moneyInvested * monthlyPercentage;
        const total = increment + moneyInvested;

        alert("The total amount after one month is $ "+total.toFixed(2));
    }