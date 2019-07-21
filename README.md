# Peak AI Tech Test

## Installation

Within the project folder:
```
npm install
```

## Build

Within the project folder:
```
npm run build
```

## Start

Within the project folder:
```
npm start
```

## Test

Within the project folder:
```
npm test
```

## Endpoints

> GET /carts

Use this endpoint to create a new cart and retrieve its ID.

> POST /api/v1/carts/:cartId/items

Use this endpoint to add an item to a given cart. The body of the request should look like the following:

```
{
	"id": "54",
	"name": "My Product7",
	"price": 111
}
```

> GET /api/v1/carts/:cartId/items

Use this endpoint to list all the items in a given cart.

> DELETE /api/v1/carts/:cartId/items/:itemId

Use this endpoint to remove a given item from a given cart.

> DELETE /api/v1/carts/:cartId/items

Use this endpoint to remove all items from the cart.

> POST /api/v1/package

Use this endpoint to calculate the best items for a box. The request bod should look like the following:

```
{
  "ids": ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"],
  "weights": [1, 8, 7, 4, 3, 2],
  "deliveryDays": [4, 1, 2, 10, 3, 5]
}
```

## Calling the Endpoints

Example postman requests for calling the endpoints can be found [here](https://www.getpostman.com/collections/e1c3b91e7b5936c91b82)
