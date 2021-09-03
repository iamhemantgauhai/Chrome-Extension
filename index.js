let myLeads=[]
const ulEl=document.getElementById("ul-el")
const inputEl= document.getElementById("#input-el")
const inputBtn= document.getElementById("#input-btn")

function saveInput(){
    inputEl.textContent=inputEl.value
    inputBtn.textContent=myLeads.push(inputEl.value)
    ulEl.textContent=myLeads[i]
}

inputBtn.addEventListener("click",function(){
    inputEl.value=""
    myLeads.push(inputEl.value)
    renderLeads()
})

function renderLeads(){
    let listItem=""
    for(let i=0;i<myLeads.length;i++){
        //listItem += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
        listItem += `<li>
                        <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                        </a>
                    </li>`
        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)
    }
    ueEl.innerHTML = listItem
}
