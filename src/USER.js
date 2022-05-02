export const logUserIn = (user) => {
    localStorage._id = user._id;
    localStorage.username = user.username;
    localStorage.password = user.password;
    localStorage.following = user.following;
    localStorage.bio = user.bio;
    localStorage.pfp = user.pfp;
    localStorage.userType = user.userType;
    localStorage.likes = user.likes;
    localStorage.comments = user.comments;
}

export const logUserOut = () => {
    localStorage._id = undefined;
    localStorage.username = undefined;
    localStorage.password = undefined;
    localStorage.following = undefined;
    localStorage.bio = undefined;
    localStorage.pfp = undefined;
    localStorage.userType = undefined;
    localStorage.likes = undefined;
    localStorage.comments = undefined;
}