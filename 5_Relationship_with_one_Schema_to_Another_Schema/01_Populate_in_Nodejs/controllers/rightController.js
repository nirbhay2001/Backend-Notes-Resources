const Right = require('../models/rightModel');

module.exports = {
    create: async(req,res) => {
        const right = await Right.create({
            staff_id:req.body.staff_id,
            right:req.body.right
        });

        const rightData = await right.save();

        return res.send(rightData);
    },
    staffByRight: async(req,res) => {
        const rightData = await Right.find({_id:req.body.right_id}).populate('staff_id'); // yaha per hum populate staff_id per lagaye hai,
        // populate ak path ko leta hai aur wah  us path per aane wala sare data ko fetch karke de deta hai
        // es case me path ke roop me staff_id ko de rahe hai, staff_id ak object hai es object per jitna bhi data hai populate usko fetch karke dikha dega 
        // yaha per hum populate ko as path string de rahe hai , eske ander hum object ko bhi pass kar sakte hai, jab kabhi bhi path k mannually pass karna ya checks lagna ho to es case me hum esme object ko hi pass kartehai 
        // ak populate ke ander aur populate ko pass kar skakte hai

        res.send(rightData);
    }
}

// es tarah se api create karte hai