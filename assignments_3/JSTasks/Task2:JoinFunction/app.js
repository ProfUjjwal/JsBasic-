function join(...CharArr) {
    let ans = "";
    for(let i=0 ; i<CharArr.length ; i++) {
        ans += CharArr[i];
    }

    return ans;
}


console.log(join("a", "b", "c"));