import React, {Component} from 'react';
//import ItemList from '../itemList';
import RowBlock from '../rowBlock';
import ErrorMessage from '../errorMessage';
import CharDetails, {Field} from '../charDetails';
import GotApi from '../../services/gotService';
import {WithCharacters} from '../withData/withData';

export default class CharacterPage extends Component {

  gotApi = new GotApi();


  state = {
    selectedChar: null,
    error: false
  }

  componentDidCatch(){
    this.setState({
      error: true
    })
  }

  onSelectedChar = (id) => {
    this.setState({
      selectedChar: id
    })
  //  console.log(this.state.selectedChar);
  }



  render(){


    if (this.state.error) {
      return <ErrorMessage/>
    }

    // const left = (<ItemList
    //                onSelect = {this.onSelectedChar}
    //                getData = {this.gotApi.getAllCharacters}/>)

    const left = <WithCharacters
                      onSelect = {this.onSelectedChar}
                      />;

   const right = (<CharDetails
                  id={this.state.selectedChar}
                  getData = {this.gotApi.getCharacter}>
                     <Field field = 'name' label = 'Name'/>
                     <Field field = 'gender' label = 'Gender'/>
                     <Field field = 'born' label = 'Born'/>
                     <Field field = 'died' label = 'Died'/>
                     <Field field = 'culture' label = 'Culture'/>
                  </CharDetails>)

    return (
          <RowBlock
              left = {left}
              right = {right}/>
    )
  }
}
