// CODE here for your Lambda Classes

//Base-class
class Person{
    constructor(people){
        this.name = people.name;
        this.age = people.age;
        this.location = people.location;
        this.gender = people.gender;
    }
    /**Method */
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor{
    constructor(teacher){
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.subject}.`;
    }
    grade(){
        return `${student.name} received a perfect score on ${this.subject}.`
    }
}

class Student{
    constructor(partof){
        this.previousBackground = partof.previousBackground;
        this.className = partof.className;
        this.favSubjects = favSubjects.className;
    }
    /**Methods */
    listsSubjects(){
        return `${favSubjects}`;
    }
    PRAssignment(){
       return `${this.favSubjects} `;
    }
    sprintChallenge() {
        //return `{this.}`
    }
}

class Project_Manager{
    
}


const fred = new Person({
    name: 'Fred',
    age: 'Bedrock',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Dont forget the homies'
});