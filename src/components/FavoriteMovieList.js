import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

const mapStateToProps = (state) => ({
    favorites: state.favoritesReducer.favorites,
    displayFavorites: state.favoritesReducer.displayFavorites     
})

const FavoriteMovieList = (props) => {
    const {favorites, displayFavorites, removeFavorite} = props

    const handelRemoveFavorite = (id) => {
        removeFavorite(id);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            displayFavorites? favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => handelRemoveFavorite(movie.id)}><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        : null}
    </div>);
}


export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);