import { useParams } from "react-router-dom";
import '../App.css'
import Day12022Solutions from "./2022/day1";
import Day22022Solutions from "./2022/day2";
/* import day3_2022_Solutions from "./2022/day3";
import day4_2022_Solutions from "./2022/day4";
import day5_2022_Solutions from "./2022/day5"; */
import Day62022Solutions from "./2022/day6";


function Solutions() {
    const { year, day } = useParams();
    var retStr, retVis = <p></p>
    if (year != null && day != null) {
        retStr = day + '_' + year;
        switch(retStr) {
            case 'Day1_2022':
                retVis = <Day12022Solutions />;
                break
            case 'Day2_2022':
                retVis = <Day22022Solutions />;
                break
            /* case 'Day3_2022':
                retVis = day1_2022_Solutions;
                break
            case 'Day4_2022':
                retVis = day2_2022_Solutions;
                break
            case 'Day5_2022':
                retVis = day1_2022_Solutions;
                break */
            case 'Day6_2022':
                return <Day62022Solutions />;
            default:
                return retVis
        }
    }
    return retVis
}

export default Solutions;