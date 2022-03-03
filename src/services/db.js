const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const app = express()

const SELECT_ALL_DOCUMENTS_QUERY = `SELECT d_id, d_title, d_type,	d_year,	d_abstract,	d_url, d_doi, d_standard_number, j_name, sa_name
                                    FROM dp_document
                                    INNER JOIN dp_journal
                                    ON d_fk_journal_id = j_id
                                    INNER JOIN dp_subject_area
                                    ON d_fk_subject_area_id = sa_id;
                                    `

const SELECT_ARTICLE_AUTHORS_QUERY = (documentId) => `SELECT a_first_name, a_last_name, a_middle_name
                                      FROM dp_author
                                      INNER JOIN dp_document_has_dp_author
                                      ON a_id = dha_fk_author_id
                                      WHERE dha_fk_document_id = ${documentId};`

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_doc_periclim",
    charset: 'UTF8',
})

app.use(cors())

connection.connect(err => {
    if (err) throw err;
    console.log("Connected! -");
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
                results
            })
        }
    })
})

app.get('/article/:id/authors', (req, res) => {
    const id = parseInt(req.params.id)
    connection.query(SELECT_ARTICLE_AUTHORS_QUERY(id), (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                results
            })
        }
    })

})

app.listen(4000, () => {
    console.log('Server listening on port 4000')
})
