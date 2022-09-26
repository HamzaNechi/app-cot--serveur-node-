import express from 'express';
import {readFileSync,readFile} from 'fs';

const app=express();
const hostname='127.0.0.1';
const port=process.env.PORT || 9090;

class Game{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

const getGames=(clb)=>{
    readFile("./SteamGames.json",(err,data)=>{
        if(err){
            clb(err)
        }
        const list=JSON.parse(data);
        const games=list.map((el)=>new Game(el.name,el.year));
        clb(null,games);
    })
}

app.get('/',(req,res)=>{
    res.send("Games Welcome!");
})

app.get('/game',(req,res)=>{
    getGames((err,data)=>{
        if(err){
            return res.status(404).send('data not found')
        }else{
            res.json(data);
        }
    })
})

app.get('/game/select/:year',(req,res)=>{
    const year=+(req.params.year);
    getGames((err,data)=>{
        if(err){
            return res.status(404).send('data not found')
        }
        const games=data.filter((el)=>el.year > year);
        res.status(200).json(games);
    })
})

app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})


