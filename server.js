const express = require('express')
const app = require("liquid-express-views")(express())
const port = 3000;
const pokemons = require('./pokedex/pokemon.js')

app.use(express.static('public'))

app.get('/pokemon', (req, res) => {
    res.render(
        'index', {
            pokemon: pokemons
        }
    )
})

app.get('/pokemon/:id', (req, res) => {
    res.render(
        'show',       
        {
            pokemon: pokemons[req.params.id]
        }
    )
})

app.listen(port, () => {
    console.log("Now listening on port 3000 :)")
})