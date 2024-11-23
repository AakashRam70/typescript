interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function isLeagal(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

