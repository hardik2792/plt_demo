# Stock Listing

**Please refer `src/stock.helper.ts` file for expected function**

### Prerequisite

- NodeJS
- Typescript
- Repo clone
```sh
https://github.com/hardik2792/plt_demo.git
```

### Setup

1. Clone the repository

```sh
git clone
```

2. Install the Dependency

```sh
cd <Cloned Directory> && npm install
```

3. **Import Postman Collection** from cloned repository below path

```sh
cd <Cloned Directory>/Doc/PLT_DEMO.postman_collection.json
```
![N|Solid](https://i.postimg.cc/SQtRJscG/Screenshot-2022-11-19-at-20-07-33.png)

4. Start Server

```sh
npm start
```

5. Test the server working
```sh
localhost:3000/testConnection
```

### End Points registered

| End points | Description
| :------------ |:---------------:|
| 1. `/testConnection` | To verify Server working |
| 2. `/stock/list` | To fetch Stock List |
| 3. `/stock/get?sku=SXK331510/08/41` | To fetch Stock details and transactions |
| 4. `/transaction/get?sku=SXK331510/08/41` | To fetch transactions |

## Unit Test
1. **To Verify unit test**: Navigate to Terminal, execute below command
```sh
npm run test
```

2. **To Verify code coverage**: Navigate to Terminal, execute below command
```sh
npm run test-coverage
```
[![Screenshot-2022-11-21-at-17-21-27.png](https://i.postimg.cc/wTgY5JZZ/Screenshot-2022-11-21-at-17-21-27.png)](https://postimg.cc/Th7sfyRJ)
___

### ✨Happy Screening ✨
