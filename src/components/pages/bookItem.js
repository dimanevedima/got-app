import React, {Component} from 'react';
import CharDetails, {Field} from '../charDetails';
import GotApi from '../../services/gotService';


export default class BookItem extends Component {

  gotApi = new GotApi();

  render () {
    return (<CharDetails
                  id = {this.props.bookId}
                  getData = {this.gotApi.getBook}>

                  <Field field = 'name' label = 'Name'/>
                  <Field field = 'numberOfPages' label = 'Number Of Pages'/>
                  <Field field = 'publiser' label = 'Publiser'/>
                  <Field field = 'released' label = 'Released'/>
                  </CharDetails>)
  }
}
