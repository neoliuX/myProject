function getQueryParams (qs: string) {
  let parts = qs.substring(1).split('&')
  let params = {}

  for (var i = 0; i < parts.length; i++) {
    var nv = parts[i].split('=')
    if (!nv[0]) continue
    params[nv[0]] = nv[1] || true
  }
  // console.log(params)
  return params
}

export {
  getQueryParams
}
