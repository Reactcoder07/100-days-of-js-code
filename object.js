const Person = {
    fname: "Pradip",
    lname:"kolage",
    age: 30,
    fullName : function (){
        return this.fname + " " +this.lname;

    }

}

console.log(Person.fullName())