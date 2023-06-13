function dtoB(num){
let rems=[];
while(num>0)
{

let rem=num%2;
let cosent=Math.floor(num/2);
num=cosent;
rems.push(rem)
}
let reverseArray=[]
 for(let i=rems.length-1;i>=0;i--)
 {
    reverseArray.push(rems[i])
 }
return reverseArray
}
console.log(dtoB(57))
