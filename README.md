# periclim

## Fonctionalitées

### La bar de recherche

### La pagination

Il y a plus de 4000 articles. La pagination va permettre d'afficher 20 par pages.

### Les filtres

### Dynamic routing

`react-router-dom`

## Mise en place du projet

```bash
npx create-react-app .

npm install react-router-dom

npm install react-paginate --save

npm start
```

## Structure des dossiers

### Les composants

- Card
- Pagination
- Bar de recherche
- Filtre

Un dossier par composant.
Filtre

Un dossier par composant.

## Connection à la base de données MySQL

```

```

### Requêtes SQL

#### Afficher tous les articles

```sql
SELECT d_title, d_type,	d_year,	d_abstract,	d_url, d_doi, d_standard_number, j_name, sa_name
FROM dp_document
INNER JOIN dp_journal
ON d_fk_journal_id = j_id
INNER JOIN dp_subject_area
ON d_fk_subject_area_id = sa_id;
```

#### Afficher les articles en fonction de la recherche

#### Afficher les articles en fonction de la recherche et du filtre

#### Afficher l'article en entier

```sql
SELECT d_title, d_type,	d_year,	d_abstract,	d_url, d_doi, d_standard_number, j_name, sa_name
FROM dp_document
INNER JOIN dp_journal
ON d_fk_journal_id = j_id
INNER JOIN dp_subject_area
ON d_fk_subject_area_id = sa_id
WHERE d_id = 1;
```

#### Afficher les auteurs en fonction de l'id de l'article

```sql
SELECT a_first_name, a_last_name, a_middle_name
FROM dp_author
INNER JOIN dp_document_has_dp_author
ON a_id = dha_fk_author_id
WHERE dha_fk_document_id = 1;
```
