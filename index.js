//this is the function that filter out even and odd numbers


const isEven = (array)=>{
    let even = []
    for(let i =0;i<array.length;i++){
        if(array[i]%2 ===0){
            even.push(array[i]);  
        }
    }
    return even 
}
console.log(isEven([12,3,4,5,6,7,8,2])); 
