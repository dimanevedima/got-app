import React, {Component} from 'react';
import './randomChar.css';

import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import GotApi from '../../services/gotService';
import PropTypes from 'prop-types';

export default class RandomChar extends Component {
  gotApi = new GotApi();

  state = {
    char: {},
    loading: true
  }

  static defaultProps = {
    interval: 3000
  }

  updateState = (char) => {
    this.setState({
      char,
      loading: false,
      error: false
    })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateChar = () => {
     const randId = Math.floor(Math.random() * 100 + 45);
    // this.gotApi.getCharacter(randId)
    //     .then(this.updateState)
    //         .catch(this.onError)
      this.gotApi.getAllCharacters()
          .then(char => {
              this.setState({
                length: char.length
              });
            //  console.log(this.state.length);
              return this.gotApi.getCharacter(randId)
                .then(this.updateState)
                    .catch(this.onError);
          })
  }
  componentDidMount () {
      this.updateChar();
      this.timerId = setInterval(this.updateChar, this.props.interval);
  }

  componentWillUnmount () {
      clearInterval(this.timerId);
  }

    render() {
        const {loading, error, char} = this.state;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? <View char = {char}/> : null;

        return (
            <div className="random-block rounded">
            {content}
            {errorMessage}
            {spinner}
            </div>
        );
    }
}

// RandomChar.propTypes  = {
//   interval: (props, propsName, componentName) => {
//     const value = props[propsName];
//     //console.log(value);
//   //  console.log(componentName);
//     if (typeof value === 'number' && !isNaN(value)) {
//       return null;
//     }
//     return new TypeError(`В ${componentName} переменная ${propsName} должна быть числом!!`);
//   }
// }

RandomChar.propTypes = {
  interval: PropTypes.number
}

const View = ({char}) => {

  const {name, gender, born, died, culture} = char;
  return (
    <>
    <h4>Random Character: {name}</h4>
    <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender </span>
            <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born </span>
            <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died </span>
            <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
            <span>{culture}</span>
        </li>
    </ul>
    </>
  )
}
