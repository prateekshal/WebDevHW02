/*
 * This is the JavaScript file used to implement the functionalities of a pocket calculator.
 * Design Decisions:
 * This calculator will work for two operands and one operator.
 * It can perform for consecutive expressions. For eg: a+b=r
 * r*d = s
 * s-e = t
 * t/f = u
 * But it does not support operations with more than two operands such as a+b+c-d=
 * Negative numbers are supported.
 * Once any operator is clicked, the display changes to 0, but it retains the state.
 * Operations such as a+= are not supported by this calculator.
 * 
 * Attribution:
 * W3Schools - JavaScript.
 * 
 * */


"use strict";

(function(){
    window.onload = function(){
        let op;                 //To store the operator.
        let firstVal;           //To store the operand 1 and clear the display once any operator is clicked.
        let secondVal;          //To store the operand 2.
        let negative = false;
        let countOp = 0;        //To check if + or = was clicked.
        let decCount = 0;       //To check if user wants to enter a decimal number.
        let secNegative = false;
        let expression;

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
            if(expression === undefined){
                expression = "1";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("two").onclick = function(){
            let val = document.getElementById("two").innerText;
            if(expression === undefined){
                expression = "2";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("three").onclick = function(){
            let val = document.getElementById("three").innerText;
            if(expression === undefined){
                expression = "3";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("four").onclick = function(){
            let val = document.getElementById("four").innerText;
            if(expression === undefined){
                expression = "4";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("five").onclick = function(){
            let val = document.getElementById("five").innerText;
            if(expression === undefined){
                expression = "5";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("six").onclick = function(){
            let val = document.getElementById("six").innerText;
            if(expression === undefined){
                expression = "6";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("seven").onclick = function(){
            let val = document.getElementById("seven").innerText;
            if(expression === undefined){
                expression = "7";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("eight").onclick = function(){
            let val = document.getElementById("eight").innerText;
            if(expression === undefined){
                expression = "8";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("nine").onclick = function(){
            let val = document.getElementById("nine").innerText;
            if(expression === undefined){
                expression = "9";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("zero").onclick = function(){
            let val = document.getElementById("zero").innerText;
            if(expression === undefined){
                expression = "0";
            }
            else{
                expression += val;
            }
            display(val);
        }

        document.getElementById("clear").onclick = function(){
            decCount = 0;
            countOp = 0;
            expression = undefined;
            document.getElementById("displayResult").innerText = parseInt(0, 10);
        }

        document.getElementById("addEqual").onclick = function(){
            if(countOp === 0){
                firstVal = parseFloat(document.getElementById("displayResult").innerText,10);
                document.getElementById("displayResult").innerText = parseFloat(0, 10);
                op = "+";
                expression += "+";
                countOp++;
                decCount = 0;
            }
            else{
                secondVal = parseFloat(document.getElementById("displayResult").innerHTML,10);
                operation(op);
            }
        }

        document.getElementById("sub").onclick = function(){
            if(expression === undefined){
                negative = true;
            }
            else{
                if(countOp === 0){
                    firstVal = parseFloat(document.getElementById("displayResult").innerText,10);
                    document.getElementById("displayResult").innerText = parseFloat(0, 10);
                    op = "-";
                    expression += "-";
                    countOp++;
                    decCount = 0;
                }
                else if(op !== undefined){
                    secNegative = true;
                }
                else{
                    countOp++;
                    secondVal = parseFloat(document.getElementById("displayResult").innerHTML,10);
                    operation(op);
                }
            }
            
        }

        document.getElementById("division").onclick = function(){
            if(countOp === 0){
                firstVal = parseFloat(document.getElementById("displayResult").innerText,10);
                document.getElementById("displayResult").innerText = parseFloat(0, 10);
                op = "/";
                expression += "/";
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
                expression += "*";
                countOp++;
                decCount = 0;
            }
            else{
                //document.getElementById("error").innerText = "Something went wrong";
                operation(op);
            }
        }

        let operation = (operation) => {
            if(negative){
                firstVal = firstVal * (-1);
                negative = false;    
            }
            if(secNegative){
                secondVal = secondVal * (-1);
                secNegative = false;
            }
            switch(operation){   
                case "+":
                    if(isNaN(secondVal) && countOp === 1){
                        document.getElementById("displayResult").innerText = firstVal + firstVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    else{
                        document.getElementById("displayResult").innerText = firstVal + secondVal;
                        countOp = 0;
                        decCount = 0;
                        op = undefined;
                        secondVal = this.undefined;
                        expression = document.getElementById("displayResult").innerText;
                    }
                    break;
                case "-":
                    if(isNaN(secondVal) && countOp === 1){
                        document.getElementById("displayResult").innerText = firstVal - firstVal;
                        countOp = 0;
                        decCount = 0;
                    }
                    else{
                        document.getElementById("displayResult").innerText = firstVal - secondVal;
                        countOp = 0;
                        decCount = 0;
                        op = undefined;
                        expression = document.getElementById("displayResult").innerText;
                        secondVal = undefined;
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
                        op=this.undefined;
                        secondVal = this.undefined;
                        expression = document.getElementById("displayResult").innerText;
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
                        secondVal = this.undefined;
                        op = this.undefined;
                        expression = document.getElementById("displayResult").innerText;
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
