const expres = require("express")

const app = expres();

console.log("Hello World!!!");
app.get('/',
    function(req, res){
        res.send("Hello World!!! How are you Doing?");
    }
);
app.get('/izhar',
    function(req, res){
        res.send("Welcome Back Izhar!!! Apko Dek K Khushi Hui");
    }
);
app.get('/izhar/traveler2020',
    function(req, res){
        res.send("Welcome Back Izhar Ul Haq The Traveler!!! 2023");
    }
);
app.get('/izhar/:id',
    function(req, res){
        const id = req.params.id
        res.send("Welcome Back " +id);
    }
);

app.listen(9000, 
    function(req,res){
        console.log("Running . . .");
    }
    );