import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    favorites: state.favoritesReducer.favorites,
    displayFavorites: state.favoritesReducer.displayFavorites     
})

const FavoriteMovieList = (props) => {
    const {favorites, displayFavorites} = props
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            displayFavorites? favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        : null}
    </div>);
}


export default connect(mapStateToProps)(FavoriteMovieList);