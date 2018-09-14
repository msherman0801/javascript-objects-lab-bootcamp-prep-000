var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  var test = Object.assign({},object,{[key]: value})
  return test;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  Object.assign(object,{[key]: value})
  return object;
}