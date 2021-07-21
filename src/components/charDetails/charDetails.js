import React, {Component} from 'react';
import './charDetails.css';

const Field = ({item, field, label}) => {
  return (
          <li className="list-group-item d-flex justify-content-between">
            <span className='term'>{label}</span>
            <span>{item[field]}</span>
          </li>)
}

export {
  Field
};


export default class CharDetails extends Component {
      state = {
        item: null
      }

      updateDetail = () => {
        const {getData, id} = this.props;
        if(!id){
          return
        }

        getData(id).then(item => {
            this.setState({
              item
            });
        })
      }

      componentDidMount(){
        this.updateDetail();
      }

      componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
          this.updateDetail();
        }
      }


    render() {

      if(!this.state.item){
        return (
          <span className='select-error'>Выберите из списка</span>
        )
      }
      const {item} = this.state;
        return (
            <div className="char-details rounded">
              <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                  {  React.Children.map(this.props.children, (child) => {
                  //  console.log(item.name);
                      return React.cloneElement(child, {item});
                  })}
                </ul>
            </div>
        );
    }
}
