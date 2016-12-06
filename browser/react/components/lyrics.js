import React from 'react';

const Lyrics = (props) => {

    const artistChange = (e) => {
        props.setArtist(e.target.value)
        }

      const songChange = (e) => {
        props.setSong(e.target.value)
        }
    
    return (
        <div>
            <form className="form-group" onSubmit={props.handleSubmit}>
                <input type="text" name="artistsearch" value={props.artistQuery} placeholder="Artist" onChange={artistChange}/>
                <input type="text" name="songsearch" value={props.songQuery} placeholder="Song" onChange={songChange}/>
                <button type="submit" className="btn-success">Search Lyrics</button>
            </form>
            <div>
                <pre>{props.lyrics}</pre>
            </div>
        </div>
    )
}

export default Lyrics;