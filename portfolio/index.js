let changeBgRed=()=>{
    document.body.firstElementChild.style.background="red";
}

let b=document.body;
console.log("firstchild of b ", b.firstChild);
console.log("first element child of b ", b.firstElementChild);
changeBgRed();
console.log("first child"+b.firstChild);

//Table Navigation
let t=document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead.firstElementChild);
console.log(t.tBodies);
console.log(t.tbody.rows);
// tr=t.rows[0]
console.log(t.rows[0]);
console.log(t.rows[0].rowIndex);
console.log(t.rows[0].sectionRoeIndex);

// card
let ct=document.getElementsByClassName("card-title")[0];
ct.style.color="red"; 
let fct=document.getElementById("fct");
fct.style.color=" blue";

let ctitle=document.querySelectorAll(".card-title");
ctitle[0].style.color="red";
ctitle[1].style.color="blue";
ctitle[2].style.color="green";
