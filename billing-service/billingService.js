const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 9000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to generate a billing summary
app.get('/api/billing', async (req, res) => {
    try {
        // Fetch customer details from Customer Service
        const response = await axios.get('http://192.168.56.5:8000/api/customer');
        const customer = response.data;

        // Simulate billing data
        const billingData = {
            customerId: customer.id,
            amountDue: '$150',
            dueDate: '2025-02-28'
        };

        // Combine customer and billing data
        const result = { ...customer, ...billingData };

        res.json(result);
    } catch (error) {
        console.error('Error fetching customer data:', error.message);
        res.status(500).json({ message: 'Failed to generate billing summary' });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Billing Service running at http://0.0.0.0:${port}`);
});

