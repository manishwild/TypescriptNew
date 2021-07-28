"use strict";
const employee = {
    id: 1,
    greet: function () {
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
};
employee.greet();
// old way
const employee1 = {
    id: 1,
    greet: function () {
        const self = this;
        // if we dont declasre self it will be undefined
        setTimeout(function () {
            console.log(self.id);
        }, 1000);
    }
};
employee1.greet();
