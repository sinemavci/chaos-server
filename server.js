const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    // 1. Get control parameters from the URL
    const delay = parseInt(req.query.delay) || 0;       // in milliseconds
    const status = parseInt(req.query.status) || 200;   // e.g., 500, 404, 200

    console.log(`Request received: Delay=${delay}ms, Status=${status}`); 1

    // 2. Simulate the Network Delay (Timeout Test)
    setTimeout(() => {
        // 3. Send the specific Status Code (Retry/Circuit Test)
        res.status(status).json([{
                "id": 132935648,
                "node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
                "name": "boysenberry-repo-12",
                "full_name": "octocat/boysenberry-repo-12",
                "private": false,
            }]
            // message: status === 200 ? [{
            //     "id": 132935648,
            //     "node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
            //     "name": "boysenberry-repo-1",
            //     "full_name": "octocat/boysenberry-repo-1",
            //     "private": false,
            // }] : `Simulated Error with status ${status}`,
            // //message: status === 200 ? "Success!" : "Simulated Error",
            // serverTime: new Date().toISOString(),
            // receivedParams: { delay, status }
        );
    }, delay);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});