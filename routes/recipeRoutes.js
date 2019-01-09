const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const recipeTemplate = require('../services/emailTemplates/recipeTemplate');

const Recipe = mongoose.model('recipes');

module.exports = app => {
    app.get('/api/recipe/thanks', (req, res) => {
        res.send('Thanks for adding a new recipe!');
    });

    app.post('/api/recipes', requireLogin, async (req, res) => {
        const {
            id, 
            name,
            headline, 
            ingredients, 
            description, 
            image, 
            difficulty,
            recipients,
        } = req.body;

        const recipe = new Recipe({
            id, 
            name,
            headline, 
            ingredients, 
            description, 
            image, 
            difficulty,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            date: Date.now(),
        });

        // place to send an email
        const mailer = new Mailer(recipe, recipeTemplate(recipe));

        try {
            await mailer.send();
            await recipe.save();
        } catch (err) {
            res.status(422).send(err);
        }
        
    });
}