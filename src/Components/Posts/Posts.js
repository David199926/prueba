import React, { Component } from 'react'
//My components
import PostsPageBody from './PostsPageBody/PostsPageBody';
import PageNav from './PageNav/PageNav';

export default class Posts extends Component {
    render() {
        return (
            <div>
                <PageNav {...this.props}/>
                <PostsPageBody />
            </div>
        )
    }
}
