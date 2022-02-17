
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');
    let formula;
    let updatedDegree;
    let degreeSign;

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado');
    }
    // transformando F em C
    if (fahrenheitExists) {
        updatedDegree = Number(degree.toUpperCase().replace("F", ""));
        formula = fahrenheit => (fahrenheit - 32) * 5 / 9;
         degreeSign = "C";
        
    }

    // Transformando C em F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => (celsius * 1.8) + 32;
        degreeSign = "F";
        
    }

    return formula(updatedDegree).toFixed(2) + degreeSign;
}

try {
    console.log(transformDegree('50F'));
    console.log(transformDegree('10C'));
    //transformDegree('50Z');
} catch (error) {
    console.log(error.message);
}