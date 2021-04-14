import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import config from './config';


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieList: []
        }
    }


    async componentDidMount() {
        const noewPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
        await axios.get(noewPlayingUrl).then((response) => {
            this.setState({
                movieList: response.data.results
            })
        })


    }
    render() {
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        const movieGrid = this.state.movieList.map((movie, i) => {
            return (<div key={i} className="col s12 m6 l3 xl3">
                <Link to={`/movie/${movie.id}`}>

                    <img className="movie-img" src={`${imageUrl}${movie.poster_path}`} />
                </Link>

            </div>)
        })

        if(this.state.movieList.length===0){
            return <div className="movie">
                    <h1>Loading...</h1>
            </div>
        }
        return (
            <>
                <h2 className="center">Movies</h2>
                
                <div className="row center">

                    {movieGrid}
                </div>
            </>
        )
    }
}
