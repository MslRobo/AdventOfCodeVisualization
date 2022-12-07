class cmd {
    constructor(year, day) {
        this.year = year
        this.day = day
        this.yearHref = '/' + year
        this.dayHref = '/' + year + '/' + day
    }

    get cmdGetter() {
        return this.cmdPromt()
    }

    cmdPromt() {
        var retStr = <p className="cmdHref">C: <a href="/">AoC</a>&gt;</p>
        if (this.day == null || this.year == null) {
            if (this.year != null) { retStr = <p className="cmdHref">C: <a href="/">AoC</a>/<a href='/'>{this.year}</a>&gt;</p>}
        } else {
            retStr = <p className="cmdHref">C: <a href="/">AoC</a>/<a href={this.yearHref}>{this.year}</a>/<a href={this.dayHref}>{this.day}</a>&gt;</p>
        }
        return retStr
    }
}

export default cmd;