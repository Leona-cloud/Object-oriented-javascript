function User(email, name) {
    this.email = email, 
    this.name = name,
    this.online = false
    /*this.login = function(){
        console.log(this.email, 'has logged in')
    }*/
};

//prototype
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in')
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out')
};


function Admin (...args){
    User.apply(this, args);
    this.role = 'super-admin'
};

//prototype inheritance
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user =>{
       return users.email != u.email
    });
};

let user1 = new User( 'adanna@gmail.com', 'Adanna');
let user2 = new User('funmi1@gmail.com', 'Funmilola');
let admin = new Admin('leona@gmail.com', 'Leona');
let users = [user1, user2, admin]

console.log(user1);
user2.login();
console.log(admin)
