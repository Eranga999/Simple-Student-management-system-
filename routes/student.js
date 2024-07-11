
//express package eke router kiyna function ek import krgnnw
const router = require("express").Router();
//model kiyn eke student function ek import krgnnw
let student = require("../models/student");




//create 
http://localhost:8070/student/add
router.route("/add").post((req,res)=>{

    // front end eke (form ek submit krhm) request eke body eke ena name ek gnn tma body.name danne
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const registration_num = Number(req.body.registration_num);
    const address = req.body.address;

//object ekk hdnw uda gtha student variable eken 
const newstudent = new student({

    name,
    age,
    gender,
    registration_num,
    address,
})
//save und kiyl check krn function ek.eka front ekt response ekk widiht ywnw

    newstudent.save().then(()=>{
        res.json("student added")
    }).catch((err)=>{
            console.log(err);
    })
})





//read
http://localhost:8070/
router.route("/").get((req,res)=>{

    student.find().then((student)=>{
        res.json(student)
    }).catch((err)=>{
        console.log(err)
    })


})




//update

http://localhost:8070/student/update/5788tyugjhk

//async function ek dmmahm multiple works krnn puluwn uda kr ewge ekai krnn puluwn multiple ew krnn giyoth crash wenw
router.route("/update/:id").put(async(req,res)=>{
    //request eke ena parameter id ek catch krn ek mekn krnne
    let userId = req.params.id;

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const registration_num = Number(req.body.registration_num);
    const address = req.body.address;

    //uda thiyna ekma simple widiht write krnn puluwn ekta kiynne d structure kiyl phala thiyne ek
    //const {name, age , gender , registration_num ,address} = req.body;

    const updatestudent = {
        name,
        age,
        gender,
        registration_num,
        address
    }

    const update = await student.findByIdAndUpdate(userId , updatestudent)
    .then(() =>{
    //frontend ekt update una kiyla response ekk ywn widih /eke status eke code thiynw 404 kiyne not found,200 kiynne sucssesfull kiyl 
    res.status(200).send({status : "User updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "error with updating data"});
    })


})



//delete
http://localhost:8070/student/delete/5788tyugjhk
router.route("/delete/:id").delete(async (req,res)=>{
    let userid = req.params.id;

    await student.findByIdAndDelete(userid).then(()=>{
        res.status(200).send({status: "user deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error: err.message});
    })
})





module.exports = router;

