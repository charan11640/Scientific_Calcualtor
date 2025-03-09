document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let input = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (button.id === 'clear') {
                input = '';
            } else if (button.id === 'delete') {
                input = input.slice(0, -1);
            } else if (button.id === 'equals') {
                try {
                    input = eval(input).toString();
                } catch {
                    input = 'Error';
                }
            } else {
                input += buttonText;
            }

            inputBox.value = input;
        });
    });
});