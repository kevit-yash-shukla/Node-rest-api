const express = require('express');
const router = express.Router();
const Course = require('../models/course');
require("dotenv").config();
router.get('/', async(req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.json(err);
    }
    //res.send("your courses are here .....");
})

router.get("/:courseId", async(req, res) => {
    const courseId = req.params.courseId;

    try {
        const c = await Course.findById(courseId);
        res.json(c);
    } catch (err) {
        res.json(err);
    }
})

router.post("/", async(req, res) => {
    const course = await Course.create(req.body);
    res.json(course);
})

router.delete("/:courseId", async(req, res) => {
    try {
        Course.remove({ _id: req.params.courseId });
    } catch (error) {
        res.json(err);
    }
})

router.put("/:courseId", async(req, res) => {
    const courseId = req.params.courseId;

    try {

        const course = await Course.updateOne({
                "_id": courseId
            },
            req.body
        )
        res.json(course);

    } catch (err) {
        res.json(err);
    }
})
module.exports = router;