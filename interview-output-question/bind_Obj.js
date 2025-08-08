const obj = {

    a:1,
    b:2,

    sum(){
        return this.a + this.b;

    }
}


const result = obj.sum;
console.log(result());  //NaN

//do it correct output: 3

const result1 = obj.sum.bind(obj);
console.log(result1());


//reduce function in javascript


const num = [1,2,3,4];

const res = num.reduce((acc, val)=> acc - val)

console.log(res) // -8

// using reduceRight function 

const res1 = num.reduceRight((acc, val)=> acc - val)

console.log(res1)