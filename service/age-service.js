class Age {
    constructor(birthDate, lastDate=null) {
        this.birthDate = birthDate
        this.lastDate = lastDate
    }

    countAge = async () => {

        const result = new Promise((resolve, reject) => {
            var now = new Date()
            var birthDate = new Date(this.birthDate)
            
            if (this.lastDate) now = new Date(this.lastDate)

            const yearNow = now.getFullYear()
            const monthNow = now.getMonth() + 1
            const dayNow = now.getDate()

            const birthYear = birthDate.getFullYear()
            const birthMonth = birthDate.getMonth() + 1
            const birthDay = birthDate.getDate()

            let yearAge = yearNow - birthYear
            let monthAge = monthNow - birthMonth
            let dayAge = dayNow - birthDay

            if (monthNow < birthMonth || (monthNow === birthMonth && dayNow < birthDay)) {

                yearAge--
                
                if (monthNow < birthMonth) {
                    monthAge = (12 - birthMonth) + monthNow
                } else if (monthNow === birthMonth && dayNow < birthDay) {
                    monthAge--
                    dayAge = new Date(yearNow, monthNow - 1, 0).getDate() - birthDay + dateNow
                }
            }

            resolve({
                year: yearAge,
                month: monthAge,
                day: dayAge > 0 ? dayAge : 0
            })
        })

        return result
    }
}

export default Age