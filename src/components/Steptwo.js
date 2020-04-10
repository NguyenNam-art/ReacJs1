import React, { Component } from 'react';
export class Steptwo extends Component{
    next = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.backStep();
    }
    render (){
        const { email, conEmail, handleChange } = this.props;
        return(
            <div className="row mt-30">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                                <h3 className="panel-title">Multi Form</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.onHandleSubmit}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email" className="form-control" 
                                        value={email}
                                        placeholder="text@gmail.com"
                                        onChange={handleChange('email')}
                                        />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Email</label>
                                    <input 
                                        type="email" className="form-control" 
                                        value={conEmail}
                                        placeholder="Confirm Email"
                                        onChange={handleChange('conEmail')}
                                    />
                                </div>
                                <button
                                    type="back" className="btn btn-primary"
                                    onClick = {this.back}
                                    >Previous
                                </button>&nbsp;
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
export default Steptwo








