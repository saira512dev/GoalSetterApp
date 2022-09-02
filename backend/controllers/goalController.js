const asyncHandler = require('asyncHandler');

// @desc Get goals
// @route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message:"get goals"})
})


// @desc Set goals
// @route POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:"goals posted"})
})

// @desc Update goals
// @route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`goals updated at ${req.params.id}`})
})

// @desc DELETE goals
// @route DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`deleted ${req.params.id}`})
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}