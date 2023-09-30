const form = document.querySelector("form");
const listClass = document.querySelector(".list");
let firstDiv;
const containerClass = document.querySelector(".container");
let todoListsClass;

const searchBar = document.querySelector(".search");
const myForm = document.querySelector("form");

let reset;

myForm.addEventListener("submit", (e) => 
{
    e.preventDefault();
    const inputValue = document.querySelector("input").value;
    
    if (inputValue != "")
    {
        firstDiv = document.createElement("div");
        firstDiv.classList.add("todoLists");

        const secondDiv = document.createElement("div");
        const p = document.createElement("p");
        p.innerHTML = inputValue;
        secondDiv.appendChild(p);

        const span = document.createElement("span");
        const img = document.createElement("img");
        img.src = "images/trash.png"
        
        span.appendChild(img);
        span.classList.add("reset");

        listClass.appendChild(firstDiv);
        firstDiv.appendChild(secondDiv);
        firstDiv.appendChild(span)      
        

    }

    del();
})

function del()
{
    reset = document.querySelectorAll(".reset");
    for (let a = 0; a < reset.length; ++a)
    {
        reset[a].addEventListener("click", () => {
        reset[a].parentElement.remove();
            })
    }
}

del();











