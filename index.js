const isValidMobilePhone = phone => {
  const validMobilePhoneRegEx = /((\+221|00221)?)((7[7608][0-9]{7}$)|(3[03][98][0-9]{6}$))/;
  return validMobilePhoneRegEx.test(phone);
}

module.exports = { isValidMobilePhone };