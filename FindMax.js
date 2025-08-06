const arr = [4,5,7,6,2,4,9,1];


const findMax = (arr)=>{

    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
        {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax(arr))


// using reduce

const arr1 = [12,54,23,74,69,11];

const findMax1 = arr1.reduce((max,curr)=>{
    if(curr>max){
        max = curr;
    }

    return max;
},0)

console.log(findMax1)

