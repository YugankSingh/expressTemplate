const productionEnvironment = "production"
const devlopmentEnvironment = "development"
require("dotenv").config()

// const environment = productionEnvironment
const environment = devlopmentEnvironment

const commonVariables = {
	port: 8000,
}

if (environment == productionEnvironment) {
	module.exports = {
		...commonVariables,
		name: "productionEnvironment",
		root: process.env.MY_DOMAIN,
	}
} else {
	module.exports = {
		...commonVariables,
		name: "devlopmentEnvironment",
		root: process.env.MY_DOMAIN,
	}
}
