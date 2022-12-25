let form = document.getElementById('myform');
let description= document.getElementById('descriptionInput')
let category= document.getElementById('category')
let ammount= document.getElementById('ammount')
let expenseId= document.getElementById('expenseId');
const userList = document.querySelector('#displayList');

const http= "http://localhost:3000/expense/";

form.addEventListener('submit',add);
userList.addEventListener('click',removeItem)
userList.addEventListener('click',EditItem)
let token = localStorage.getItem("userData")
window.addEventListener('DOMContentLoaded',load)

async function load(){
  await axios.get(http,{headers:{"Authourization":token}}).then(res=>{ 
    console.log(res);
    displayexpenses(res);
   }).catch(err=>{console.log("error found"); console.log(err)});  

}

async function add(e){
    e.preventDefault();
    if(description.value===''||ammount.value===''){ alert('please enter all fields')}
    else{
       
      let obj={"ammount":ammount.value, "category":category.value,"description": description.value}
    await axios.post(http,obj,{headers:{"Authourization":token}}).then(res=> console.log(res.data)).catch(err=>{console.log(err);})
    load()
    }
    }
    
    //display expenses
    function displayexpenses(data){
    //clear previous list items,
    let ul = document.getElementById('displayList');
    while(ul.firstChild){ul.removeChild(ul.lastChild)}
    //create new childs.
    for (let i = 0; i < data.length  ; i++) {
        let destring=data[i];
      console.log(destring.id,destring.ammount, destring.category,destring.description);
    //creating li object
    let li= document.createElement('li');
    li.id=destring.id;



let ammountspan= document.createElement('span')
ammountspan.className="amtspn"
ammountspan.appendChild(document.createTextNode("Rs:  "+destring.ammount  ))
 li.appendChild(ammountspan)


 let categoryspan= document.createElement('span')
 categoryspan.appendChild(document.createTextNode(destring.category))
  li.appendChild(categoryspan)

  let descriptionspan= document.createElement('span')
  descriptionspan.appendChild(document.createTextNode(destring.description))
   li.appendChild(descriptionspan)

    //create span
    let span = document.createElement('span');
    span.appendChild(document.createTextNode('  '))
    li.appendChild(span)
    //delete button
    let btn = document.createElement('button');
    btn.className='delete'
    btn.appendChild(document.createTextNode('DELETE'))
    li.appendChild(btn)
    // edit button
    
    let editbtn = document.createElement('button');
    editbtn.className='edit'
    editbtn.appendChild(document.createTextNode('EDIT'))
    li.appendChild(editbtn)
    ul.appendChild(li);
    }
    ammount.value=''
    description.value=''
    
    };
    
    
    async function removeItem(e){
      if(e.target.classList.contains('delete')){
        var li= e.target.parentElement;
         let key = li.id;
         console.log(key);
        await axios.delete(http+key,{headers:{"Authourization":token}}).
         then( res=>{console.log(res);
         }).catch(err=>{console.log(err);})
        }
      
    await load()
        }
    
    
    //update the value,
    
    async function EditItem(e){
    
      if(e.target.classList.contains('edit')){
      let li= e.target.parentElement;
      let key = li.id;
      console.log(key);
      await axios.get(http+key).then( (res)=>{
        console.log(res);
    ammount.value= res.ammount;
    description.value=res.description;
    category.value=res.category
      console.log(res.id); 
      } ).catch(err=>console.log(err))
      
      expenseId.value=key;
      form.removeEventListener('submit',add)
      form.addEventListener('submit', updated)
      }
      
      }
      
      async function updated(e){
        console.log(expenseId.value);
        let key = expenseId.value;
       e.preventDefault();
        await axios.put(http+key,{
          "ammount":ammount.value, "category":category.value,"description": description.value
        }).then(res=>{console.log(res);}).catch(err=>{console.log(err);})
      
        form.removeEventListener('submit',updated)
        form.addEventListener('submit', add)
    
      
      
        await axios.get(http).then(res=>{
          displayexpenses(res);console.log(res);
          } )
          .catch(err=>console.log(err))
      }