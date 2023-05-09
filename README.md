# [Cutlink](https://github.com/lqvers/cutlink)
 Cutlink is a lightweight NPM package that allows you to quickly and easily shorten URLs using a variety of link shortening services. With Cutlink, you can integrate link shortening capabilities into your web or mobile application with just a few lines of code.

### Overview
This is just a quick example of how to use the package, for a more in depth explanation check the [documentation](https://github.com/lqvers/cutlink/master/docs.md)

```ts
import { Shortener } from 'cutlink'; // Import the package
const shortener = new Shortener('tinyurl.com'); // Check docs for all supported shorteners

const url = 'google.com';
const shortened = shortener.new(url); // Create a new shortened URL

console.log(shortened) // Log shortened URL to console
```