import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  // initialize state
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // this.setState is the only way we will change the state
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    // best to use for unique key is ID, but in lieu of that we can use the album.title here
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log('this.state', this.state);

    return (
      <ScrollView> 
        {this.renderAlbums()}
      </ScrollView>
    );
  }  
}

export default AlbumList;

