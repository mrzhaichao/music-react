import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './SongCard.styl'
class SongCard extends Component {
  render(){
    const {creator,id,imgUrl,title} = this.props.playlist;
    return (
      <div className="songcard">
        <div className="album-img">
          <Link to={{pathname:`/playlistinfo`,search:`?id=${id}`}}>
            <img src={imgUrl} alt="playlist-cover"/>
          </Link>
        </div>
        <p className="title">{title}</p>
        <p className="creator">by {creator}</p>
      </div>
    )
  }
}
export default SongCard;