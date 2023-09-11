# OpenAI moderation plugin

**_un plugin écrit en python pour identifier, modérer et filtrer le contenu illicite_**

## Créer et activer un environnement virtuel

<pre>
$ cd [nom du projet]
$ python -m venv env
$ source ~env\bin\activate
</pre>

## Installer les dépendances

`pip install -r requirements.txt`

## Lancer le projet

### Windows

`python index.py`

### Mac

`python3 index.py`

## remplacer avec sa clé API

<https://platform.openai.com/account/api-keys>

fichier : `env.example`

ajouter et remplacer avec votre secret :`OPENAI_API_KEY="<YOUR-API-KEY>"`
