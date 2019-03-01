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
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student){
        return `${student.name} received a perfect score on ${subject}.`
        
    }
    adverage(student) {
        let adveragePt = Math.round(Math.random() * 100);
        if (student.grade >= 100){
            student.grade - adveragePt;
            return `${adveragePt} adverage was  subtract from  ${student.name}'s grade. ${student.name} current grade is ${student.grade}`;
        }
        else 
        {
            student.grade += adveragePt;
            return `${student.name}'s grade at the time is ${student.grade}`;
        }
        
    }
}

class Student extends Person{
    constructor(partof){
        super(partof);
        this.previousBackground = partof.previousBackground;
        this.className = partof.className;
        this.favSubjects = partof.className;
    }
    /**Methods */
    listsSubjects(){
        return  `${this.favSubjects}.map (subs => console.log(subs))`;
    }
    PRAssignment(subject){
       return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}


class Project_Manager extends Student{
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    /*Methods*/
    standUp(channel){
        return `${this.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(){
        return `${this.name} debugs ${student.name} code on ${this.favSubjects}.`;
    }

}

const fred = new Instructor({
    name: 'Fred',
    age: '37',
    location:'Bedrock',
    gender: 'male',
    favLanguage: ['JavaScript', 'Python', 'Elm',],
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

                    /**consol logs  */

        console.log(fred.speak()); // instructor introduction
        console.log(vanessa.listsSubjects()); // student talking 
        console.log(don.gender); //Project manager gender
        console.log(don.debugsCode) // project manager debug
        console.log(fred.demo("JavaScript")); //fred f
        console.log(don.standUp('Web18')); //standup
        console.log(don.PRAssignment("JavaScript")); // instructor 
        console.log(vanessa.speak()); // student speak
        console.log(don.speak());


  