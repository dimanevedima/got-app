import React, {Component} from 'react';
//import ItemList from '../itemList';
//import RowBlock from '../rowBlock';
import ErrorMessage from '../errorMessage';
//import CharDetails, {Field} from '../charDetails';
import GotApi from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import {WithHouses} from '../withData/withData';

class HousePage extends Component {

  gotApi = new GotApi();

  state = {
    houseId: null,
    error: false
  }

  componentDidCatch(){
    this.setState({
      error: true
    })
  }

  // onHouseSelect = (houseId) => {
  //   this.setState({
  //     houseId
  //   })
  // }

  render(){

    if(this.state.error){
      return <ErrorMessage/>
    }

    // const {houseId} = this.state;
    //
    // const left = (<ItemList
    //                 onSelect = {this.onHouseSelect}
    //                 getData = {this.gotApi.getAllHouses}
    //                 />)
    // const right = (<CharDetails
    //                 id = {houseId}
    //                 getData = {this.gotApi.getHouse}>
    //                 <Field field = 'name' label = 'Name'/>
    //                 <Field field = 'region' label = 'Region'/>
    //                 <Field field = 'words' label = 'Words'/>
    //                 <Field field = 'titles' label = 'Titles'/>
    //                 <Field field = 'overlord' label = 'Overlord'/>
    //                 <Field field = 'ancestralWeapons' label = 'AncestralWeapons'/>
    //                 </CharDetails>)
    //                     <RowBlock left = {left} right = {right}/>

    return (

      <WithHouses
                      onSelect = {(itemId) => {
                        this.props.history.push(itemId)
                      }}
                      />
    )
  }
}

export default withRouter(HousePage);
