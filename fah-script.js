function changeColorOnSelect(obj) {
    if (obj.style.backgroundColor == "palegreen")
        obj.style.backgroundColor = obj.parentElement.style.backgroundColor;
    else
        obj.style.backgroundColor = "palegreen";
}

function changeCardColor(obj) {
    obj.parentElement.style.backgroundColor = "palegreen";
}

