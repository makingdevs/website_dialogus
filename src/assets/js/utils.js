function hideLoader() {
    const app = document.getElementById("app")
    app.classList.remove("hide")
    const e = document.getElementById("loader-app")
    e.remove();
}

export { hideLoader }