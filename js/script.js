function changeBackground() {
    let color1 = "#017043";
    let color2 = "#d47d74";
    let color3 = "#e164ba";

    let selector1 = document.querySelector(".thumb1");
    let selector2 = document.querySelector(".thumb2");
    let selector3 = document.querySelector(".thumb3");

    if (selector1 && selector1.classList.contains("thumb1")) {
        document.querySelector('.ball').style.background = color1;
    } else if (selector2 && selector2.classList.contains("thumb2")) {
        document.querySelector('.ball').style.background = color2;
    } else if (selector3 && selector3.classList.contains("thumb3")) {
        document.querySelector('.ball').style.background = color3;
    }
}

addEventListener("click", changeBackground);