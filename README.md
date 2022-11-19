# Stock Listing

### Prerequisite
 - NodeJS
 - Typescript
 - Repo clone

### Setup
1. Clone the repository
```sh
git clone
```
2. Install the Dependency
```sh
cd <Cloned Directory> && npm install
```
3. Import Postman Collection from below path
```sh
cd <Cloned Directory>/Doc/PLT_DEMO.postman_collection.json
```
4. Start Server
```sh
npm start
```
5. Test the server working
```
localhost:3000/testConnection
```

### End Points registered
| End points  | Description
| :------------ |:---------------:|
| 1. `/testConnection` | To verify Server working      |
| 2. `/stock/list` | To fetch Stock List      |
| 3. `/stock/get?sku=SXK331510/08/41`       | To fetch Stock details and transactions |
| 4. `/transaction/get?sku=SXK331510/08/41`  | To fetch transactions        |


#### ✨Happy Screening ✨

# nodeJS-Task

You are given two json files:
 - stock.json: contains objects which represent the starting stock levels for given SKUS
 - transactions.json: contains an array of transactions since the stock levels were recorded in `stock.json`

The objective is to create a function which is able to return the current stock levels for a given SKU by combining the data in these two files. These are the requirements.

- The function must match the following signature: `(sku: string) => Promise<{ sku: string, qty: number }>`.
- The function must read from the `stock` and `transactions` files on each invocation (totals cannot be precomputed)
- The function must throw an error where the SKU does not exist in the `transactions.json` and `stock.json` file
- All code must be adequately tested

Notes:
- Transactions may exist for SKUs which are not present in `stock.json`. It should be assumed that the starting quantity for these is 0.
- Functionality can be split into many files to help keep the project clear and organised
