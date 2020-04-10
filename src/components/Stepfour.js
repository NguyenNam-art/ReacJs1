import React, { Component } from 'react';
export class Stepfour extends Component{

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.backStep();
    }
    render (){
        const { isActive, handleChange } = this.props;
        return(
            
            <div className="row mt-30">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                                <h3 className="panel-title">Multi Form</h3>
                        </div>
                        <div className="panel-body">
                            <form >
                                <ul>
                                    By clicking "Accept" I agree that:
                                    <li>I have read and accepted the User Agreement</li>
                                    <li>I have read and accepted the Privacy Policy</li>
                                    <li>I am at least 18 years old</li>
                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={isActive}
                                                onChange={handleChange('isActive')}
                                                 />
                                            Accept
                                        </label>
                                    </div>

                                </ul>
                                <button
                                    type="checkbox" className="btn btn-primary"
                                    onClick = {this.back}
                                    >Previous
                                </button> 
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}
export default Stepfour









