document.getElementById('verify-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const code = document.getElementById('code-input').value;

    try {
        const response = await fetch('/api/verify-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
        });

        const result = await response.json();
        document.getElementById('result').textContent = result.message;
    } catch (error) {
        document.getElementById('result').textContent = 'Error verificando el código.';
    }
});