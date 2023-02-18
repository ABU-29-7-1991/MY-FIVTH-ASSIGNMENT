function tringleArea() {
    const tringleArea = parseFloat(window.document.getElementById(tringle-input-b).value)*parseFloat(window.document.getElementById(tringle-input-h).value)*.5;
    console.log(tringleArea)
}
window.document.getElementById(tringleBtn).addEventListener("click", tringleArea);