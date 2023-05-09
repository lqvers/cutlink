import { Shortener } from '../lib/index.js'
const shortener = new Shortener('tinyurl.com')

shortener.new('https://google.com').then(x => console.log(x))