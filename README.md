# generate-uuid.js [DEPRECATED]

## IMPORTANT

This package contains a lot of bugs and is not being maintained anymore!

## About

This is a npm package that can generate a v4 uuid through 1 simple function.

## Installation

```
npm i generate-uuid.js
```

## Example

After installing the package you can finally write some code!
First you'll have to require the package.

```js
const generateUUID = require("generate-uuid.js");
```

Then just run the function and it will generate a v4 UUID for you!

```js
generateUUID();
```

Now to demonstrate that it works you can log it.

```js
console.log(generateUUID());
```

Final code will look something like this:

```js
const generateUUID = require("generate-uuid.js");
console.log(generateUUID());
```

Final output will look something like this:

```
m9lfjxx9-ugz8-ra5g-lfpo-q95rhtp9aei5
```

Or this:

```
jw6y36zo-y0zh-gghl-tom2-583tlexeip4p
```

It's as easy as that!

## Help

If you need help or you've found a bug feel free to create an issue on [GitHub](https://github.com/MaestroDagan/generate-uuid/issues)
