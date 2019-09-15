/*
 * This is the JavaScript file used to implement the functionalities of a pocket calculator.
 * Design Decisions:
 * This calculator will work for two operands and one operator.
 * It can perform for consecutive expressions. For eg: a+b=r
 * r*d = s
 * s-e = t
 * t/f = u
 * But it cannot perform operations with more than two operands such as a+b+c-d=*/


"use strict";

(function(){
    window.onload = function(){
        let op;                 //To store the operator.
        let firstVal = 0;       //To store the operand 1 and clear the display once any operator is clicked.
        let secondVal;          //To store the operand 2.
        let countOp = 0;        //To check if + or = was clicked.
        let decCount = 0;       //To check if user wants to enter a decimal number.

        let display = (val) => {
            let currentDisplayVal = parseFloat(document.getElementById("displayResult").innerText,10);
            if(decCount === 0){
                let current = currentDisplayVal * 10 + parseFloat(val, 10);
                document.getElementById("displayResult").innerText = current;
            }
            else if(decCount === 2){
                document.getElementById("error").innerText = "Something went wrong";
            }
            else{
                let current = currentDisplayVal + (parseFloat(val, 10)*0.1);
                document.getElementById("displayResult").innerText = current;
            }
        }

        document.getElementById("dec").onclick = function(){
            decCount++;
        }

        document.getElementById("one").onclick = function(){
            let val = document.getElementById("one").innerText;
            display(val);
        }

        document.getElementById("two").onclick = function(){
            let val = document.getElementById("two").innerText;
            display(val);
        }

        document.getElementById("three").onclick = function(){
            let val = document.getElementById("three").innerText;
            display(val);
        }

        document.getElementById("four").onclick = function(){
            let val = document.getElementById("four").innerText;
            display(val);
        }

        document.getElementById("five").onclick = function(){
            let val = document.getElementById("five").innerText;
            display(val);
        }

        document.getElementById("six").onclick = function(){
            let val = document.getElementById("six").innerText;
            display(val);
        }

        document.getElementById("seven").onclick = function(){
            let val = document.getElementById("seven").innerText;
            display(val);
        }

        document.getElementById("eight").onclick = function(){
            let val = document.getElementById("eight").innerText;
            display(val);
        }

        document.getElementById("nine").onclick = function(){
            let val = document.getElementById("nine").innerText;
            display(val);
        }

        document.getElementById("zero").onclick = function(){
            let val = document.getElementById("zero").innerText;
            display(val);
        }

        document.getElementById("clear").onclick = function(){
            decCount = 0;
            countOp = 0;
            document.getElementById("displayResult").innerText = parseInt(0, 10);
        }

        document.getElementById("addEqual").onclick = function(){
            if(countOp === 0){
                firstVal = parseFloat(document.getElementById("displayResult").innerText,10);
                document.getElementById("displayResult").innerText = parseFloat(0, 10);
                op = "+";
                countOp++;
                decCount = 0;
            }
            else{
                secondVal = parseFloat(document.getElementById("displayResult").innerHTML,10);
                operation(op);
            }
        }

        document.getElementById("sub").onclick = function(){
            if(countOp === 0){
                firstVal = parseFloat(document.getElementById("displayResult").innerText,10);
                document.getElementById("displayResult").innerText = parseFloat(0, 10);
                op = "-";
                countOp++;
                decCount = 0;
            }
            else{
                operation(op);
            }
        }

        document.getElementById("division").onclick = function(){
            if(countOp === 0){
                firstVal = parseFloat(document.getElementById("displayResult").innerText,10);
                document.getElementById("displayResult").innerText = parseFloat(0, 10);
                op = "/";
                countOp++;
                decCount = 0;
            }
            else{
                //document.getElementById("error").innerText = "Something went wrong";
                operation(op);
            }
        }

        document.getElementById("mul").onclick = function(){
            if(countOp === 0){
                firstVal = parseFloat(document.getElementById("displayResult").innerText,10);
                document.getElementById("displayResult").innerText = parseInt(0, 10);
                op = "*";
                countOp++;
                decCount = 0;
            }
            else{
                //document.getElementById("error").innerText = "Something went wrong";
                operation(op);
            }
        }

        let operation = (operation) => {
            switch(operation){   
                case "+":
                    if(this.isNaN(secondVal) && countOp === 1){
                        document.getElementById("displayResult").innerText = firstVal + firstVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    else{
                        document.getElementById("displayResult").innerText = firstVal + secondVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    break;
                case "-":
                    if(this.isNaN(secondVal) && countOp === 1){
                        alert("enter if");
                        document.getElementById("displayResult").innerText = firstVal - firstVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    else{
                        document.getElementById("displayResult").innerText = firstVal - secondVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    break;
                case "*":
                    if(this.isNaN(secondVal) && countOp === 1){
                        document.getElementById("displayResult").innerText = firstVal * firstVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    else{
                        document.getElementById("displayResult").innerText = firstVal * secondVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    break;
                case "/":
                    if(this.isNaN(secondVal) && countOp === 1){
                        document.getElementById("displayResult").innerText = firstVal / firstVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    else{
                        document.getElementById("displayResult").innerText = firstVal / secondVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    break;
                default:
                    countOp = 0;
                    decCount = 0;
                    break;
            }
        }
    }
})();
