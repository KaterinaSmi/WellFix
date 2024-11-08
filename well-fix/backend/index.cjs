const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const submissionFilePath = path.join(__dirname, 'submission.json');
console.log('Submission file path:', submissionFilePath)

app.post('/submit-form', (req, res) => {
    
    console.log('Received submissions: ', req.body);
    const { name, email, message } = req.body;

    // Validate input
    if (!name) {
        return res.status(400).json({ error: 'Anna nimesi' });
    } else if (!email) {
        return res.status(400).json({ error: 'Anna sähköpostiosoitteesi' });
    }

    // Read the submissions file
    fs.readFile(__dirname + '/submission.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(400).json({ error: 'Error reading file' });
        }

        // Initialize submissions
        let submissions;
        try {
            submissions = JSON.parse(data || '[]'); // Handle empty file case
        } catch (parseError) {
            return res.status(500).json({ error: 'Error parsing submissions' });
        }

        // Add new entry to submissions
        submissions.push({ name, email, message, date: new Date() });

        // Write updated submissions back to the file
        fs.writeFile(submissionFilePath, JSON.stringify(submissions, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error writing file' });
            }
            res.send("Form submitted successfully!");
        });
    });
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});
