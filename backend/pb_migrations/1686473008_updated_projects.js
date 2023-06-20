migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod")

  // remove
  collection.schema.removeField("nn8a7ia6")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
