## Test Back-End

## Installation

```bash
  git clone https://github.com/raphael57410/active-test-back.git

  cd active-test-front

  yarn 
```

## Creer un fichier .env a la racine de projet avec les valeurs suivante:

```bash
USERName=admin
PASS=admin
URL=127.0.0.1:27017
DB=activetest
```

### Lancer mongoDB sur votre pc
### Sur votre pc créer une nouvelle base de données "activetest"
### Créer un utilisateur pour cette nouvelle base de données 
```
db.createUser( {user: "admin", pwd: "admin", roles:[{role: "dbOwner" , db:"activetest"}]})
```
## Retourner dans le dossier du projet ouvrer un terminal et lancer la commande suivante:
```
yarn dev
```