export default class GotApi {
  constructor(){
    this._apiBase = 'https://anapioficeandfire.com/api';
  }

  _isSet = (data) => {
    if(data){
      return data;
    }else{
      return 'Unknown';
    }
  }

  _extractId = (url) => {
    const regExpId = /\/([0-9]*)$/;
    return url.match(regExpId)[1];
  }

  getR = async (item) => {
    const res = await fetch(`${this._apiBase}${item}`);
    if(!res.ok){throw new Error(`${res.status}`)}
    return await res.json();
  }

  getAllCharacters = async () => {
    const res = await this.getR('/characters?page=5&sizePage=10/');
    return res.map(this._transformCharacter);
  }

  getAllBooks = async () => {
    const res = await this.getR('/books?page=1&sizePage=20/');
    return res.map(this._transformBook);
  }

  getAllHouses = async () => {
    const res = await this.getR(`/houses/`);
    return res.map(this._transformHouse);
  }

  getCharacter = async (id) => {
    const res = await this.getR(`/characters/${id}`);
    return this._transformCharacter(res);
  }

  getBook = async (id) => {
    const res = await this.getR(`/books/${id}`);
    return this._transformBook(res);
  }

  getHouse = async (id) => {
    const house = await this.getR(`/houses/${id}/`);
    return this._transformHouse(house);
  }

  _transformCharacter = (char) => {
  //  console.log(char.name);
    return {
      id: this._extractId(char.url),
      name: this._isSet(char.name),
      gender: this._isSet(char.gender),
      born: this._isSet(char.born),
      died: this._isSet(char.died),
      culture: this._isSet(char.culture)
    }
  }

  _transformHouse = (house) => {
      return {
        id: this._extractId(house.url),
        name: this._isSet(house.name),
        region: this._isSet(house.region),
        words: this._isSet(house.words),
        titles: this._isSet(house.titles),
        overlord: this._isSet(house.overlord),
        ancestralWeapons: this._isSet(house.ancestralWeapons),
      }
  }

  _transformBook = (book) => {
      return {
        id: this._extractId(book.url),
        name: this._isSet(book.name),
        numberOfPages: this._isSet(book.numberOfPages),
        publiser: this._isSet(book.publiser),
        released: this._isSet(book.released),
      }
  }
}
