function deleteNodes(referencia) {
  while(referencia.firstChild) {
    referencia.removeChild(referencia.firstChild)
  }
}

export default deleteNodes;