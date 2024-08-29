function calculate() {
    let x = +prompt('Enter the first number: ');
    let y = +prompt('Enter the second number: ');
    let res = 0;
    let operation = window.prompt(`Which operation do you want to do? '+ - * /'`);


    // ------------------------------------------------------- //
    function continueCalculate() {
        let res2 = 0;
        let z = +prompt('Enter second number: ');
        let operation = window.prompt(`Which operation do you want to do? '+ - * /'`);
        if (operation == '+') {
            res2 = res + z;
            let choice = confirm(`Result = ${res2} \n Do you wish to continue or start over?`);
            if (choice == false) {
                calculate();
            } else {
                res = res2;
                continueCalculate();
            }
        } else if (operation == '-') {
            res2 = res - z;
            let choice = confirm(`Result = ${res2} \n Do you wish to continue or start over?`);
            if (choice == false) {
                calculate();
            } else {
                res = res2;
                continueCalculate();
            }
        } else if (operation == '*') {
            res2 = res * z;
            let choice = confirm(`Result = ${res2} \n Do you wish to continue or start over?`);
            if (choice == false) {
                calculate();
            } else {
                res = res2;
                continueCalculate();
            }
        } else if (operation == '/') {
            res2 = res / z;
            let choice = confirm(`Result = ${res2} \n Do you wish to continue or start over?`);
            if (choice == false) {
                calculate();
            } else {
                res = res2;
                continueCalculate();
            }
        }
    }
    // ------------------------------------------------------- //


    if (operation == '+') {
        res = x + y;
        let choice = confirm(`Result = ${res} \n Do you wish to continue or start over?`);
        if (choice == false) {
            calculate();
        } else {
            continueCalculate();
        }
    } else if (operation == '-') {
        res = x - y;
        let choice = confirm(`Result = ${res} \n Do you wish to continue or start over?`);
        if (choice == false) {
            calculate();
        } else {
            continueCalculate();
        }
    } else if (operation == '*') {
        res = x * y;
        let choice = confirm(`Result = ${res} \n Do you wish to continue or start over?`);
        if (choice == false) {
            calculate();
        } else {
            continueCalculate();
        }
    } else if (operation == '/') {
        res = x / y;
        let choice = confirm(`Result = ${res} \n Do you wish to continue or start over?`);
        if (choice == false) {
            calculate();
        } else {
            continueCalculate();
        }
    }

}