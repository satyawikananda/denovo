<div align="center">
    <h1> Denovo (Un-official Ovo API wrapper for Deno 🦕)</h1>
    
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://gitlab.com/satyawikananda/denovo/-/raw/master/LICENSE)
</div>

<div align="center">
    <img src="./screenshot/thumbnail.png" align="center" width="600px">
</div>

# Description

This is an Un-official Ovo API wrapper for Deno got inspired from [ovoid-nodejs](https://github.com/apriady/ovoid-nodejs) and this is the result of porting from [ovoid](https://github.com/lintangtimur/ovoid/)

# Documentation

* Import Denovo class from mod.ts

```js
import {Denovo} from "https://raw.githubusercontent.com/satyawikananda/denovo/master/mod.ts"

let denovo = new Denovo()
```

* First step, login with your phone number 

```js
let login = denovo.login2FA('<Your phone number>')
console.log(login.then((data) => console.log(data)))
```

* Second step, to get access token, you must login with login2faVerify

```js
let login2FAverify = denovo.login2FAverify('<refId>', '<OTP Code>', '<Your phone number>')
login2FAverify.then((data) => console.log(data))
```

* Third step, to get JWT token, you must to call loginSecurity function

```js
let loginSecurity = denovo.loginSecurity('<Your Pin OVO>', '<update access token>')
loginSecurity.then((data) => console.log(data))
```

* And then, put the JWT Token into the paramater class Denovo

```js
denovo = new Denovo("<Your JWT Token>")
```

* To get data budget, you can use getBudget function

```js
let getDataBudget = denovo.getBudget()
getDataBudget.then((data) => console.log(data))
```

* To get reference code bank, you can use getRefBank function

```js
let getRefBank = denovo.getRefBank()
getRefBank.then((data) => console.log(data))
```

* To get data all notification in your ovo account, you can use getAllNotif function

```js
let getAllNotif = denovo.getAllNotif()
getAllNotif.then((data) => console.log(data))
```

* To get data unread history in your ovo account, you can use getUnreadHistory function

```js
let getUnreadHistory = denovo.getUnreadHistory()
getUnreadHistory.then((data) => console.log(data))
```

* To get data wallet transaction, you can use getWalletTrans function

```js
let getWalletTrans = denovo.getWalletTrans(1, 10)
getWalletTrans.then((data) => console.log(data))
```

* To logout from your ovo account, you can use logout function

```js
let logout = denovo.ovoLogout()
logout.then((data) => console.log(data))
```

* And then, how to run this? 🤔
```
deno run --allow-net ./example/index.ts
```

# Features

| Method  | Result  |
|---|---|
| `login2FA`  | ✔ |
| `login2FAVerify`  | ✔ |
| `loginSecurityCode`  | ✔  |
| `getBudget`  | ✔  |
| `getRefBank`  | ✔  |
| `getAllNotification`  | ✔  |
| `getUnreadHistory`  | ✔  |
| `getWalletTransaction`  | ✔  |
| `logout`  | ✔  |
| `generateTrxId`  | ✖  |
| `transferOvo`  | ✖  |

# Author
[@Satyawikananda](https://instagram.com/satyawikananda) © 2020
