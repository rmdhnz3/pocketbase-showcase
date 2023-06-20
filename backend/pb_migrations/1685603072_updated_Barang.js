migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
