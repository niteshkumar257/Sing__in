const btnDelete=document.querySelector(".delete");
const container=document.querySelector(".container");
const from=document.querySelector(".form");
const signIn=document.querySelector(".signBtn");


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