const functionStore = {
    increment: function () {
        this.count++;
    },
    greet: function () {
        console.log(`Welcome, ${this.name}`);
    }
};

function objectFactory(name, count) {
    const obj = Object.create(functionStore);
    Object.assign(obj, {name, count});
    return obj;
}

// const user1 = objectFactory('user_1', 5);

function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increement = function () {
    // function add1() {
    //     this.score++;
    // }
    // add1.apply(this);
    const add = () => {
        this.score++;
    };
    add();
};

UserCreator.prototype.logName = function () {
    console.log(this.name);
};

// const user2 = new UserCreator('User 2', 50);
// console.log(user2);
// user2.increement();
// console.log(user2);

class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increement() {
        this.score++;
    }

    log() {
        console.log(`THis user name is ${this.name}`);
    }
}

const user3 = new User('User-3', 75);


// Will Sentence

function makePerson(name, age) {
    return {name, age};
}

const vicky = makePerson('Vicky', 24);


const personStore = {
    greet: function () {
        console.log('hello');
    },
};

function personFromPersonStore(name, age) {
    const newObj = Object.create(personStore);
    newObj.name = name;
    newObj.age = age;
    return newObj;
}

const sandra = personFromPersonStore('Sandra', 26);
personStore.introduce = function () {
    console.log(`Hello, my name is ${this.name}`);
};

function PersonConstructor() {
    this.greet = function () {
        console.log('hello');
    };
}

var simon = new PersonConstructor;

function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person['name'] = name;
    person['age'] = age;
    return person;
}

var mike = personFromConstructor('Mike', 30);
PersonConstructor.prototype.introduce = function () {
    console.log(`Hello, my name is ${this.name}`);
};
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'
// mike.introduce();

class PersonClass {
    constructor() {
    }

    greet() {
        console.log('helo');
    }
}

const george = new PersonClass;

// george.greet();

class Developer extends PersonClass {
    constructor(name) {
        super();
        this.name = name;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const thai = new Developer('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'


/****************************************************************
 EXTENSION: SUBCLASSING
 ****************************************************************/

const userFunctionStore = {
    sayType: function() {
        console.log("I am a " + this.type);
    }
};

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}

const adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
    const admin = Object.create(userFactory(name, score));
    admin.type = 'Admin';
    Object.setPrototypeOf(admin, adminFunctionStore);
    return admin;
}

/* Put code here for a method called sharePublicMessage*/
adminFunctionStore.sharePublicMessage = function() {
  console.log('Hello all users!');
};

const adminFromFactory = adminFactory("Eva", 5);
const userFromFactory = userFactory("User", 6);
// console.log(adminFromFactory);

/********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"
userFromFactory.sayType(); // -> Logs "I am a Admin"
try {
    userFromFactory.sharePublicMessage();
} catch (e) {
    console.error(e);
}

const obj = {
  count: 1,
  increement: function () {
      this.count++;
      return this.count;
  }



};

const otherObj = {
    count: 40,
};

console.clear();
console.log(obj.increement());
console.log(obj.increement.apply(otherObj));

function UserCreater(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.introduce = function () {
  console.log(`Hola, I'm a ${this.name}, my score is ${this.score}`);
};

UserCreator.prototype.increement = function () {
  this.score++;
};

const user1 = new UserCreator('user1', 5);
const user2 = new UserCreator('user2', 10);

console.clear();
user1.introduce();
user2.introduce();

function PaidUserCreator(name, score, accountBalance) {
    UserCreator.apply(this, [name, score]);
    this.accountBalance = accountBalance;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);

const paidUser = new PaidUserCreator('paid_user', 100, 1000);
console.clear();
paidUser.introduce();