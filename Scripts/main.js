
// Make Element Function
function makeElement() {
    let bodyColor = document.getElementById("t_colorBody").value;
    console.log(bodyColor);
    let t_element = document.getElementById("t_div");

    let t_height = document.getElementById("t_height").value + document.getElementById("t_heightFormat").value;

    let t_width = document.getElementById("t_width").value + document.getElementById("t_widthFormat").value;

    let t_color = document.getElementById("t_color").value;

    let t_bgImage = document.getElementById("t_bgImage").value;

    let t_imageStyle = document.getElementById("t_imageStyle").value;

    let t_imageRepeat = document.getElementById("t_imageRepeat").value;

    let t_bgImage_url = "url(" + "'" + t_bgImage + "'" + ")";

    let t_border = document.getElementById("t_bodersize").value + document.getElementById("t_borderFormat").value + 
    " " + document.getElementById("t_boderStyle").value + " " +document.getElementById("t_borderColor").value;

    let t_borderRadius = document.getElementById("t_borderRadius").value + 
    document.getElementById("t_borderRadiusFormat").value;

    let t_textInside = document.getElementById("t_textInside").value;

    let t_colorText = document.getElementById("t_colorText").value;

    let t_textStyle = document.getElementById("t_styleText").value;

    let t_textSize = document.getElementById("t_textSize").value + document.getElementById("t_textSizeFormat").value;

    document.getElementById("t_DisplayPanel").style.backgroundColor = bodyColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = bodyColor;
    t_element.style.height = t_height;
    t_element.style.width = t_width;
    t_element.style.backgroundColor = t_color;
    t_element.style.backgroundSize = t_imageStyle;
    t_element.style.backgroundRepeat = t_imageRepeat;
    t_element.style.backgroundPosition = "center";
    t_element.style.backgroundImage = t_bgImage_url;
    t_element.style.border = t_border;
    t_element.style.borderRadius = t_borderRadius;
    t_element.innerHTML = t_textInside;
    t_element.style.color = t_colorText;
    t_element.style.fontFamily = t_textStyle;
    t_element.style.fontSize = t_textSize;
}


// Move Functions
function toLeft(){
    let t_element = document.getElementById("t_div");
    t_element.style.left = `${t_element.offsetLeft - 10}px`;
}
function toRight(){
    let t_element = document.getElementById("t_div");
    t_element.style.left = `${t_element.offsetLeft + 10}px`;
}
function toUp(){
    let t_element = document.getElementById("t_div");
    t_element.style.top = `${t_element.offsetTop - 10}px`;
}
function toBottom(){
    let t_element = document.getElementById("t_div");
    t_element.style.top = `${t_element.offsetTop + 10}px`;
}