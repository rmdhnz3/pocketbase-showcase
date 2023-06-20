migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8h9ee64vke6sl5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a5gygjtf",
    "name": "userId",
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
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gbysmu2q",
    "name": "projectId",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8h9ee64vke6sl5")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
