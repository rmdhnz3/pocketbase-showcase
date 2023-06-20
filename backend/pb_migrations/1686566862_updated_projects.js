migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod")

  // update
  collection.schema.addField(new SchemaField({
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
        "image/webp",
        "image/avif"
      ],
      "thumbs": [
        "80x80"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
