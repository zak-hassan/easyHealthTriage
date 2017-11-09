import React, { Component } from "react";

export class main_page extends Component {

  render() {
    
    var cardFooterStyle= { 
        padding : '40px'
      };
    return (
      <div className="col col-cards-pf container-cards-pf fader">
        <div className="cards col-xs-10 col-md-8">
          <div className="card-pf card-pf-accented">
            <div className="card-pf-heading">
              <h2 className="card-pf-title">
                Patient Checkin:
              </h2>
              <div className="card-pf-footer"  style={cardFooterStyle}>
                <form>
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  First Name:
                </label>                
                  <div className="inputField" className="col-sm-7 wordwrapper"> 
                    <input type="text" name="firstname" />
                  </div>
                <br />
                 <label className="col-sm-4 control-label">
                  Last Name:
                </label>
                  <div className="inputField" className="col-sm-7 wordwrapper"> 
                    <input type="text" name="lastname" />
                  </div>
                <br />
                <label className="col-sm-4 control-label">
                Condition:
                </label>
                  <div className="inputField" className="col-sm-7 wordwrapper"> 
                  <input type="text" name="condition" />
                  </div>
                <br />
                <label className="col-sm-4 control-label">
                Severity: 
                </label>
                  <div className="inputField" className="col-sm-7 wordwrapper"> 
                <select>
                  <option value="1">lowest</option>
                  <option value="2">medium</option>
                  <option value="3">high</option>
                  <option value="4">extremly high</option>
                  <option value="5">highest</option>
                </select>
                </div>

                 <div>
                    <button className="btn btn-primary">Save</button>
                 </div>


              
                
              
               
                </div>
              </form>

 

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default main_page