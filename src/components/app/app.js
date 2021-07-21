import React, {Component} from 'react';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
//import ItemList from '../itemList';
//import CharDetails from '../charDetails';
import './app.css';


import {CharacterPage, BookPage, HousePage, BookItem, HouseItem} from '../pages'


export default class App extends Component {
    state = {
      hideFlag: true
    }

    onHideShow = () => {
      this.setState({
        hideFlag: !this.state.hideFlag
      })
    }

  render(){

    const showRandomCharacter = this.state.hideFlag ? <RandomChar interval = {5000} /> : null;
    const label = showRandomCharacter ? 'Hide' : 'Show';
    return (
      <Router>
        <div className = "app">
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {showRandomCharacter}
                        <Button onClick={this.onHideShow}>{label}</Button>
                    </Col>
                </Row>
                    <Route path= '/' render = {({match, location, history}) => {
                    //  console.log(match);
                    //  console.log(location);
                    //  console.log(history);
                      if(!location.key && location.pathname !== "/") {
                        //alert('ds');
                       return  <ErrorPage/>
                      }
                    } }/>
                    <Route path= '/' exact component = {() => (<span><h1>Welcome to GOT db!!</h1></span>)}/>
                    <Route path= '/characters' component = {CharacterPage}/>
                    <Route path= '/houses' exact component = {HousePage}/>
                    <Route path= '/houses/:id'  render = {
                      ({match, location, history}) => {
                        const {id} = match.params;
                      return <HouseItem houseId = {id}/>
                    }}/>
                    <Route path= '/books' exact component = {BookPage}/>
                    <Route path = '/books/:id' render = {
                      ({match, location, history}) => {
                        //   console.log(match);
                        //   console.log(location);
                        //   console.log(history);

                          const {id} = match.params;
                        //  console.log(match.params);
                        return <BookItem bookId = {id}/>;
                      }}/>
            </Container>
        </div>
        </Router>
    );
  }

}

const ErrorPage =() => {
  let history = useHistory();

 const handleClick = () => {
   history.push("/");
 }

 return (
   <button type="button" onClick={handleClick}>
     Go home
   </button>
 );
}

// const Home = () => {
//   return (
//
//   )
// }
