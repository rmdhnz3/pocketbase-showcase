migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8h9ee64vke6sl5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s08ne3i6",
    "name": "comment",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 255,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u8h9ee64vke6sl5")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
