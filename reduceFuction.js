const person = [
    {name:"Pradip", sname:"kolage", age:30},
    {name:"Rahul", sname:"kale", age:25},
    {name:"sandip", sname:"auti", age:24},
    {name:"rushi", sname:"argade", age:30},
    {name:"gautam", sname:"sable", age:25}]



    const result = person.reduce((acc,curr)=>{
        if(acc[curr.age]){
            acc[curr.age] = ++acc[curr.age]

        }else{
            acc[curr.age] = 1
        }

        return acc;

    },{})


    console.log(result)


    const output = person.filter((val)=>{ return val.age<30}).map((x)=>x.name)

    console.log(output)

