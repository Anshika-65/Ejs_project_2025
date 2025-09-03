const User = require('./models/User');
const bcrypt = require('bcrypt');

async function makeAdmin(){
    try {
        let user = await User.findOne({email: 'anshikarathor123@gmail.com'});
        if(user) {
            console.log("User updated....");
        } else {
        let user = new User();
        user.firstName = 'Anshika ';
        user.lastName = 'Rathor';
        user.email = 'anshikarathor123gmail.com';
        let encryptedPassword = bcrypt.hashSync('anshika123', 10);
        user.password = encryptedPassword;
        user.userType = 'Admin';
        await user.save();
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = makeAdmin;