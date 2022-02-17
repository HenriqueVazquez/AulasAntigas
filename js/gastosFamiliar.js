let  family = {
    incomes: [{
        nome: "salario",
        value: 2000.80,
    },
    {
        nome: "investimento",
        value: 3700,
    }, 
    {
        nome: "czinho da ka",
        value: 37000,
    }, 
],

    expenses: [{
        nome: "aluguel",
        value: 1000,
    },
    {
        nome: "internet",
        value: 1200.52,
    }
]
}

function sum(array) {
    let total = 0;
    

 

    for(let value of array) {        
        
        total += value.value;
    }

    return total;
}


function CalculationBalance(array){
let totalIncomes = new Number(0);
let totalExpenses = new Number(0)
let balance = new Number(0);

totalIncomes = sum(array.incomes);
totalExpenses = sum(array.expenses)
balance = totalIncomes - totalExpenses;


if(balance >= 0) {
    console.log(`A familia esta com o saldo positivo de R$${balance.toFixed(2)} Reais`);
}
else{
    console.log(`A familia esta com o saldo negativo de R$${balance.toFixed(2)} Reais`);
}
}

CalculationBalance(family)

