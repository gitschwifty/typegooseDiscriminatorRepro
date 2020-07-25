# typegooseDiscriminatorRepro
minimum reproduction of issue with typegoose nested discriminators  

Issue solved: requires ES6 as tsconfig target, ES5 transpiles arrow function to
regular function

documentation for nested discriminators [here](https://typegoose.github.io/typegoose/docs/api/decorators/prop#discriminators)  
used the example for [Class] with minute changes (? & ! added to class members)
