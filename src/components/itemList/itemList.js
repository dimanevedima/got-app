import React from 'react';
import './itemList.css';
import PropTypes from 'prop-types';
//import GotApi from '../../services/gotService';
//import Spinner from '../spinner';



const ItemList = ({data, onSelect}) =>  {

  const renderItems = (arr) => {
    return arr.map(item => {
    //  console.log(item.name);
      const {id} = item;
    //  console.log(id);
      return (
        <li
        key = {id}
        onClick = {()=> onSelect(id)}
        className="list-group-item">
            {item.name}
        </li>
      )
    })
  }

    //  const {data} = this.props;
      const items = renderItems(data);
      //  console.log(items);

        return (
            <ul className="item-list list-group">
              {items}
            </ul>
        );

}

ItemList.defaultProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func
}

export default ItemList;

// const f = (a) => {
//   console.log(a);
//   return (b) => {
//     console.log(a + b);
//   }
// }
//
// f(1)(2);
