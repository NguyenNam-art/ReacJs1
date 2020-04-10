import React, { Component } from 'react';
import Stepone from './Stepone'
import Steptwo from './Steptwo'
import Stepthree from './Stepthree'
import Stepfour from './Stepfour'
export class Main extends Component{
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',

        //step 2
        email: '',
        conEmail :'',

        // step 3
        password : '',
        conPassword: '',

        //step 4
        isActive :false
    
};
    handleChange = input => e => {
        this.setState({[input]: e.target.type === 'checkbox' ? e.target.checked : e.target.value});
    }
    
    nextStep = (event) =>{
        console.log(this.state);
        const {step} = this.state
            this.setState({
                step : step + 1
            })
    }

    backStep = () =>{
        const {step} = this.state
        this.setState({
            step : step - 1
        })
    }
    showStep = () =>{
        const { step, firstName, lastName, email, conEmail, password, conPassword, isActive } = this.state;
        if(step === 1)
            return(<Stepone
                handleChange = {this.handleChange} 
                nextStep ={this.nextStep}
                backStep = {this.backStep}
                firstName = {firstName}
                lastName = {lastName}
            />);
        if(step === 2)
            return(<Steptwo
                handleChange = {this.handleChange} 
                nextStep = {this.nextStep}
                backStep = {this.backStep}
                email = {this.email}
                conEmail = {this.conEmail}
            />)
        if(step === 3)
            return (<Stepthree
                handleChange = {this.handleChange} 
                nextStep = {this.nextStep}
                backStep = {this.backStep}
                password ={this.password}
                conPassword = {this.conPassword}
            />)
         if(step === 4)
         return (<Stepfour
             handleChange = {this.handleChange} 
             nextStep = {this.nextStep}
             backStep = {this.backStep}
             isActive = {this.isActive}
         />)
            
    }
    render (){
        
        return(
            <>
                {this.showStep()}
            </>
            
        );
    }
}
export default Main