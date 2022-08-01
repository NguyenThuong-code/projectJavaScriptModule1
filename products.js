class Products{
  id
  name
  describe
  price
  photo
  constructor(id, name, describe, price,photo){
    this.id =id;
    this.name=name;
    this.describe=describe;
    this.price= price; 
    this.photo=photo; 
  }
}
  
class Display{
   addProductToList(product){
    const list=document.getElementById('product-list');
    const row = document.createElement('tr')
    // row.className=`display-search ${className}`;
    row.innerHTML=`
    
    <td>${product.id}</td>
    <td id="getname">${product.name}</td>
    <td>${product.describe}</td>
    <td>${product.price} $</td>
    <td><img src="${product.photo}" alt="#" width="200px" height="200px"></td>
    <td><input  onClick="editPost(this)" class="btn btn-warning" type="button" value="Edit"></td>
    <td><input  onClick="deletePost(this)" class="btn btn-danger" type="button" value="Delete"></td>
    `;
    list.appendChild(row)
   }
  
showAlert(message, className){
    const div=document.createElement('div');

    div.className=`alert ${className}`;

    div.appendChild(document.createTextNode(message));
    const container=document.querySelector('.form-Add');
    //get Form 
    const form= document.querySelector('#product-form');
    container.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
   }

   clearFields(){
    document.getElementById('id').value='';
    document.getElementById('name').value='';
    document.getElementById('describe').value='';
    document.getElementById('price').value='';
    document.getElementById('photo').value='';
   }
}
const display = new Display();
document.getElementById('product-form').addEventListener('submit', function(e){
  const id= document.getElementById('id').value;
  const name=document.getElementById('name').value;
  const describe=document.getElementById('describe').value;
  const price=document.getElementById('price').value;
  const photo =document.getElementById('photo').value;

  const product= new Products(id, name, describe,price,photo);
 
  if(id===''|| name===''|| describe===''||price===''||photo===''){
    display.showAlert("Please fill in all fields",'error');
  }else{
    display.addProductToList(product);
    display.showAlert('Product Added', 'success');
    display.clearFields();
  }
  e.preventDefault();
})


  let product1= new Products("1", "Nike 03", "Size 34-39","245","https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/b4772c29-cca9-4626-a51a-9d81f36bfce6/nike-just-do-it.jpg");
  let product2 = new Products("2", "Nike 04", "Size 34-39","200","https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/59226032-852e-456c-8c48-4ca7800007fe/image.png");
  let productArray = [product1,product2];
  for(let i =0; i< productArray.length; i++){
    let p=productArray[i];
    
    display.addProductToList(p);
  }



let deletePost = (e) =>{
  var answer = window.confirm("Delete data?");
if (answer) {
  e.parentElement.parentElement.remove();
}
else {
    return;
}
}
/**************************************************************** Edit form*/

let editPost=(td)=>{
    let form =document.getElementById("form");
    if(form.style.display==='block'){
        form.style.display='none';
    }else{
        form.style.display='block';
    }
    selectedRow=td.parentElement.parentElement;
     document.getElementById('id').value=selectedRow.cells[0].innerHTML
    document.getElementById('name').value=selectedRow.cells[1].innerHTML
    document.getElementById('describe').value=selectedRow.cells[2].innerHTML
    document.getElementById('price').value=selectedRow.cells[3].innerHTML
    document.getElementById('photo').value=selectedRow.cells[4].querySelector("img").src
    td.parentElement.parentElement.remove();
}



// let search =()=>{
//   const searchBox=document.getElementById("search-item").value.toUpperCase()
//   const storeitems=document.getElementById("product")
//   const getSearch= document.querySelectorAll(".display-search")
//   const pname=storeitems.getElementById("getname")
//   for(let i=0; i<pname.clientHeight;i++){
//     let match= getSearch[i].getElementById("getname")[0];
//     if(match){
//       let textvalue= match.textContent ||match.innerHTML
//       if(textvalue.toUpperCase().indexOf(searchBox)>-1){
//         getSearch[i].style.display="";
//       }else{
//         getSearch[i].style.display="none"
//       }
//     }
//   }
// }
