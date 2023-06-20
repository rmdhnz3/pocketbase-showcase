migrate((db) => {
  const collection = new Collection({
    "id": "t67u60gzvhyes3z",
    "created": "2023-05-31 04:19:59.100Z",
    "updated": "2023-05-31 04:19:59.100Z",
    "name": "Barang",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "zd6qedw4",
        "name": "harga_barang",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "en8nxvse",
        "name": "deskripsi_barang",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z");

  return dao.deleteCollection(collection);
})
