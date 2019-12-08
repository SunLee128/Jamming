import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNamechange = this.handleNamechange(this)
  }
  handleNamechange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNamechange} />
        < TrackList tracks={this.props.playlistTracks}onRemove={this.props.onRemove} isRemove={true}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist