function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    
    if (username && password) {
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('signup-message').innerText = data.message;
        })
        .catch(error => console.error('Error:', error));
    } else {
        document.getElementById('signup-message').innerText = 'Please fill in all fields!';
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('login-message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}

function convertBinaryToDecimal() {
    const binary = document.getElementById('binary-input').value;
    if (/^[01]+$/.test(binary)) {
        fetch('http://localhost:5000/convert-binary', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ binary })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('decimal-output').innerText = `Decimal: ${data.decimal}`;
        })
        .catch(error => console.error('Error:', error));
    } else {
        document.getElementById('decimal-output').innerText = 'Invalid binary input!';
    }
}

function convertDecimalToBinary() {
    const decimal = document.getElementById('decimal-input').value;
    if (!isNaN(decimal) && decimal.trim() !== '') {
        fetch('http://localhost:5000/convert-decimal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ decimal })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('binary-output').innerText = `Binary: ${data.binary}`;
        })
        .catch(error => console.error('Error:', error));
    } else {
        document.getElementById('binary-output').innerText = 'Invalid decimal input!';
    }
}
