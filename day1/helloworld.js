/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        //storing args length in variable
        //let args_len = args.length; (commented out it's more faster without it)
        if (args.length <= 0 || args.length <=10){
            return ("Hello World");
        }
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */