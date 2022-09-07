function a()
{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("nav").classList.remove("bg-secondary");
        document.getElementById("nav").classList.add("bg-dark");
    }
    else
    {
        document.getElementById("nav").classList.add("bg-secondary");
        document.getElementById("nav").classList.remove("bg-dark");
    }
}

setInterval(a, 500);