//PRE-ENTREGA 2

/*Estructura HTML del proyecto. 
Variables de JS necesarias. 
Funciones esenciales del proceso a simular.
Objetos de JS.
Arrays.
Métodos de búsqueda y filtrado sobre el Array.*/

//Simular una financiera

document.getElementById("loanForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const loanAmount = parseInt(document.getElementById("loanAmount").value);

    const availableAmount = [
        { amount: 10000, interes: 0.02 },
        { amount: 30000, interes: 0.03 },
        { amount: 50000, interes: 0.05 }
    ];

    if (age < 18) {
        resultElement.textContent = "You are a minor. You cannot simulate a loan.";
        return;
    }

    const chosenLoan = availableAmount.find(option => option.amount === loanAmount);

    if (chosenLoan) {
        const totalPayment = chosenLoan.amount * (1 + chosenLoan.interes);
        resultElement.innerHTML = `
            Hello, ${name}.<br>
            You selected a loan of $${chosenLoan.amount}.<br>
            With an interest of ${(chosenLoan.interes * 100).toFixed(2)}%, the total to pay is $${totalPayment.toFixed(2)}.
        `;

    } else {
        resultElement.textContent = "Invalid loan amount selected.";
    }
});