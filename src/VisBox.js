import './App.css';
import cmd from './classes/classes';
import { useParams } from 'react-router-dom'
import Solutions from './solutions/solution';

function VisBox() {
    const { year, day } = useParams();
    var cCmd = new cmd(year, day)
    return (
        <div class="visBoxI">
            {cCmd.cmdGetter}
            <div class="visBoxView">
                <Solutions />
            </div>
        </div>
        
    )
}

export default VisBox;