import './mission.css';

function MissionView() {
  return (
    <section className="container " id="about">
      <div className="row">
        <div className="col-lg-12">
          <div className=" text-center">
            <h1 className="mission-title" style={{ color: 'black' }}>
              MISSION
            </h1>
            <hr className="star-primary" />
            <p className="mission-statement">
              "Our company, Mindsurge Enterprise, creates innovative and
              user-friendly software applications to solve real-world issues or
              improve current solutions. We seek to become a strong player in
              the technological space and aim for more than satisfactory results
              when coming to our projects."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionView;
