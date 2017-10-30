// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue (driver,key,value) {
  return Object.assign({},driver,{[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue (driver,key,value) {
  return Object.assign(driver,{[key]:value})
}

function deleteFromDriverByKey (driver,key) {
  NewObject = Object.assign({},driver)
  delete NewObject[key]
  return NewObject
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key]
  return driver
}
