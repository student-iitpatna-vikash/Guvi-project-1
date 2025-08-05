
const display = document.getElementById('display');
const historyList = document.getElementById('history-list');
let currentInput = '';

// Select all calculator buttons (numbers, dot, equals)
const numButtons = document.querySelectorAll('.buttons-vertical button');
// Select all operator buttons
const opButtons = document.querySelectorAll('.buttons-operators button');

function updateDisplay() {
    display.value = currentInput;
}

function addToHistory(expression, result) {
    fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression, result })
    })
    .then(() => fetchHistory());
}

function fetchHistory() {
    fetch('/api/history')
        .then(res => res.json())
        .then(data => {
            historyList.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.expression} = ${item.result}`;
                historyList.appendChild(li);
            });
        });
}


// Handle number, dot, and equals buttons
numButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;
        if (val === '=') {
            try {
                const result = eval(currentInput);
                addToHistory(currentInput, result);
                currentInput = result.toString();
                updateDisplay();
            } catch {
                currentInput = 'Error';
                updateDisplay();
                setTimeout(() => {
                    currentInput = '';
                    updateDisplay();
                }, 1000);
            }
        } else {
            currentInput += val;
            updateDisplay();
        }
    });
});

// Handle operator and clear buttons
opButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;
        if (val === 'C') {
            currentInput = '';
            updateDisplay();
        } else {
            currentInput += val;
            updateDisplay();
        }
    });
});

fetchHistory();
