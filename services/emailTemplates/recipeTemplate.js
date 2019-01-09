module.exports = ({date, name, headline, ingredients, description, image, difficulty}) => {
    return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>Hi,</h3>
                Great, you have added a new recipe:
                name: ${name}
                headline: ${headline}
                ingredients: ${ingredients}
                description: ${description}
                image: ${image} 
                difficulty: ${difficulty} 
                date: ${date}
            </div>
        </body>
    </html>`
};