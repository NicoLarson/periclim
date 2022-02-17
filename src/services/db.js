const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const app = express()

const SELECT_ALL_DOCUMENTS_QUERY = `SELECT d_title, d_type,	d_year,	d_abstract,	d_url, d_doi, d_standard_number, j_name, sa_name
                                    FROM dp_document
                                    INNER JOIN dp_journal
                                    ON d_fk_journal_id = j_id
                                    INNER JOIN dp_subject_area
                                    ON d_fk_subject_area_id = sa_id;
                                    `

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_doc_periclim",
    charset: 'UTF8',
})

connection.connect(err => {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    res.send('Go to /articles to see articles')
})

app.get('/articles', (req, res) => {
    connection.query(SELECT_ALL_DOCUMENTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })

})

app.listen(4000, () => {
    console.log('Server listening on port 4000')
})