const myDetails = {};

const firstName = {fname: 'firstName'};
const surname = {surname: 'surname'};

Object.assign(myDetails, firstName, surname);

Object.prototype.myAssign = function (goalObj, ...src) {
    if (typeof goalObj !== 'object') return;

    src.forEach((srcObj) => {
        if(typeof srcObj !== 'object') {
            throw new Error('Incorrect source input!');
        }
        for(const property of Object.keys(srcObj)) {
            goalObj[property] = srcObj[property];
        }
    });
};

const myObj = {};
Object.myAssign(myObj, firstName, surname);

function classMixin(cls, ...src) {
    src.forEach((_class) => {
       for(const key of Object.getOwnPropertyNames(_class.prototype)) {
           cls.prototype[key] = _class.prototype[key];
       }
    });
}

class Car {
    drive() {
        console.log('drive');
    }
}

class Bus {
    openDoor() {
        console.log('Door is open');
    }
}
classMixin(Car, Bus);

const reno = new Car();
reno.openDoor();