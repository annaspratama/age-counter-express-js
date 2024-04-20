class AgeInterface {
    // constructor() {
    //     console.log(this.prototype.hasOwnProperty('countAge'))
    //     if (!this.prototype.hasOwnProperty('countAge')) {
    //         throw new Error("Age must have count age method!")
    //     }
    // }
    constructor(birthDate, lastDate=null) {
        this.birthDate = birthDate
        this.lastDate = lastDate

        console.log(AgeInterface.prototype.hasOwnProperty('countAge'))

        if (!AgeInterface.prototype.hasOwnProperty('countAge')) {
            throw new Error("Age must have count age method!")
        }
    }

    // countAge = () => {
    //     throw new Error("Age must have count age function!")
    // }
}

export default AgeInterface
// module.exports = { AgeInterface }