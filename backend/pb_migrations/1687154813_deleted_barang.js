migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t67u60gzvhyes3z");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "t67u60gzvhyes3z",
    "created": "2023-05-31 04:19:59.100Z",
    "updated": "2023-06-04 07:24:27.954Z",
    "name": "barang",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id != \"\"",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
