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

class Instructor extends Person{
    constructor(teacher){
        super(teacher);
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

class Student extends Instructor{
    constructor(partof){
        super(partof);
        this.previousBackground = partof.previousBackground;
        this.className = partof.className;
        this.favSubjects = partof.className;
    }
    /**Methods */
    listsSubjects(){
        return `favorite subjects are ${this.favSubjects}`;
    }
    PRAssignment(){
       return `${this.favSubjects} `;
    }
    sprintChallenge() {
        //return `{this.}`
    }
}

class Project_Manager extends Student{
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    /*Methods*/
    standUp(){
        return `${this.name} announces to ${this.channel} @channel standy times!`
    }
    debugsCode(){
        return `${this.name} debugs ${student.name} code on ${this.subject}.`;
    }

}

const fred = new Instructor({
    name: 'Fred',
    age: '37',
    location:'Bedrock',
    gender: 'male',
    favLanguage: 'JavaScript, Python, Elm',
    specialty: 'Redux',
    catchPhrase: 'Dont forget the homies'

});

const vanessa = new Student ({
    name: 'Vanessa',
    age: 30,
    location: 'Atlanta GA',
    gender: 'Female',
    previousBackground:'Project Management and Tier 3 Technical Support',
    className: "Web18",
    favSubjects: ['HTML', 'CSS', 'JavaScript',],

});

const don = new Project_Manager ({
    name: 'don',
    age: 27,
    location: 'Chicago',
    gender: 'Male',
    gradClassName: 89,
    favInstructor: 'Josh'
});



 console.log(vanessa.name); // student name 
//     console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//     console.log(swordsman.healthPoints); // 15
//     console.log(mage.name); // Bruce
//     console.log(swordsman.team); // The Round Table
//     console.log(mage.weapons); // Staff of Shamalama
//     console.log(archer.language); // Elvish
//     console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//     console.log(mage.takeDamage()); // Bruce took damage.
//     console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  