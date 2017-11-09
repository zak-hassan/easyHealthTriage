import React, { Component } from "react";
import { tableConfig } from '../tableConfig.js';
import Table from '../pf-lib/table/TableView.jsx';

export class second_page extends Component {
  render() {
     return (
      <div className="col col-cards-pf container-cards-pf fader">
        <div className="cards col-xs-10 col-md-8 ">
          <div className="card-pf card-pf-accented">
            <div className="card-pf-heading c">
              <h2 className="card-pf-title">
                Patients Waiting
              </h2>
              <div className="card-pf-footer">
                <Table config={tableConfig}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default second_page