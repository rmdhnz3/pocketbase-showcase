migrate((db) => {
  const collection = new Collection({
    "id": "vfxdvw4xi1w6qod",
    "created": "2023-06-11 07:35:27.742Z",
    "updated": "2023-06-11 07:35:27.742Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xdfuxbfq",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cph388vw",
        "name": "tagline",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6comrt1z",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 512,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nn8a7ia6",
        "name": "field",
        "type": "url",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "ogp4jbxi",
        "name": "thumbnail",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [
            "80x80"
          ],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "gfybegqv",
        "name": "owner",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": "@request.auth.id != \"\" && @request.auth.id = @request.data.owner",
    "updateRule": "@request.auth.id = owner",
    "deleteRule": "@request.auth.id = owner",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod");

  return dao.deleteCollection(collection);
})
