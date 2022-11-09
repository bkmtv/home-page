window.onload = function () {
    function random () {
        return Math.floor(Math.random() * 256)
    }
    function setBg () {
        document.body.style.backgroundColor =
        "rgb(" + random () + "," + random () + "," + random () + ")";
    }
    setBg ()
}