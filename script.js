let string = "";
let buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach((buttonn) => {
    buttonn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            document.querySelector("input").value = eval(string);
        } else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector("input").value = " ";
        } else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }

    })
})