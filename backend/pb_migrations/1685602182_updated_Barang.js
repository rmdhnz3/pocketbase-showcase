migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z")

  collection.listRule = "@request.auth.id != ''\n"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z")

  collection.listRule = null

  return dao.saveCollection(collection)
})
