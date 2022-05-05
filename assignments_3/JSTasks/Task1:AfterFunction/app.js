let repeaptation = 0;

function after(cnt , hello) {
    if(repeaptation === cnt) {
       const ans = hello();
       console.log(ans);
    }   

    else ++repeaptation;
}

function hello() {
    return "hello";
}

// let helloAfter = after(3, hello);

// after(3, hello);
// after(3, hello);
// after(3, hello);
// after(3, hello);

const helloAfter = after(3, hello);

helloAfter() // returns nothing
helloAfter() // returns nothing
helloAfter() // returns nothing
helloAfter() // returns "hello"
