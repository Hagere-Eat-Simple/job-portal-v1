/**
 * Middleware to authenticate user using JWT token
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function
 */
const auth = async (req, res, next) => {
    try {
        // Extract token from request header
        const token = req.header('Authorization').replace('Bearer ', "");
        // Verify token and get decoded data
        const decoded = jwt.verify(token, 'fightlikeurthethirdmonkey');
        // Find user based on decoded token
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token, isactive: 'active'});

        if (!user) {
            throw new Error('User not found');
        }
        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        // Send 401 Unauthorized error if authentication fails
        res.status(401).send({ error: "Unauthorized" });
    }
}