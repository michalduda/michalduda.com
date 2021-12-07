export default (src) => {
  return new Promise(resolve => {
    const scriptTag = document.createElement('script')
    scriptTag.setAttribute('src', src)
    document.body.appendChild(scriptTag)
    scriptTag.onload = () => {
      resolve()
    }
  })
}
