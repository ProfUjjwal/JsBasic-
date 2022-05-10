const counter = {
    value: 0,
    increment: function () {
        this.value += 1;
        return this;
    },
    decrement: function () {
        this.value -= 1;
        return this;
    }
}

counter.increment().increment().decrement();
console.log(counter.value);

