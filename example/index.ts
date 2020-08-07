import {Denovo} from "https://raw.githubusercontent.com/satyawikananda/denovo/master/mod.ts"

let denovo = new Denovo()

/**
 * Login with input the phone number
 * @param {string}
 * @return {string} return a refId
 */

let login = denovo.login2FA('<Your phone number>')
console.log(login.then((data) => console.log(data)))

/**
 * Login 2FA Verify
 * @param {refId, OTPCode, Your phone number}
 * @return {object} return a list of data verify
 */

let login2FAverify = denovo.login2FAverify('<refId>', '<OTP Code>', '<Your phone number>')
login2FAverify.then((data) => console.log(data))

/**
 * Login security to get JWT Token
 * @param {Your Pin Ovo, Update token from login2FAverify}
 * @return {string} return a JWT Token
 */

let loginSecurity = denovo.loginSecurity('<Your Pin OVO>', '<update access token>')
loginSecurity.then((data) => console.log(data))

denovo = new Denovo("<Your JWT Token>")

// Get unread history
let getUnreadHistory = denovo.getUnreadHistory()
getUnreadHistory.then((data) => console.log(data))

// Get data budget
let getDataBudget = denovo.getBudget()
getDataBudget.then((data) => console.log(data))

// Get data reference code bank
let getRefBank = denovo.getRefBank()
getRefBank.then((data) => console.log(data))

// Get data all notification
let getAllNotif = denovo.getAllNotif()
getAllNotif.then((data) => console.log(data))

// Logout from ovo
let logout = denovo.ovoLogout()
logout.then((data) => console.log(data))