import './mission.css';
import MovingText from 'react-moving-text';

function MissionView() {
    return (
        <div className='app'>
            <span style={{color: "white"}} className="text-center">
                <MovingText
                    type="unfold"
                    duration="2000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                        <p className="mission-title">MISSION</p>
                </MovingText>
                <p className="mission-statement">
                    "Our company, Mindsurge Enterprise, creates innovative and user-friendly software applications to solve real-world issues or improve current solutions. 
                    We seek to become a strong player in the technological space and aim for more than satisfactory results when coming to our projects."
                </p>
            </span>
        </div>
        )
}

export default MissionView;