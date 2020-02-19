import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
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
        <CommentForm postId={post._id} />
        <div className="comments">
            {post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id} />
            ))}
        </div>

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
