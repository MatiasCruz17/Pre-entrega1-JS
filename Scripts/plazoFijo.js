//PRE-ENTREGA 1
//Voy a hacer un simulador de plazo fijo.
document.getElementById("investmentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const moneyInvested = parseFloat(document.getElementById("moneyInvested").value);
    const resultElement = document.getElementById("result");
    
    fetch("/Datos.json")
        .then(response => response.json())
        .then(data =>{
            const investment = data.find(item => item.name === "fixed-term investment");

            if (!investment){
                resultElement.textContent = "No investment data found";
                return;
            }
            const monthlyPercentage = investment.rate;

            if(moneyInvested > 5000000){
                resultElement.textContent = "The amount exceeds the limit"
            } else {
                const increment = moneyInvested * monthlyPercentage;
                const total = increment + moneyInvested;
                resultElement.textContent = `The total amount is after one month is $${total.toFixed(2)}`;
            }
    })
})
