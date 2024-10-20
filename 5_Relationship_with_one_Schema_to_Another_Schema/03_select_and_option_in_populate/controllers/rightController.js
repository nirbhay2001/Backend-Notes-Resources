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
           path: 'staff_id',
        //    select: "name" // eske doura name aur id ko dikhaya jayega
        // select: "name -_id" // esame id exclude ho jayega, eske doura kewal name ko dikhaya jayega

        select: ["name","email"], // eske doura name aur email aur id ko dikhaya jayega

        options:{
            // sort: { name: 1}
            sort: { name: -1},
            limit:2
        }

        });

        res.send(rightData);
    }
}

// es tarah se api create karte hai