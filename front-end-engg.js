/*const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;
*/
const REQ = ["html", "css", "js"];

function FEE(exp, salary) {
    this.exp = exp;
    this.requirements = REQ;
    this.salary = salary;
}

const FEE_JUNIOR = {
    exp: 0,
    salary: 20000,
    requirements: REQ
}
module.exports = FEE_JUNIOR;