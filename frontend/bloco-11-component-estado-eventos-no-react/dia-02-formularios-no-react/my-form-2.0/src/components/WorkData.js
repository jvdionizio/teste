import React from 'react'

class WorkData extends React.Component{
  
  constructor(){
   super();
   this.state = {
      jobAlert: false,
    }
    this.handleAlert = this.handleAlert.bind(this)
  }

  handleAlert() {
    if (!this.state.jobAlert){
      alert('Preencha com cuidado esta informação.')
      this.setState({
        jobAlert: true
      })
    }
  }

  render(){
    return (
      <fieldset>
        <label >
          Resumo do currículo<br />
          <textarea
          name='resume'
          maxLength='1000'
          required
          >
          </textarea>
        </label>
        <br />
        <label >
          Cargo<br />
          <textarea
          name='job'
          maxLength='40'
          onMouseEnter={this.handleAlert}
          required
          >
          </textarea>
        </label>
      </fieldset>
    );
  }
}

export default WorkData