migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7jvjumtv",
    "name": "url",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod")

  // remove
  collection.schema.removeField("7jvjumtv")

  return dao.saveCollection(collection)
})
