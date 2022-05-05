// create a object called instructor that has a function called evaluate(this function sums this.aptitude, this.coreskill and consoles the same).
// create an array of interns objects(contain two properties aptitude and coreskill). 
// loop over every intern and use instructor objects to evaluate the intern and to display the score of each. 
// we should use bind, apply concepts here

let instructor = {
    aptitude:0,
    coreskill:0,
    evaluate: function() {
        let sum = this.aptitude + this.coreskill;
        console.log(sum);
    }
}

// let interns =[[4,5], [5,3], [1,5]] ;
let interns = [
    {
        aptitude: 4,
        coreskill: 5
    },
    {
        aptitude: 5,
        coreskill: 3
    },
    {
        aptitude: 1,
        coreskill: 5
    }
]

let obj = instructor;
for(let i=0 ; i<3 ; i++) {
    // obj.aptitude = interns[i].aptitude;
    // obj.coreskill = interns[i].coreskill;
    // obj.evaluate();
    let fun = instructor.evaluate.bind(interns[i]);
    fun();
}