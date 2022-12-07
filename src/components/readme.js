import '../App.css'
import day1_2022 from '../readme/2022/day1'
import day2_2022 from '../readme/2022/day2';
import { useParams } from 'react-router-dom';

function Readme() {
    var retStr, retRead
    const { year, day } = useParams();
    if (year != null && day != null) {
        retStr = day + '_' + year;
        switch(retStr) {
            case 'Day1_2022':
                return day1_2022;
            case 'Day2_2022':
                return day2_2022;
            default:
                return retRead
        }
    }
    return retRead
}

export default Readme;