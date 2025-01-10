function userData(userId, callback) {
    setTimeout(() => {
        const users = {
            1: { id: 1, name: "Krishna" },
            2: { id: 2, name: "Rama" },
        }

        // setTimeout(() => {
        //     callback(users[user]);
        // }, 5000);

        const user = users[userId]
        if (user) {
            callback(null, user);

        }
        else {
            callback("User not found", null);
        }

    }, 2000);

}


function validateuser(error, user) {
    if (error) {

        console.error(user , "does not exist in the database");
    }
    else {

        console.log(user , "exists in the database");

    }
}

userData(1, validateuser);