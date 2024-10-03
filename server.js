const express = require('express')
const app = express()


// Question 1 goes here
app.get('/patients', (req, res) => {
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving patients');
        } else {
            res.json(results);
        }
    });
});

// Question 2 goes here
app.get('/providers',(req ,res) =>{
    const query = 'SELECT first_name, last_name , provider_specialty';
    db.query(query, (err, result) =>{
        if(err){
            console.error(err);
            res.status(500).send ('Error retrieving info from providers')
        }else {
            res.json(result);
        }
    });
});


// Question 3 goes here
app.get('/patients/firstname', (req, res) => {
    const firstName = req.query.first_name;

    if (!firstName) {
        return res.status(400).send('Please provide a first name');
    }
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';
    db.query(query, [firstName], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving patients by first name');
        } else {
            res.json(results);
        }
    });
});


//Question 4 goes here
app.get('/providers/specialty', (req, res) => {
    const specialty = req.query.specialty;
    if (!specialty) {
        return res.status(400).send('Please provide a provider specialty');
    }
    const query = 'SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?';
    db.query(query, [specialty], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving providers by specialty');
        } else {
            res.json(results);
        }
    });
});

// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})