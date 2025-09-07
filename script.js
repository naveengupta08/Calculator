let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (b) => {
        let btnValue = b.target.innerHTML;

        if (btnValue === '=') {
            try {
                string = String(eval(string));
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = '';
            }
        }
        else if (btnValue === 'AC') {
            string = '';
            inputBox.value = '0';
        }
        else if (btnValue === 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string || '0';
        }
        else if (b.target.id === 'plusminus') {
            if (string !== '') {
                string = String(-parseFloat(string));
                inputBox.value = string;
            }
        }
        else {
            string += btnValue;
            inputBox.value = string;
        }
    });
});