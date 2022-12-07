import List from '../List'
import VisBox from '../VisBox';
import { useParams } from 'react-router-dom';
import '../App.css'
import Readme from './readme';

function Home() {
    var retDiv = (
        <div>
            <div class="intro">
                <Readme />
            </div>
            <div class="visBox"><VisBox /></div>
        </div>
    )
    const { year, day } = useParams();
    if (year == null || day == null) {
        if (year == null && day == null) {
            retDiv = (
                <div>
                    <div class="intro">
                        <p>Advent of Code is a yearly event where small coding problems are released everyday from december 1st until december 25th. This is my try on making a Visualization tool for my solutions to these problems</p>
                    </div>
                    <div class="visBox"><VisBox /></div>
                </div>
            )
        } else {
            retDiv = (
                <div>
                    <div class="intro">
                        <List/>
                    </div>
                    <div class="visBox"><VisBox /></div>
                </div>
            )
        }
    }
    return retDiv
}

export default Home;