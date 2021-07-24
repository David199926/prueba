import React, { useEffect } from 'react';
import './PostsPageBody.scss';
// Material ui
import { Grid } from '@material-ui/core';
// My componentes
import AllPosts from './AllPosts/AllPosts';
import FavoritePosts from './FavoritePosts/FavoritePosts';
// redux
import { useDispatch } from 'react-redux';
import { fetchAllPosts } from '../../../redux/index';

const PostsPageBody = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPosts())
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

export default PostsPageBody
