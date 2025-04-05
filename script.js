const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('.btn'));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = '0';
                break;

            case "=":
                try {
                    display.innerText = eval(display.innerText);
                }
                catch (e) {
                    display.innerText = "Error!";
                }
                break;

            case "+/-":
                display.innerText = "-";
                break;

            case "%":
                let passedText = display.innerText + "/100";
                display.innerText = eval(passedText);
                break;

            default:
                if (display.innerText === "0" && e.target.innerText !== ".") {
                    display.innerText = e.target.innerText;
                }
                else {
                    display.innerText += e.target.innerText;
                }
            }       
    });
});

document.addEventListener('keydown', (e) => {
    let key = e.key;

    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        if (display.innerText === "0" && key !== ".") {
            display.innerText = key;
        } 
        else {
            display.innerText += key;
        }
    } 

    else if (key === "Enter") {
        try {
            display.innerText = eval(display.innerText);
        } 
        catch (e) {
            display.innerText = "Error!";
        }
    } 

    else if (key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1) || "0";
    } 

    else if (key === 'Delete') {
        display.innerText = "0";
    }
  
});
