const {Schema, model} = require('mongoose')

const schema = new Schema({
    _id: {type: String},
    budget: {type: String},
    genres: {type: String},
    homepage: {type: String},
    id: {type: String},
    keywords: {type: String},
    original_language: {type: String},
    original_title: {type: String},
    overview: {type: String},
    popularity: {type: String},
    production_companies: {type: String},
    production_countries: {type: String},
    release_date: {type: String},
    revenue: {type: String},
    runtime: {type: String},
    spoken_language: {type: String},
    status: {type: String},
    tagline: {type: String},
    title: {type: String},
    vote_average: {type: String},
    vote_count: {type: String},
    cast: {type: String},
    crew: {type: String},
    director: {type: String}
}, {versionKey: false})

module.exports = model('Movie', schema)