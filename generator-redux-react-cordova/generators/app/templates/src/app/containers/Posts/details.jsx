import React, { PropTypes } from 'react';
import { Block, Subheader } from '../../components';

const PostDetails = ({ post }) => (
  <div>
    <Subheader
      title={ (post && `Post #${post.id}`) || 'Loading...'}
    />
    { post &&
      <Block
        title={post.title}
        text={post.body}
      />
    }
  </div>
);

PostDetails.propTypes = {
  post: React.PropTypes.object,
};

export default PostDetails;
