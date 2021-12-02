// Dichiarazione delle variabili

function Area() {
    let b=document.getElementById("base").value;

    let h=document.getElementById("height").value;

    let A=b*h;

    console.log('A')

    document.getElementById("area").value = "L'area del rettangolo è: " + A;
    }
