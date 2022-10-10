import user from '../models/user.js';
import User from '../models/user.js';

export function signin(req, res) {
    user.findOne({
        username:req.body.username,
        password:req.body.password
    },(err,doc)=>{
        if(err){
            res.status(405).json(err)
        }else{
            res.status(200).json(doc)
        }
    })
}

export function signup(req, res) {
    const user = new User({
        username: req.body.username,
        password:req.body.password,
        wallet: req.body.wallet
    });
    user.save().then((doc)=>{
        res.status(201).json({
            username: doc.username,
            password: doc.password,
            wallet: doc.wallet
        })
    })
    .catch(err=>{
        res.status(405).json(err);
    })
}

export function putOnce(req, res) {
    const user = users.find(val => val.id == req.params.id);
    user.username = req.body.username;
    user.password = req.body.password;
    user.wallet = req.body.wallet;
    res.status(200).json(user);
}