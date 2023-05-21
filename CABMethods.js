var person = {
    fullName: function () {
        return `${this.fname}   ${this.lname}`;
    },

    hobbies: function (...activities) {
        return `${this.fname} ${this.lname} hobbies are ${activities}`;
    },

    job :function (role){
        return  `${this.fname} ${this.lname} works as ${role}`;
    }

}

var person1={
    fname:"Vinod",
    lname:"Gowda"
}


document.getElementById("cab1").innerHTML= person.fullName.call(person1);
document.getElementById("cab2").innerHTML= person.hobbies.apply(person1, ['Cricket', 'Reading', 'Trekking']);
var job =person.job.bind(person1);
document.getElementById("cab3").innerHTML=job("Developer");