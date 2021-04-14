import axios from 'axios';
import React, { Component } from 'react'
import config from './config';

export default class Movie extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             movie:{}
        }
    }
    
   async  componentDidMount(){
        const singleMovieUrl=`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${config.api_key}`;
        await axios.get(singleMovieUrl).then(  (response)=>{
            this.setState({movie: response.data})
        })

    }
    render() {
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        const {poster_path,title,tagline,overview,homepage,release_date,budget}=this.state.movie;


        if(this.state.movie.title===undefined){
            return (
                <div className="movie">
            <h1>Loading...</h1>
            </div>
 )       }
        return (
            <div className="center movie">
                <img src={`${imageUrl}/${poster_path}`} alt={title} />
                <h4 >{title}</h4>
                <h6>{tagline}</h6>
                <div>{overview}</div>
                <div><span>Release Date:</span>{release_date}</div>
                <div><span>Budget:</span>{budget}</div>
            </div>
        )
    }
}
