const btnDelete=document.querySelector(".delete");
const container=document.querySelector(".container");
const from=document.querySelector(".form");
const signIn=document.querySelector(".signBtn");
const inputs=document.querySelectorAll(".text");
const logINbtn=document.querySelector(".log--in");
const center=document.querySelector(".center");
console.log(inputs);


console.log(btnDelete);
btnDelete.addEventListener('click',(e)=>
{
    e.preventDefault();
    console.log("Hello there");
   from.classList.add("hidden");
})
signIn.addEventListener('click',(e)=>
{
    e.preventDefault();
    console.log("Hey there sign in button is cliked");
    from.classList.remove("hidden");
})

logINbtn.addEventListener('click',(e)=>
{
let i=0;
    e.preventDefault();
    inputs.forEach(arr=>{
       if(arr.value==="") i++;
     })
     console.log("button");
     if(i==0)
     {
        from.classList.add("hidden");
    
     }
     else
     {
         center.textContent="You are missed some places please re check"
         center.style.color="red";
         
     }
   
})
