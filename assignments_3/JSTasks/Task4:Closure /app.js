// let sum = window.prompt("Enter Sum : ");
let sum = 1;
let temp = sum;

let res = function(a) {
    let obj = {
        add:function(num) {
            sum += num;
            return sum;
        },

        sub:function(num) {
            sum -= num;
            return sum;
        },

        inc:function() {
            sum++;
            return sum;
        },

        dec:function() {
            sum--;
            return sum;
        },

        reset:function() {
            sun = 0;
            return sum;
        }
    }

    return obj;
}

let ans = res();

console.log(ans.reset());
console.log(ans.inc());
