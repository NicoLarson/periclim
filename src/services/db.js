const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const app = express()


/*
TODO 
Il faut afficher les 5 premiers articles sur la page 1
Les 5 autres sur la page 2
Le nombre de page est afficher en fonction du nombre d'article
On divise le nombre total d'article par le nombre d'article qu'on veut afficher pour connaitre le nombre de page
Un chiffre de la pagination est relier a une requete SQL et un path
*/


const COUNT_ALL_ARTICLES_QUERY = `
        SELECT COUNT(d_id)
        FROM dp_document
        INNER JOIN dp_journal
        ON d_fk_journal_id = j_id
        INNER JOIN dp_subject_area
        ON d_fk_subject_area_id = sa_id;`


const COUNT_ARTICLES_BY_KEYWORD_QUERY = (searchWords) => `
        SELECT COUNT(*) 
        FROM dp_document
        INNER JOIN dp_journal
        ON d_fk_journal_id = j_id
        INNER JOIN dp_subject_area
        ON d_fk_subject_area_id = sa_id
        WHERE d_title LIKE '%${searchWords}%' OR d_abstract LIKE '%${searchWords}%'
        LIMIT 5;`




// CONNECTION A LA BDD
let connection = mysql.createConnection({
    host: "localhost",
    // Linux
    // user: "nicolas",
    // password: "nicolas",
    //Windows
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

// AFFICHER LES ARTICLES
const SELECT_ALL_DOCUMENTS_QUERY = `
        SELECT d_id, d_title, d_type, d_year, d_abstract, d_url, d_doi, d_standard_number, j_name, sa_name
        FROM dp_document
        INNER JOIN dp_journal
        ON d_fk_journal_id = j_id
        INNER JOIN dp_subject_area
        ON d_fk_subject_area_id = sa_id
        ORDER BY d_year;`

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

// AFFICHER LES AUTEURS PAR ARTICLE
const SELECT_ARTICLE_AUTHORS_QUERY = (documentId) => `
        SELECT a_first_name, a_last_name, a_middle_name
        FROM dp_author
        INNER JOIN dp_document_has_dp_author
        ON a_id = dha_fk_author_id
        WHERE dha_fk_document_id = ${documentId};
        `

app.get('/authors/article=:id', async (req, res) => {
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

// RECHERCHER DES ARTICLES PAR MOT CLE
const SELECT_ARTICLES_BY_WORDS_QUERY = (searchWords) => `
        SELECT * 
        FROM dp_document
        INNER JOIN dp_journal
        ON d_fk_journal_id = j_id
        INNER JOIN dp_subject_area
        ON d_fk_subject_area_id = sa_id
        WHERE d_title LIKE '%${searchWords}%' OR d_abstract LIKE '%${searchWords}%'
        LIMIT 5;`

app.get('/articles/search/:words', (req, res) => {
    const words = req.params.words
    connection.query(SELECT_ARTICLES_BY_WORDS_QUERY(words), (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                results
            })
        }
    })

})

// AFFICHER LES ARTICLES
app.get('/articles/search/', (req, res) => {
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


// AFFICHER 5 ARTICLES PAR PAGE
const SELECT_ALL_DOCUMENTS_QUERYP = (numPage, product) => `
        SELECT d_id, d_title, d_type, d_year, d_abstract, d_url, d_doi, d_standard_number, j_name, sa_name
        FROM dp_document
        INNER JOIN dp_journal
        ON d_fk_journal_id = j_id
        INNER JOIN dp_subject_area
        ON d_fk_subject_area_id = sa_id
        ORDER BY d_id
        LIMIT ${(numPage - 1) * product},5;
        `
app.get('/articles/page/:numpage', (req, res) => {
    const numpage = parseInt(req.params.numpage)
    let product = 5
    numpage > 1 ? product = 5 : product = 1
    connection.query(SELECT_ALL_DOCUMENTS_QUERYP(numpage, product), (err, results) => {
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
