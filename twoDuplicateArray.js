const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];


const duplicate = [];

for (let i=0;i<arr1.length;i++){

    if(arr2.includes(arr1[i]) && !duplicate.includes(arr1[i])){

        duplicate.push(arr1[i])
    } 
}


console.log(duplicate);

//3. Using filter() + includes()

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];

// const duplicates = arr1.filter(num => arr2.includes(num));

// console.log("Duplicates:", [...new Set(duplicates)]); // [4, 5]



//2. Using Set for faster lookup

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];

// const set2 = new Set(arr2);
// const duplicates = [...new Set(arr1.filter(num => set2.has(num)))];

// console.log("Duplicates:", duplicates); // [4, 5]

