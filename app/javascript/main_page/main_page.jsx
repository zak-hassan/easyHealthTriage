import React, { Component } from "react";

export class main_page extends Component {

  render() {
    let pageContent = <p>This is the first page!</p>;
    return (
      <div className="col col-cards-pf container-cards-pf fader">
        <div className="cards col-xs-10 col-md-8 ">
          <div className="card-pf card-pf-accented">
            <div className="card-pf-heading c">
              <h2 className="card-pf-title">
                Main Page!
              </h2>
              <div className="card-pf-footer">
                {pageContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default main_page