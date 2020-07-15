//remove

export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index: index
  }
}

export default removePost