function add(n1, n2) {
    if (typeof n1 == "number" && typeof n2 == "number") {
        return n1 + n2;
    }
    return n1.toString() + n2.toString();
}
var number1 = 3;
var number2 = 2;
console.log(add(number1, number2));
var person = {
    name: 'ahmed',
    age: 20
};
console.log();
