import Age from "../service/age-service.js";

class AgeController {

    counter = (req, res) => {
        var birthDate = req.body.hasOwnProperty("birthdate") ? req.body.birthdate : null
        var lastDate = req.body.hasOwnProperty("lastdate") ? req.body.lastdate : null

        if (birthDate) {
            let age = new Age(new Date(1992, 10, 10))
            res.status(200).json(age.countAge())
            res.end()
        } else {
            res.status(400).json({
                error: "Field birthdate could not be empty."
            })
            res.end()
        }
    }
}

export default AgeController