## Senegal Phone Validator

![image info](https://img.shields.io/badge/npm-v1.0.1-blue)
[![GitHub issues](https://img.shields.io/github/issues/okemamy/senegal-phone-validator)](https://github.com/okemamy/senegal-phone-validator/issues)
[![GitHub forks](https://img.shields.io/github/forks/okemamy/senegal-phone-validator)](https://github.com/okemamy/senegal-phone-validator/network)
[![GitHub stars](https://img.shields.io/github/stars/okemamy/senegal-phone-validator)](https://github.com/okemamy/senegal-phone-validator/stargazers)

A minimal module to validate Senegal phone numbers using Regular Expressions.

## Install
`npm install senegal-phone-validator --save`

## Using Package

`const { isValidMobilePhone } = require('senegal-phone-validator')`

`isValidMobilePhone(phoneNumber)` function returns a true or false for valid or invalid phone numbers

`const validPhone = isValidMobilePhone('+221776857298');`
