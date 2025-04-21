const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/' , (req,res)=> {
    res.send('server is runninng!');
});

app.post('/signup' , (req,res)=>{
    const {username , email , password , dob } = req.body;
    if (!username){
        return res.status(400).json({error : 'username connot be empty'});     
    }
    if(!email){
        return res.status(400).json({error : 'email connot be empty'});
    }
    if(!password || password.length <8 || password.length > 16){
        return res.status(400).json({error : 'password connot be empty and must be between 8 and 16 characters'});
    }
    return res.status(200).json({
        message : 'user created successfully',
        user:{username , email , password , dob}
    });
});

app.listen(PORT , () =>{
    console.log(`server started on http:localhost:${PORT}`);
})