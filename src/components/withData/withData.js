import React, {Component} from 'react';
import GotApi from '../../services/gotService';
import Spinner from '../spinner';
import ItemList from '../itemList';


const WithData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,
      loading: true
    }

    updateState = (data) => {
      this.setState({
        data,
        loading:false
      })
    }

    updateList = () => {

      getData()
        .then(this.updateState)
    }

    componentDidMount () {
      this.updateList();
    }

    render(){
      const {loading, data} = this.state;
      if(loading){
        return <Spinner/>
      }
      return <View {...this.props} data = {data} />
    }
  };
}

const {getAllCharacters, getAllBooks, getAllHouses} = new GotApi();
const WithCharacters = WithData(ItemList, getAllCharacters);
const WithHouses = WithData(ItemList, getAllHouses);
const WithBooks = WithData(ItemList, getAllBooks);


export {WithCharacters, WithHouses, WithBooks};
