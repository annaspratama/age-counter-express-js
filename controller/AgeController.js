import Age from "../service/age-service.js";

class AgeController {

    counter = (req, res) => {
        const birthDate = req.body.hasOwnProperty("birthdate") ? req.body.birthdate : null
        const lastDate = req.body.hasOwnProperty("lastdate") ? req.body.lastdate : null

        if (birthDate) {
            let age = new Age(birthDate, lastDate)
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