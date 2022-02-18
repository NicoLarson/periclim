# Périclim

## 1. Mise en place du projet

```bash
npx create-react-app .

npm install react-router-dom
npm install react-paginate --save
npm install nodemon
npm install express
npm install cors
npm install mysql

npm start
```

## 2. Fonctionnalités

- [ ] Afficher des documents
- [ ] Faire une recherche
- [ ] Importer des bibliographies dans la bdd
- [ ] Exporter une liste de recherche au format ...

### Connexion à la base de données MySQL (Création API REST)

#### Requêtes SQL

##### Afficher tous les articles

```sql
SELECT d_title, d_type, d_year, d_abstract, d_url, d_doi, d_standard_number, j_name, sa_name
FROM dp_document
INNER JOIN dp_journal
ON d_fk_journal_id = j_id
INNER JOIN dp_subject_area
ON d_fk_subject_area_id = sa_id;
```

##### Afficher les articles en fonction de la recherche

##### Afficher les articles en fonction de la recherche et du filtre

##### Afficher l'article en entier

```sql
SELECT d_title, d_type, d_year, d_abstract, d_url, d_doi, d_standard_number, j_name, sa_name
FROM dp_document
INNER JOIN dp_journal
ON d_fk_journal_id = j_id
INNER JOIN dp_subject_area
ON d_fk_subject_area_id = sa_id
WHERE d_id = 1;
```

##### Afficher les auteurs en fonction de l'id de l'article

```sql
SELECT a_first_name, a_last_name, a_middle_name
FROM dp_author
INNER JOIN dp_document_has_dp_author
ON a_id = dha_fk_author_id
WHERE dha_fk_document_id = 1;
```

---

## 3. Les composants

---

### 3.1 La liste des articles

#### 3.1.1 Description

Le but est d'afficher la liste des articles de la base de données

#### 3.1.2 Lien visuel

- <https://getbootstrap.com/docs/5.1/components/list-group/>

#### 3.1.3 Critère d'acceptons

- [ ] Tous les articles doivent être affichés.
- [ ] on doit voir les informations suivantes: Titre, Année, Lien de l'extraction de l'article, Lien du DOI, ISSN, Nom du journal de publication, un extrait déroulant, Sujet due l'article.
- [ ] On peut accéder à l'article entier

#### 3.1.4 Tâche technique

- [ ] Connexion à l'API
- [ ] Récupérer et afficher les données
- [ ] L'extrait de l'article doit se dérouler

#### 3.1.4 Annexes

<https://www.youtube.com/watch?v=HPIjjFGYSJ4&t=1140s>

---

### 3.2 La bar de recherche

#### 3.2.1 Description

Le but est de trouver un ou des articles

#### 3.2.2 Lien visuel

- <https://getbootstrap.com/docs/5.1/components/buttons/>
- <https://getbootstrap.com/docs/5.1/components/navbar/#forms>
- <https://getbootstrap.com/docs/5.1/examples/headers/>

#### 3.2.3 Critère d'acceptons

- [ ] Afficher les articles en fonction de ce qui est écrit dans la bar de recherche en instantané

#### 3.2.4 Tâche technique

- [ ] Créer 2 Hooks pour chercher des mots clés et la page actuelle
- [ ] mettre à jour l'API avec des variables

#### 3.2.5 Annexes

---

### 3.3 La pagination

#### 3.3.1 Description

Le but est d'afficher un nombre limité d'article par page.
Utilisation du paquet `react-paginate`

#### 3.3.2 Lien visuel

- <https://getbootstrap.com/docs/5.1/components/pagination/#overview>

#### 3.3.3 Critère d'acceptons

- [ ] Une page doit afficher un nombre d'article choisi
- [ ] La pagination ne s'affiche que s'il y a plusieurs pages

#### 3.3.4 Tâche technique

- [ ] Gérer le changement de pages
- [ ] Rendre la pagination responsive

#### 3.3.5 Annexes

**Documentation de `react-paginate`:** <https://www.npmjs.com/package/react-paginate>

---

### 3.4 Les filtres

#### 3.4.1 Description

Le but est d'afficher les articles par années , par auteurs ...

#### 3.4.2 Lien visuel

- <https://getbootstrap.com/docs/5.1/forms/checks-radios/#checks>

#### 3.4.3 Critère d'acceptons

- [ ] Si je choisi un critère de filtre, la page affiche uniquement ce que j'ai choisi
- [ ] Si il n'y a pas d'article, la page affiche un message "Pas d'article"

#### 3.4.4 Tâche technique

- [ ] Création d'une structure de dossier pour contenir les petits composants à utiliser
- [ ] Créer un Hock pour stocker les petits composants
- [ ] Modifier l'API en fonction de la variable du Hook
- [ ] Importer les composants dans Filtre.jsx
- [ ] Fonction pour effacer les filtrer et rafraîchir la page

#### 3.4.5 Annexes
