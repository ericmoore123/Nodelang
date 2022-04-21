// Nav helper function
const path = require('path');

// Gives us the path to our root directory
module.exports = path.dirname(require.main.filename); // Removes need for annoying "__dirname" 