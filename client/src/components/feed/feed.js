import React, { Component } from 'react';
import './feed.scss';

import Post from './post';

import Post from './post';

export default class Feed extends Component {

    constructor(props) {
        super(props);

        this.createPost = this.createPost.bind(this);
        this.generatePosts = this.generatePosts.bind(this);

        this.state = {
            posts: {}
        }
    }

    componentDidMount() {
        this.setState({
            posts: postData
        });
    }

    createPost(){
    }

    generatePosts(){
        const feedPosts = [];

        for(var i = 0; i < this.state.posts.length; i++) {
            feedPosts.push(
                <Post userName={this.state.posts[i].userName} postText={this.state.posts[i].postText} />
            );
        }

        return(
            feedPosts
        );
    }

    render() {
        return(
            <div className="feed">
                {this.generatePosts()}
            </div>
        );
    }
}