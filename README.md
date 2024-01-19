# Projet d'Authentification avec Node.js, Express.js, Mongoose, TypeScript, ts-node, Joi, et JWT

Ce projet est une application d'authentification et api des recettes construite avec Node.js et Express.js, utilisant TypeScript pour une gestion plus robuste des types. La base de données est gérée avec Mongoose, et la validation des données est effectuée à l'aide de Joi. Les utilisateurs sont authentifiés à l'aide de JSON Web Tokens (JWT).

## Prérequis

- Node.js (version recommandée : 14.x)
- MongoDB (assurez-vous que le service MongoDB est en cours d'exécution)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone   "https://github.com/theziko1/Implementation-de-Authentification"
   cd Implementation-de-Authentification
   ```
## Installez les dépendances :

```bash
yarn add
```
## Configurez l'environnement :

Créez un fichier .env à la racine du projet en vous basant sur le modèle .env.example.
Configurez les variables d'environnement selon vos besoins.
Compilez le code TypeScript en JavaScript :

```bash

yarn run build
```
Exécutez l'application :

```bash

yarn start
```
L'application sera accessible à l'adresse http://localhost:3000 par défaut. Vous pouvez modifier le port dans le fichier .env.

## Structure du Projet
src/ : Contient le code source TypeScript.
controllers/ : Contrôleurs de l'application.
models/ : Modèles Mongoose pour la base de données.
routes/ : Routes de l'application.
middleware/ : Middleware, y compris la gestion de l'authentification.

 ## API Endpoints
POST /auth/register : Enregistrement d'un nouvel utilisateur.
POST /auth/login : Authentification d'un utilisateur existant.
GET /auth/logout : Déconnexion du profil de l'utilisateur authentifié.

POST /recipes : Enregistrement d'un nouvel recette.
GET /recipes : Récupérer les recettes.
GET /recipe/{id} : Récupérer la recette par leur id.
PUT /recipe/{id} : Modifier la recette par leur id.
DELETE /recipe/{id} : Supprimer la recette par leur id.



## Variables d'Environnement
PORT : Port sur lequel l'application sera exposée.
MONGODB_URL : URL de la base de données MongoDB.
SECRET_KEY : Clé secrète pour signer les JWT.
Contribuer
Si vous souhaitez contribuer à ce projet, veuillez suivre les instructions de CONTRIBUTING.md.

License
Ce projet est sous licence MIT.
