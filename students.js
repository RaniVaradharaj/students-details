
clickevent = () => {
    
    let Sname = document.getElementById("stu_name").value;
    let mark1 = document.getElementById("mark1").value;
    let mark2 = document.getElementById("mark2").value;
    let mark3 = document.getElementById("mark3").value;
    let mark4 = document.getElementById("mark4").value;
    let mark5 = document.getElementById("mark5").value;
}

let total = +mark1 + +mark2 + +mark3 + +mark4 + +mark5;
let avg = total / 5;
let grade = grade(total);

let grade = (total) => {
    let grandtotal = 500;
    // if (total >= 450) { 
}