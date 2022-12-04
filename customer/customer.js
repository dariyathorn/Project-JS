let arrayOfproduct = JSON.parse(localStorage.getItem("arrayOfproduct"));
console.log(arrayOfproduct)
    
function show(element){
    element.style.display="block"
}

function hide(element){
    element.style.display="none"
}


function displayList (){
    let main = document.querySelector(".main");

    for(let index =0; index < arrayOfproduct.length; index++) {
        let product = arrayOfproduct[index];
        let card1 = document.createElement("div");
        card1.className = "card1";

        let card = document.createElement("div");
        card.className = "card";

        let image = document.createElement("img");
        image.src = product.img;
        image.style.width ="290px";
        image.style.height ="230px";

        let p = document.createElement("p");
        p.textContent = product.detail;

        let group_img = document.createElement("div");
        group_img.className = "group-img";
        
        let img = document.createElement("img");
        img.src ="./Image/s-10-removebg-preview.png";
        img.style.width ="20px";
        img.style.height ="20px";

        let button = document.createElement("button");
        button.textContent = "Order";

        card.appendChild(image);
        card.appendChild(p);
        card1.appendChild(card);
        card1.appendChild(group_img);
        group_img.appendChild(img);
        group_img.appendChild(button);
        main.appendChild(card1);
        console.log(main);
    }
}


// function searchpro(){
//     let listpro = document.querySelectorAll(".main .card1");
//     let researchpro = search.value;
//     let text = researchpro.toLowerCase();
    
//     for (let value of listpro){
//         let namelist = value.textContent.toLowerCase();
//         let displaystyle =  "";
//         if (namelist.indexOf(researchpro) >-1 ){
//             displaystyle ="block";
//         }
//         else{
//             displaystyle = "none";
//         }
//         value.style.display = displaystyle;
//     }
// }
// let search = document.querySelector("research").querySelector("input");
// search.addEventListener("keyup",searchpro);


displayList ();