const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    // 1. Get control parameters from the URL
    const delay = parseInt(req.query.delay) || 0;       // in milliseconds
    const status = parseInt(req.query.status) || 200;   // e.g., 500, 404, 200

    console.log('status', status);


    // 2. Simulate the Network Delay (Timeout Test)
    setTimeout(() => {
        // 3. Send the specific Status Code (Retry/Circuit Test)
        res.status(status).json(status === 200 ? [{
                "id": 132935648,
                "node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
                "name": "boysenberry-repo-12",
                "full_name": "octocat/boysenberry-repo-12",
                "private": false,
            }] : `Simulated Error with status ${status}`,
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

app.get('/2', (req, res) => {
    // 1. Get control parameters from the URL
    const delay = parseInt(req.query.delay) || 0;       // in milliseconds
    const status = parseInt(req.query.status) || 200;   // e.g., 500, 404, 200


    // 2. Simulate the Network Delay (Timeout Test)
    setTimeout(() => {
        // 3. Send the specific Status Code (Retry/Circuit Test)
        res.status(status).json(status === 200 ? [{
                "id": 132935648,
                "node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
                "name": "boysenberry-repo-12",
                "full_name": "octocat/boysenberry-repo-12",
                "private": false,
            }] : `Simulated Error with status ${status}`,
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

app.get('/4', (req, res) => {
    // 1. Get control parameters from the URL
    const delay = parseInt(req.query.delay) || 0;       // in milliseconds
    const status = parseInt(req.query.status) || 200;   // e.g., 500, 404, 200

    // 2. Simulate the Network Delay (Timeout Test)
    setTimeout(() => {
        // 3. Send the specific Status Code (Retry/Circuit Test)
        res.status(status).json(status === 200 ? [{
                "id": 132935648,
                "node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
                "name": "boysenberry-repo-12",
                "full_name": "octocat/boysenberry-repo-12",
                "private": false,
            }] : `Simulated Error with status ${status}`,
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

const multer = require(`multer`);
const upload = multer(); // For handling multipart/form-data

// GET an image
app.get('/image', (req, res) => {
    setTimeout(() => {
        res.sendFile(__dirname + '/test-image.jpeg');
    }, 0);
});

// POST an image
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');
    console.log(`Received image: ${req.file.originalname}, Size: ${req.file.size} bytes`);
    res.json({ message: "Upload successful", size: req.file.size });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});