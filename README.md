# typegooseDiscriminatorRepro
minimum reproduction of issue with typegoose nested discriminators  
`npm i` to install deps

Issue solved: requires ES6 as tsconfig target, ES5 transpiles arrow function to regular function.  `npm run es5` to see error thrown, `npm run es6` for no errors.

documentation for nested discriminators [here](https://typegoose.github.io/typegoose/docs/api/decorators/prop#discriminators)  
used the example for [Class] & the passing nestedDiscriminators tests with minute changes (brevity, ? & ! added to class members)
