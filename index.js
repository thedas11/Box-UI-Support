function updatePrice(price) {
    document.getElementById('total-price').innerText = `$${price}.00`;
}
function expandBox(selectedBox) {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        if (box === selectedBox) {
            box.style.maxHeight = "500px";
            box.style.overflow = "visible";
            box.style.backgroundColor = "#aaf0d1";
        } else {
            box.style.maxHeight = "50px";
            box.style.overflow = "hidden";
            box.style.backgroundColor = "#ffffff"
        }
    });
}