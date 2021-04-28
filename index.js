const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');


app.use(express.urlencoded());

app.use(cookieParser());


app.use(express.static('./assets'));

app.use(expressLayouts);
//extract style and scripts from subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScript',true);




app.use('/',require('./routes'));




//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');







app.listen(port,function(err){
    if(err){
        console.log(`error in running the server:${err}`);
    }
    console.log(`server is running on port:${port}`);        
 });























// const express=require('express');
// const app=express();
// const port=8000;
// const expressLayouts=require('express-ejs-layouts');

// app.views(expressLayouts);


// //set up the view engine
// app.set('view engine', 'ejs');
// app.set('views', './views');



// app.use('/',require('./routes'));






// app.listen(port,function(err){
//     if(err){
//         console.log(`error in running the server:${err}`);
//     }
//     console.log(`server is running on port:${port}`);        
//  });