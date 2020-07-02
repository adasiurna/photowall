import React from 'react';
import PropTypes from 'prop-types'

function Photo(props) {  //stateless function, with arguments
  const post = props.post;
  return <figure className="figure">
    <img className="photo" src={post.imageLink} alt={post.description} />
    <figcaption><p>{post.description}</p></figcaption>
    <div className="button-container">
      <button onClick={() => {
        props.onRemovePhoto(post)
      }}>Remove</button>
    </div>
  </figure>
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photo //export function as a component

//main idea - if all your component has is a render method, you can save place with a function.
//that function takes props as argument and returns
//props are considered to be immutable data it is not meant to change over time
//state represents data that can be changed over time