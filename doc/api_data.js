define({ "api": [
  {
    "type": "remove",
    "url": "/api/v1/animals/:animalId",
    "title": "Delete",
    "version": "0.1.0",
    "name": "delete",
    "group": "Animal",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE \"http://localhost:3000/api/v1/animals/578aad8a87337601006df82b\"",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An error object contains status code and error message</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An error object contains status code and error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"status\": 404,\n     \"message\": \"error message\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n     \"status\": 500,\n     \"message\": \"error message\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/animal.js",
    "groupTitle": "Animal"
  },
  {
    "type": "get",
    "url": "/api/v1/animals/:animalId",
    "title": "Get",
    "version": "0.1.0",
    "name": "get",
    "group": "Animal",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -i http://localhost:3000/api/v1/animals/578aae0ab1927a01003e2bcb",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Created date of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update_at",
            "description": "<p>Updated date of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origin",
            "description": "<p>Origin of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_size",
            "description": "<p>Average size  of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_weight",
            "description": "<p>Average weight of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_price",
            "description": "<p>Average Price of the Animal.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 OK\n  {\n     \"_id\":\"578aae0ab1927a01003e2bcb\",\n     \"updatedAt\":\"2016-07-16T21:58:34.478Z\",\n     \"createdAt\":\"2016-07-16T21:58:34.478Z\",\n     \"name\": \"Labrador Retriever\",\n     \"origin\": \"Great Britain\",\n     \"color\": \"brown\",\n     \"avg_size\": 57,\n     \"avg_weight\": 30,\n     \"avg_price\": 1200,\n     \"links\":{\n       \"self\": \"http://localhost:3000/api/v1/animals/578aae0ab1927a01003e2bcb\"\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "object",
            "optional": false,
            "field": "error",
            "description": "<p>An error object when animal was not found.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An error object contains status code and error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"status\": 404,\n     \"message\": \"no animal found!\"\n  }\n}\nHTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n     \"status\": 500,\n     \"message\": \"error message\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/animal.js",
    "groupTitle": "Animal"
  },
  {
    "type": "get",
    "url": "/api/v1/animals",
    "title": "Get All",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Animal",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -i http://localhost:3000/api/v1/animals",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "root",
            "description": "<p>List of Animals (Array of Objects).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 OK\n[\n  {\n     \"_id\":\"578aae0ab1927a01003e2bcb\",\n     \"updatedAt\":\"2016-07-16T21:58:34.478Z\",\n     \"createdAt\":\"2016-07-16T21:58:34.478Z\",\n     \"name\": \"Labrador Retriever\",\n     \"origin\": \"Great Britain\",\n     \"color\": \"brown\",\n     \"avg_size\": 57,\n     \"avg_weight\": 30,\n     \"avg_price\": 1200,\n     \"links\":{\n       \"self\": \"http://localhost:3000/api/v1/animals/578aae0ab1927a01003e2bcb\"\n     }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An error object contains status code and error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n     \"status\": 500,\n     \"message\": \"error message\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/animal.js",
    "groupTitle": "Animal"
  },
  {
    "type": "post",
    "url": "/api/v1/animals",
    "title": "Post",
    "version": "0.1.0",
    "name": "post",
    "group": "Animal",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d '{\n  \"name\": \"pedro\",\n  \"origin\": \"argentine\",\n  \"avg_price\": 1978,\n }' \"http://localhost:3000/api/v1/animals\"",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Created date of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update_at",
            "description": "<p>Updated date of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origin",
            "description": "<p>Origin of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_size",
            "description": "<p>Average size  of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_weight",
            "description": "<p>Average weight of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_price",
            "description": "<p>Average Price of the Animal.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 201 Created\n {\n   \"__v\": 0,\n   \"updatedAt\": \"2016-07-17T11:20:41.461Z\",\n   \"createdAt\": \"2016-07-17T11:20:41.461Z\",\n   \"name\": \"Labrador Retriever\",\n   \"origin\": \"Great Britain\",\n   \"avg_price\": 1978,\n   \"_id\": \"578b6a09feaf08a0008c1b3b\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An error object contains status code and error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n     \"status\": 400,\n     \"message\": \"error message\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/animal.js",
    "groupTitle": "Animal"
  },
  {
    "type": "put",
    "url": "/api/v1/animals/:animalId",
    "title": "Put",
    "version": "0.1.0",
    "name": "put",
    "group": "Animal",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -H \"Content-Type: application/json\" -d '{\n  \"name\": \"Labrador\",\n  \"origin\": \"Great Britain\",\n  \"avg_price\": 1978\n}' \"http://localhost:3000/api/v1/animals/578b6a09feaf08a0008c1b3b\"",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Created date of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update_at",
            "description": "<p>Updated date of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origin",
            "description": "<p>Origin of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_size",
            "description": "<p>Average size  of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_weight",
            "description": "<p>Average weight of the Animal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avg_price",
            "description": "<p>Average Price of the Animal.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Ok\n {\n   \"__v\": 0,\n   \"updatedAt\": \"2016-07-17T11:20:41.461Z\",\n   \"createdAt\": \"2016-07-17T11:20:41.461Z\",\n   \"name\": \"Labrador Retriever\",\n   \"origin\": \"Great Britain\",\n   \"avg_price\": 1978,\n   \"_id\": \"578b6a09feaf08a0008c1b3b\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An error object contains status code and error message</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An error object contains status code and error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n     \"status\": 404,\n     \"message\": \"error message\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": {\n     \"status\": 500,\n     \"message\": \"error message\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/animal.js",
    "groupTitle": "Animal"
  }
] });
