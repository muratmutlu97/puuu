class User {
    constructor() { }

    static currentUser = {
        _id: '',
        email: '',
        username: '',
        password:'',
        fullname: '',
        role: '',
        gender: '',
        photoUrl: '',
        fullname: '',
        token:''
    };
    static setCurrentUser(data) {
        this.currentUser = data;
    }
    static getCurrentUser() {
        return this.currentUser;
    }
}
module.exports = User  