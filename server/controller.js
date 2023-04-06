let answers = []


module.exports = {
   
    saveAnswer: (req,res) => {
        answers.push(req.body)
        console.log(req.body)
        res.status(200).send(answers)
        
    },
    
    deleteAnswer: (req,res) => {
        let index = req.params.index
        console.log(index)
        answers.splice(index,1)
        res.status(200).send(answers)
    },

    seeAnswers: (req, res) => {
        const answers =[
            "Yes",
            "No",
            "Maybe",
            "I don't see why not",
            "Never ever ever",
            "Of course...not",
            "Not in your lifetime",
            "Duh",
            "I highly doubt it",
            "It's possible, but no prolly not",
            "That's the way of the road bubs"
        ]
        res.status(200).send(answers)
    },
}