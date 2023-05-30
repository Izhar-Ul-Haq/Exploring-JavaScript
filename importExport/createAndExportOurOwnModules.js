const add = (a,b) => {
    return a + b;
}
const sub = (a,b) => {
    return a - b;
}

const mul = (a,b) => {
    return a * b;
}
const izhar = "Izhar Ul Haq";
console.log(izhar);

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
module.exports = {add, sub, mul}

module.exports.izhar = izhar;