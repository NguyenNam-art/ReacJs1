import React, { Component } from 'react';
export class Stepone extends Component{

    next = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.backStep();
    }
    render (){
        const { firstName, lastName, handleChange } = this.props;
        return(
            
            <div className="row mt-30">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                                <h3 className="panel-title">Multi Form</h3>
                        </div>
                        <div className="panel-body">
                            <form >
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text" className="form-control"
                                        value={firstName}
                                        placeholder="First Name"
                                        onChange={handleChange('firstName')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" 
                                        value={lastName}
                                        placeholder="Last Name"
                                        onChange={handleChange('lastName')}
                                    />
                                    
                                </div>
                                <button
                                    type="next" className="btn btn-primary"
                                    onClick = {this.next}
                                    >Next
                                </button> 
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}
export default Stepone








