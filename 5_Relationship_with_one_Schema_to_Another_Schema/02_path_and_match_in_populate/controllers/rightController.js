const Right = require('../models/rightModel');

module.exports = {
    create: async(req,res) => {
        const right = await Right.create({
            staff_id:req.body.staff_id,
            right:req.body.right
        });

        const rightData = await innerHeight.save();

        return res.send(rightData);
    },
    staffByRight: async(req,res) => {
        const rightData = await Right.find({_id:req.body.right_id})
        .populate({
            // path:'staff_id',

           // match:{name:'Aditya',email:'sandeep@gmail.com'} // esake doura us staff_id ka data show hoga jiska name Aditya hai

          //  match:{email:{$regex:'.*sandeep.*'}}

           // $regex:'.*sandeep.*' --> eska matlab hai ki jis email me sandeep hai uska data lakr do
           // $regex:'.*sand' --> eska matlab hai ki jis email me sand ho aur piche uske kuchh bhi ho uka data lakr do

           // match:{email:{$regex:'.*sandeep.*',$option:'i'}}

           // $option:'i' --> eske use se data chahe small letter me ho ya capital letter me ho use ak hi jaisa hi treet karega

           // match:{email:{$eq: 'kushal@gmail.com'}}

           // 

           // match: {email: {$ne: 'kushal@gmail.com'}}

           match: {age: {$gte: 56}} // jab age rahe to

        });

        res.send(rightData);
    }
}

// es tarah se api create karte hai