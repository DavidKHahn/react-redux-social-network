import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost, match.params.id]);

    return loading || post === null ? <Spinner /> : <Fragment>
        <Link to='/posts' className='btn'>
            Back To Posts
        </Link>
    {/* showActions removes the buttons, likes added features */}
        <PostItem post={post} showActions={false} />
    </Fragment>
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)
