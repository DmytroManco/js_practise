(function () {
    class UserCreator {
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }
        logName() {
            console.log(`Hello, my name ${this.name} and score: ${this.score}`);
        };
        increment() {
            this.score++;
        }
    }
    const u1 = new UserCreator('user__1', 10);
    u1.logName();

    class PaidUserCreator extends UserCreator {
        constructor(name, score, accountBalance) {
            super(name, score);
            this.accountBalance = accountBalance;
        }
        incrementBalance() {
            this.accountBalance++;
        }
    }
    const paidUser = new PaidUserCreator('paid__user', 15, 75);
    paidUser.logName();
    paidUser.increment();
    paidUser.logName();
})();