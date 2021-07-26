import React, { useEffect } from 'react';
import './PostsPageBody.scss';
// Material ui
import { Grid } from '@material-ui/core';
// My componentes
import AllPosts from './AllPosts/AllPosts';
import FavoritePosts from './FavoritePosts/FavoritePosts';
// redux
import { connect } from 'react-redux';
import { fetchPosts, fetchUserFavs } from '../../../redux/index';

const PostsPageBody = ({ userId, all, fetchAllPosts, fetchUserFavs }) => {

    useEffect(() => {
        // call API for posts
        fetchAllPosts();
        // bring user favs from db
        fetchUserFavs(userId);
        
    }, []);

    return (
        <div className="pageBody">
            <div className="pageContent">
                {/* titlo de la pagina */}
                <h1>Lista de <span className="posts">Post's</span></h1>
                <Grid container spacing={3}>
                    {/* lista con todos los posts */}
                    <Grid item xs={12} md={6}>
                        <AllPosts/>
                    </Grid>
                    {/* lista con posts favoritos */}
                    <Grid item xs={12} md={6}>
                        <FavoritePosts/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userId: state.user.userId,
    all: state.posts.all.data,
})
const mapDispatchToProps = (dispatch) => ({
    fetchAllPosts: () => dispatch(fetchPosts()),
    fetchUserFavs: (userId) => dispatch(fetchUserFavs(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageBody)
