migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4jzdfmo1",
    "name": "gambar_barang",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/gif",
        "image/webp",
        "image/tiff",
        "image/heic",
        "image/avif",
        "image/svg+xml"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z")

  // remove
  collection.schema.removeField("4jzdfmo1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckmnizi6",
    "name": "nama_barang",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
