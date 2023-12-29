const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();

const Task = require("../models/task");

router.get("/task/company", auth, async (req, res) => {
  const skip = req.query.skip;
  try {
    const tasks = await Task.aggregate([
      {
        $sort: {
          owner: 1,
        },
      },
      {
        $match: { owner: { $exists: true } },
      },
      {
        $skip: parseInt(skip),
      },
      {
        $limit: 4,
      },

      // {
      //     $sea
      // }
    ]);
    // const tasks = await Task.find({ owner : { $exists: true }})
    res.status(201).send(tasks);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// router.delete('/task/:id',auth , async (req,res)=>{
//     const _id = req.params.id
//     try{
//         const task = await Task.findOneAndDelete({_id , owner:req.user._id})
//         if(!task){
//             return res.status(404).send("not found")
//         }
//         res.status(200).send(task)
//     }catch(e){
//         res.status(500).send(e.message)
//     }
// })

router.patch("/task/:id", auth, async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  const update = ["desc", "isactive"];
  const updates = Object.keys(req.body);
  const isVal = updates.every((upd) => {
    return update.includes(upd);
  });
  if (!isVal) {
    return res.status(400).send({ error: "Invalid update" });
  }
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send("not found");
    }
    updates.forEach((update) => {
      task[update] = req.body[update];
    });
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post("/task", async (req, res) => {
  console.log(req.body);
  // res.status(200).send(req.body)
  const task = new Task({ ...req.body }); //, owner:req.user._id
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
router.post("/task/company", auth, async (req, res) => {
  console.log(req.body);
  // res.status(200).send(req.body)
  const task = new Task({ ...req.body, owner: req.user._id }); //, owner:req.user._id
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
router.get("/tasks", auth, async (req, res) => {
  try {
    // const tasks = await Task.find({owner : req.user._id})
    match = {};
    if (req.query.isactive) {
      match.isactive = req.query.isactive === "true";
    }
    await req.user.populate({
      path: "tasks",
      match,
      options: {
        limit: 10,
        skip: 0,
      },
    });
    res.status(201).send(req.user.tasks);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
router.get("/task/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({
      _id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send("not found");
    }
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
router.post("/filter/tasks", async (req, res) => {
  try {
    let match = {};
    if (req.body.search == "search") {
      match = {
        $or: [
          {
            job_title: new RegExp(req.body.data, "i"),
          },
          {
            position: new RegExp(req.body.data, "i"),
          },
        ],
        //   job_title : new RegExp(req.body.job_title)
      };
    } else if (req.body.search == "filter") {
      if (!req.body.exp) {
        req.body.exp = 50;
      }
      if (!req.body.salary) {
        req.body.salary = 0;
      }
      if (!req.body.location) {
        req.body.location = "";
      }
      console.log(req.body.salary);

      match = {
        $and: [
          {
            exp: {
              $lt: parseInt(req.body.data.exp) + 1,
            },
          },
          // {
          //     salary: {
          //         $gt: parseInt(req.body.data.salary)+1
          //     }
          // } ,
          {
            job_location: new RegExp(req.body.data.location, "i"),
          },
          {
            date: new RegExp(req.body.data.date, "i"),
          },
        ],
      };
    } else {
      match = req.body.data;
    }
    const tasks = await Task.aggregate([
      {
        $match: match,
      },
      {
        $sort: {
          owner: 1,
        },
      },
      {
        $skip: req.body.skip,
      },
      {
        $limit: 12,
      },
      // {
      //     $sea
      // }
    ]);
    console.log(tasks);
    res.status(201).send(tasks);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
router.patch("/task/applicants/:id", auth, async (req, res) => {
  const _id = req.params.id;
  const update = ["applicants"];
  const updates = Object.keys(req.body);
  const isVal = updates.every((upd) => {
    return update.includes(upd);
  });
  if (!isVal) {
    return res.status(400).send({ error: "Invalid update" });
  }
  try {
    const task = await Task.findOne({ _id });
    if (!task) {
      return res.status(404).send("not found");
    }
    await task.addapplicants(req.user._id);
    // updates.forEach((update)=>{
    //     task[update] = req.body[update]
    // })
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
