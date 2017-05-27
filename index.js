/**
 * Created by hanifsudira on 5/27/17.
 */

var config = require('./config')();

http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});
