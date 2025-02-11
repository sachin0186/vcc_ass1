const express = require('express');
const app = express();
const port = 8000;

// Hardcoded customer data
const customer = { id: 1, name: 'Alice Johnson', email: 'alice@example.com' };

// Endpoint to get customer details
app.get('/api/customer', (req, res) => {
    res.json(customer);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Customer Service runninng at ${port}`);
});
