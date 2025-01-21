//PRE-ENTREGA 1
//Simulador de plazo fijo tradicional. Utilizo el ingles para poder familiarizarme y aprender.
document.getElementById("investmentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const moneyInvested = parseFloat(document.getElementById("moneyInvested").value);
    const monthlyPercentage = 0.04;

    const resultElement = document.getElementById("result");


    if (moneyInvested > 5000000) {
        resultElement.textContent = "The amount exceeds the limit.";
    } else {
        const increment = moneyInvested * monthlyPercentage;
        const total = increment + moneyInvested;

        resultElement.textContent = `The total amount after one month is $${total.toFixed(2)}.`;
    }
});
