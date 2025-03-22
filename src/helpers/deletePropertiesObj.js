function deleletePropertiesObjs(obj = {}) {
  for( let product in obj ) {
    delete obj[product]
  }
};

export default deleletePropertiesObjs;