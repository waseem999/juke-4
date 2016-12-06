
import Store from '../store';
import React, { Component } from 'react';
import setLyrics from "../action-creators/lyrics";
import Lyrics from "../components/lyrics";
import axios from 'axios';



export default class LyricsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({}, Store.getState());
        this.setArtist=this.setArtist.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.setSong=this.setSong.bind(this);
        this.state.artistSearch = "";
        this.state.songSearch = ""
    }


    setArtist(artist){
       this.setState({artistSearch: artist})
    }

    setSong(song){
        this.setState({songSearch: song})
    }

    fetchLyrics(artist, song){
        return function (dispatch, getState){
            axios.get(`/api/lyrics/${artist}/${song}`)
            .then(response => {
                dispatch(setLyrics(response.data.lyric))
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();

        if (this.state.artistSearch && this.state.songSearch){
            Store.dispatch(this.fetchLyrics(this.state.artistSearch, this.state.songSearch))
        }
    }




    componentDidMount(){
        this.unsubscribe = Store.subscribe(() => {
            this.setState(Store.getState())
        });
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render (){
        return (
            <div>
                <Lyrics setArtist={this.setArtist} setSong={this.setSong} songSearch={this.state.songSearch} artistSearch={this.state.artistSearch} 
                lyrics={this.state.lyrics.text} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

