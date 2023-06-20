migrate((db) => {
  const collection = new Collection({
    "id": "u8h9ee64vke6sl5",
    "created": "2023-06-19 06:03:34.849Z",
    "updated": "2023-06-19 06:03:34.849Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s08ne3i6",
        "name": "comment",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 10,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "a5gygjtf",
        "name": "userid",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      },
      {
        "system": false,
        "id": "gbysmu2q",
        "name": "projectid",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "vfxdvw4xi1w6qod",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u8h9ee64vke6sl5");

  return dao.deleteCollection(collection);
})
