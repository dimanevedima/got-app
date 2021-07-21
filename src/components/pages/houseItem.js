import React, {Component} from 'react';
import CharDetails, {Field} from '../charDetails';
import GotApi from '../../services/gotService';

export default class HouseItem extends Component {

  gotApi = new GotApi();

  render () {
    return (<CharDetails
                  id = {this.props.houseId}
                  getData = {this.gotApi.getHouse}>

                  <Field field = 'name' label = 'Name'/>
                  <Field field = 'region' label = 'Region'/>
                  <Field field = 'words' label = 'Words'/>
                  <Field field = 'titles' label = 'Titles'/>
                  <Field field = 'overlord' label = 'Overlord'/>
                  <Field field = 'ancestralWeapons' label = 'AncestralWeapons'/>
                  </CharDetails>)
  }
}
