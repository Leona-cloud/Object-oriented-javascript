class User {
    constructor(name, email, score){
        this.email = email,
        this.name = name,
        this.score = 0
    }

    //methods
    login(){
        console.log(this.email, 'Just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'Just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

// Inheritance
class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}


const user1 = new User('Adanna', 'adanna@gmail.com');
const user2 = new User('Funmilola', 'funmi1@gmail.com');
const admin = new Admin('Chisom', 'chisom@gmail.com');

//method chaining
user1.login().updateScore().updateScore().logout();

let users = [user1, user2, admin];

admin.deleteUser(user2);

console.log(users)
