import React from 'react';
import Data from './data.json';
import './style.css';

function Table() {

  return (
    <div className="table">
      <div className="thead">
        <p>
          <i>Rank</i>
        </p>
        <p>
          <i>Name</i>
        </p>
        <section className="track hii">
          <p>
            <i>Track1</i>
          </p>
          <p>
            <i>Track2</i>
          </p>
        </section>
      </div>
      <div className="tbody" id="tbody">
        {Data.map((user) => {
          if (user['Enrolment Status']) {
            return (
              <div className="row" id="row">
                <p>
                  <i>#</i>
                </p>
                <p className="stdname" id="stdname">
                  <i>{user['Student Name']}</i>
                </p>
                <section className="track">
                  <p className="track1" id="track1">
                    <i>{user['# of Skill Badges Completed in Track 1']}</i>
                  </p>
                  <p className="track2" id="track2">
                    <i>{user['# of Skill Badges Completed in Track 2']}</i>
                  </p>
                </section>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}


  
export default Table;
