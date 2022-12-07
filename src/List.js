import { useParams } from "react-router-dom";

function List() {
    const { year } = useParams();
    var retList
    switch(year) {
        case '2022':
            retList = (
                <ul class="calender">
                    <li><a href="/2022/Day1">Day 1</a></li>
                    <li><a href="/2022/Day2">Day 2</a></li>
                    <li><a href="/2022/Day3">Day 3</a></li>
                    <li><a href="/2022/Day4">Day 4</a></li>
                    <li><a href="/2022/Day5">Day 5</a></li>
                    <li><a href="/2022/Day6">Day 6</a></li>
                </ul>
            );
            break;
        case '2021':
            break
        default:
            break
    }
    if (retList == null) {
        retList = <p>Sorry there is no visualization data for this year yet</p>
    }
    return retList
}

export default List;