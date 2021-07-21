import React, {Component} from 'react';
//import ItemList from '../itemList';
//import RowBlock from '../rowBlock';
import ErrorMessage from '../errorMessage';
//import CharDetails, {Field} from '../charDetails';
import GotApi from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import {WithBooks} from '../withData/withData';



 class BookPage extends Component {

  gotApi = new GotApi ();
  state = {
    bookId: null,
    error: false
  }
  componentDidCatch(){
    this.setState({
      error: true
    })
  }

  // onSelectBook = (bookId) => {
  //   this.setState({
  //     bookId
  //   })
  // }

  render(){

    if(this.state.error){
      return <ErrorMessage/>
    }
    // const {bookId} = this.state;
    //
    // const left = (<ItemList
    //               onSelect = {this.onSelectBook}
    //               getData = {this.gotApi.getAllBooks}
    //               />)
    //
    // const right = (<CharDetails
    //               id = {bookId}
    //               getData = {this.gotApi.getBook}>
    //
    //               <Field field = 'name' label = 'Name'/>
    //               <Field field = 'numberOfPages' label = 'Number Of Pages'/>
    //               <Field field = 'publiser' label = 'Publiser'/>
    //               <Field field = 'released' label = 'Released'/>
    //               </CharDetails>
    //             )


                  // <RowBlock left = {left} right = {right}/>


    return (

         <WithBooks
                       onSelect = {(itemId) => {
                          this.props.history.push(itemId)
                       } }
                       />

    )
  }
}

export default withRouter(BookPage);
