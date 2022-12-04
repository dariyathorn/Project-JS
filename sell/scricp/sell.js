const dialog = document.querySelector("#dailog_element");
const table = document.getElementById("list-product");

const btn_edit=document.querySelector("#edit");
const dailog_element=document.querySelector("#dailog_element");

const header_edit = document.querySelector("#add");
const btn_submit = document.querySelector("#create")
const form_header=document.querySelector(".form-title")

let arrayOfproduct= [
    {
        name:"bag",
        price:"100$",
        img:"../image/s-1.jpg",
        detail:"Cambodia",
    },
    {
        name:"bag",
        price:"5$",
        img:"../image/s-2.png",
        detail:"Cambodia",
    },
    {
        name:"bag",
        price:"10$",
        img:"../image/s-3.png",
        detail:"Cambodia",
    },
    {
        name:"bag",
        price:"20$",
        img:"../image/s-4.png",
        detail:"Cambodia",
    },
    {
        name:"bag",
        price:"30$",
        img:"../image/s-5.png",
        detail:"Cambodia",
    },
    
]

function show(element){
    element.style.display="block";
}

function hide(element){
    element.style.display="none";
}
function saveProduct(){
    // console.log('yes');
    localStorage.setItem("arrayOfproduct" ,JSON.stringify(arrayOfproduct));
}
function loadProduct(){
    let storeName = JSON.parse(localStorage.getItem("arrayOfproduct"));
    if(storeName !==null){
       storeName  =arrayOfproduct ;
    }
    console.log(arrayOfproduct);
    
}

function displayList() {
    let listProduct = document.getElementById("tbody");
    listProduct.remove();
    let productTable = document.createElement("tbody");
    productTable.id = "tbody";
    
    table.appendChild(productTable);
    let index = 0
    for(let index =0 ; index< arrayOfproduct.length;index++) {
        product=arrayOfproduct[index];
        
        let tr = document.createElement("tr");
        tr.id = "table-row";
        tr.dataset.index = index;
        
        
        let nameProduct = document.createElement("td");
        nameProduct.textContent = product.name;
        
        let detail = document.createElement("td");
        detail.textContent = product.detail;
        
        let price = document.createElement("td");
        price.textContent = "$"+ product.price ;
       
        let img =document.createElement("img");
        img.className='img-product'
        img.src = product.img;
        
        
        let storeImg = document.createElement("td");
        storeImg.id = "td-img"
        storeImg.appendChild(img);
        
        let tdButton = document.createElement("td");
        tdButton.id = "action"
        
        let bntDelete = document.createElement("button");
        bntDelete.id = "btn-delete";
        bntDelete.textContent = "Delete";

        bntDelete.addEventListener("click", deleteProduct)
        let bntEdit = document.createElement("button");
        bntEdit.id = "btn-edit";
        bntEdit.textContent = "Edit";
        tdButton.appendChild(bntDelete);
        tdButton.appendChild(bntEdit);
        bntEdit.addEventListener('click',editProduct)
        
        
        tr.appendChild(storeImg);
        tr.appendChild(nameProduct);
        tr.appendChild(detail);
        tr.appendChild(price);
        tr.appendChild(tdButton);
        productTable.appendChild(tr);
        
        
    }  
}
function addNewProduct(){
    show(dialog);
    btn_submit.textContent="Create ";
    form_header.textContent="Create product"
    document.getElementById("img").value="";
    document.getElementById("name").value="";
    document.getElementById("detail").value="";
    document.getElementById("price").value="";
    saveProduct();
    deleteProduct() 
} 
function deleteProduct(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    arrayOfproduct.splice(index,1)
    saveProduct();
    displayList();
 }
function onCancel(event){
    event.preventDefault();
    hide(dialog);
}
let productIndex=null;
function onCreate(event){
        event.preventDefault();

        
        let newProduct={};
        console.log("user is create")  
        newProduct.img=document.querySelector("#img").value;
        newProduct.name=document.querySelector("#name").value;
        newProduct.detail=document.querySelector("#detail").value;
        newProduct.price=document.querySelector("#price").value;
        // console.log(newProduct)
    
        arrayOfproduct.push(newProduct);
        hide(dialog);
        saveProduct();
        displayList();
}
let getBtnAddProduct = document.getElementById("btn-add-product");
getBtnAddProduct.addEventListener("click",addNewProduct);

function editProduct(event){
    let newProductIndex = event.target.parentElement.parentElement.dataset.index;
    productIndex=newProductIndex;
    let edits = arrayOfproduct[newProductIndex];
    document.getElementById("img").value=edits.img;
    document.getElementById("name").value=edits.name;
    document.getElementById("detail").value=edits.detail;
    document.getElementById("price").value=edits.price;
    btn_submit.textContent="Edit";
    form_header.textContent="Edit";
    show(dialog);
}
displayList();
