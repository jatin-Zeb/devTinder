const userAuth = (req, res, next) => {
    
    const token = "xxx";

    if (token !== "xxx") {
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
}

module.exports = {
    userAuth
}