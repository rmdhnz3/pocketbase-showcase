migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckmnizi6",
    "name": "nama_barang",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 2500,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckmnizi6",
    "name": "nama_barang",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 25,
      "max": 2500,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
