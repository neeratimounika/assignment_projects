let promiseResolved=true;

const myPromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        if(promiseResolved){
            resolve('I have completed my promise')
        }else{
            reject('I didnot complete my promise ')
        }
    },2000)
})

myPromise.then(result=>{
    console.log(result);
}).catch(data=>{
    console.log(data)
}).finally(function(){
    console.log('this is being exicuted')
})

console.log('this is after api call')