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

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = ""

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const loanAmount = parseInt(document.getElementById("loanAmount").value);

if(!age || isNaN(age) || age<= 0) {
    const errorAge = document.createElement ("p");
    errorAge.textContent = "Please enter a valid age"
    resultElement.appendChild(errorAge);
    return;
}

if(!loanAmount || isNaN(loanAmount) || ![10000, 30000, 50000].includes(parseInt(loanAmount))){
    const errorLoan = document.createElement ("p");
    errorLoan.textContent = "Please select a valid loan amount"
    resultElement.appendChild(errorLoan);
    return;
}

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
        const approved = document.createElement("p");
        approved.innerHTML = `
            Hello, ${name}.<br>
            You selected a loan of $${chosenLoan.amount}.<br>
            With an interest of ${(chosenLoan.interes * 100).toFixed(2)}%, the total to pay is $${totalPayment.toFixed(2)}.
        `;
        resultElement.appendChild(approved);
    } else {
        const errorInvalid = document.createElement("p");
        errorInvalid.textContent = "Invalid loan amount selected.";
        resultElement.appendChild(errorInvalid);
    }
});