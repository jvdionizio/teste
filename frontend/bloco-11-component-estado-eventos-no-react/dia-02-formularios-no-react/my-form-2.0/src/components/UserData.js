import React from 'react'
import BrazilianStates from './BrazilianState';
import statesBrazil from '../data/statesBrazil'


class UserData extends React.Component{
  render(){
    return (
      <fieldset>
        <label >
  
          <input 
          title='name'
          type='text'
          placeholder='Digite seu nome'
          maxLength='50'
          required
          />
        </label>
        <br />
        <label >
    
          <input 
          title='mail'
          type='mail'
          placeholder='Digite seu Email'
          maxLength='50'
          required
          />
        </label>
        <br/>
        <label >

          <input 
          title='CPF'
          type='text'
          placeholder='Digite seu cpf'
          maxLength='11'
          required
          />
        </label>
        <br/>
        <label >
          <input 
          title='adress'
          type='text'
          placeholder='Digite seu endereço'
          maxLength='200'
          pattern="[a-zA-Z0-9]+"
          required
          />
        </label>
        <br/>
        <label >
      
          <input 
          title='city'
          type='text'
          placeholder='Digite sua cidade'
          maxLength='28'
          required
          />
        </label>
        <br/>
        <label >
        Estado
          <select>
            {
              statesBrazil.values.map((value, index) => {
                return (
                  <BrazilianStates value={statesBrazil.titles[index]} title={value} key={index}/>
                );
              })
            }
          </select>
          <br/>
        </label>
        <label >
          Complemento<br />
          <label forHtml='casa'>
            <input type='radio' id='casa' name='complement' value='casa' />
          Casa
          </label><br />
          <label forHtml='apto'>
            <input type='radio' id='apto' name='complement' value='apartamento' />
          Apartamento
          </label><br />
        </label>
      </fieldset>
    );
  }
}

export default UserData