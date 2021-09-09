function hideLoader() {
    const app = document.getElementById("app")
    app.classList.remove("hide")
    const body = document.getElementsByTagName('body')[0]
    body.style.background = null
    const e = document.getElementById("loader-app")
    e.remove();
}

export { hideLoader }