import data from './user.json' assert { type: 'json' };

let totalrecords = data.length;
let countPerPage = 10;
let currentPage = 1;

var div1 = document.createElement("div")
document.body.append(div1)

const div2 = document.createElement("div")
document.body.append(div2)

function displayRecords(items, rows_per_page, page){
  
  page--
  let start = rows_per_page * page
  let end = start+rows_per_page
  let paginatedItem = items.slice(start, end)

  console.log(paginatedItem)  
  

  var heading = document.createElement("h1")
  heading.innerText = "User Details"
  div1.appendChild(heading)

  const table2 = document.createElement("table");
  table2.setAttribute("class", "styled-table")
  div2.appendChild(table2);

  const tabHead = document.createElement("thead");
  table2.appendChild(tabHead);

  const tr1 = document.createElement("tr");
  tabHead.appendChild(tr1);

  const th1 = document.createElement("th");
  th1.innerText = "Id"
  tr1.appendChild(th1);

  const th2 = document.createElement("th");
  th2.innerText = "Name"
  tr1.appendChild(th2);

  const th3 = document.createElement("th");
  th3.innerText = "Email"
  tr1.appendChild(th3);

  const tabbody2 = document.createElement("tbody");
  table2.appendChild(tabbody2);

  
  for(let i=0; i< paginatedItem.length; i++){
           
    var row = tabbody2.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerText = ` ${paginatedItem[i]["id"]}`;
    cell2.innerText = ` ${paginatedItem[i]["name"]}`;
    cell3.innerText = ` ${paginatedItem[i]["email"]}`;
    
       
    table2.classList.add("item")
    
  }

}


function setUpPagination(data, rows_per_page){
 
  let totalPage = Math.ceil(totalrecords/rows_per_page);
  let div3 = document.createElement("div")
    div3.setAttribute("class", "pagination")
    document.body.append(div3)

  for(let i=1;i<totalPage+1;i++){    

    let btn = paginationButton(i, data);
    div3.appendChild(btn)
        
  }

}

function paginationButton(page, data){

  
  let button = document.createElement("button");
  button.innerText = page;

  if(currentPage == page){
    
    button.classList.add('active')
  }
 

  button.addEventListener('click', function () {
    div1.innerHTML = ""
    div2.innerHTML = ""
       
    currentPage = page;     
    
    displayRecords(data, countPerPage, currentPage); 
    
    let current_btn = document.querySelector(".pagination button.active")
    current_btn.classList.remove('active')
    button.classList.add('active')

  })  

  return button;

}

displayRecords(data, countPerPage, currentPage);
setUpPagination(data, countPerPage, currentPage)










