const exportsFromFileB = require('./fileB') // note the relative file path
exportsFromFileB(); 

// require('./fileB')
// require('./fileB') // not a typo - actually require it twice!
const exportsFromSnippet1 = require('./snippet1')