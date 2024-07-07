import inquirer from "inquirer"

//-----------------------------name question-------------

let asked_name = await inquirer.prompt({
    name : "ans",
    type : "input",
    message : "What is your name?"
})


//------------------------------Question---------------------


let Question = await inquirer.prompt({
    name : "ans",
    type : "number",
    message : "if you are talkativer person select 1,if you don't like to talk type 2"
})

//-----------------------------person class-------------------------

class Person{

    Personality: string = "No personality"

    constructor( Personality: string){
        if(Personality != "" ){
            this.Personality = Personality


        }
    }

    askQuestion ( value: number) {

        if(value === 1) {
            this.Personality = "Extrovert"
        }
        else if(value === 2) {
            this.Personality = "Introvert"
        }
        else{
            this.Personality = "Mystery"
        }
    }
}

class Student extends Person{
    private _myname :  string = "No Name"

    constructor(Personality: string){
        super(Personality)
    }


     get myName()  {
        return this._myname
    }

    
    set myName(param : string) {
        if(param != ""){
            this._myname = param
        }
    }
    
    

}
let person = new Person("")
person.askQuestion(Question.ans)

let student = new Student("")
student.myName = asked_name.ans

console.log(`Hi ${student.myName}
You have ${person.Personality} personality`);


