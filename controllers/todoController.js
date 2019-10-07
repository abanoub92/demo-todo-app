module.exports = function(app){

    //Get the data from the server
    app.get('/todo', function(req, res){
        res.render('todo');
    });

    //Post data to the server
    app.post('/todo', function(req, res){

    });

    //Delete an item of data on the server
    app.delete('/todo', function(req, res){

    });
};