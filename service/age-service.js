class Age {
    constructor(birthDate, lastDate=null) {
        this.birthDate = birthDate
        this.lastDate = lastDate
    }

    countAge = () => {
        const now = new Date();
        const yearNow = now.getFullYear();
        const monthNow = now.getMonth() + 1;
        const dayNow = now.getDate();

        const birthYear = this.birthDate.getFullYear();
        const birthMonth = this.birthDate.getMonth() + 1;
        const birthDay = this.birthDate.getDate();

        let yearAge = yearNow - birthYear;
        let monthAge = monthNow - birthMonth;
        let dayAge = dayNow - birthDay;

        if (monthNow < birthMonth || (monthNow === birthMonth && dayNow < birthDay)) {

            yearAge--;
            
            if (monthNow < birthMonth) {
                monthAge = (12 - birthMonth) + monthNow;
            } else if (monthNow === birthMonth && dayNow < birthDay) {
                monthAge--;
                dayAge = new Date(yearNow, monthNow - 1, 0).getDate() - birthDay + dateNow;
            }
        }

        return {
            tahun: yearAge,
            bulan: monthAge,
            hari: dayAge
        }
    }
}

export default Age