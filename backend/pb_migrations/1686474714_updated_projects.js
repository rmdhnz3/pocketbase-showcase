migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vfxdvw4xi1w6qod")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
