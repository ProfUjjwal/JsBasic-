let _Value = 0;
let ShowValue = 0 ;

function UpdateValue() {
    if(document.getElementById("Value").value == "") {
        _Value = 0;
    }

    else {
        let va = +(document.getElementById("Value").value);
        _Value = va;
        console.log(_Value);
    }
}

function inc() {
    ShowValue += _Value;
    let out = document.getElementById("output");
    out.innerHTML = `${ShowValue}`;
}

function dec() {
    ShowValue -= _Value;
    let out = document.getElementById("output");
    out.innerHTML = `${ShowValue}`;
}