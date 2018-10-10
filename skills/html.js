const SOURCES = ['fcc', 'codecadeny'];
const fcc = require('./fcc')
const HTML = {
    name: "html",
    keyConcepts: {
        structural_tags: ['p', 'body', 'div', 'h1'],
        semantic_tags: []
    },
    src: [fcc]
}
console.log(HTML.src);