import React from 'react';
import JSONDATA from './data.json';
import { useState } from 'react';
import './style.css';

function SearchandTable() {
  const [searchName, setSearchName] = useState('');
  return (
    <div className="table">
      <input
        type="text"
        className="search"
        placeholder="Search...."
        onChange={(event) => {
          setSearchName(event.target.value);
        }}
      />
      <section className="thead row">
        <p>
          <i>Rank</i>
        </p>
        <p>
          <i>Name</i>
        </p>
        <section className="track hii">
          <p>
            <i>Track 1</i>
          </p>
          <p>
            <i>Track 2</i>
          </p>
        </section>
      </section>
      <div className="tbody">
        {JSONDATA.filter((val) => {
          if (searchName == '') {
            return val;
          } else if (
            val['Student Name'].toLowerCase().includes(searchName.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="user row" key={key} style={{ display: 'flex' }}>
              <p>
                <i>#</i>
              </p>
              <p className="stdname" id="stdname">
                <i>{val['Student Name']}</i>
              </p>
              <section className="track">
                <p className="track1" id="track1">
                  <i>{val['# of Skill Badges Completed in Track 1']}</i>
                </p>
                <p className="track2" id="track2">
                  <i>{val['# of Skill Badges Completed in Track 2']}</i>
                </p>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchandTable;
