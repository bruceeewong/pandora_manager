const refreshFileList =  (xhr) => {
  xhr.open('get', url.getAllFiles, true)
  xhr.send(null)
}
