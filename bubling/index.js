const grandParent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandParent.addEventListener('click',(e)=>{
    console.log('this grandparent el')
    
},{capture:true})

parent.addEventListener('click',(e)=>{
    console.log('this is parent')
},{capture:true})

child.addEventListener('click',(e)=>{
    console.log('this is child')
},{capture:true})