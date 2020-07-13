import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom'


class Main extends Component { //constructor is called only once only to initialize state of components, before DOM even mounts.
  constructor() { //in constructor we gonna intitialize state 
    super()
    //this.removePhoto = this.removePhoto.bind(this); //metode removePhoto mes kreipiames į 'this' iš funkcijos. kad 'this' nepointintų į funkciją, reikia teisingai subindinti, konstruktoriuje
  }

  // removePhoto(postRemoved) {
  //   console.log(postRemoved.description);
  //   this.setState((state) => ({
  //     posts: state.posts.filter(post => post !== postRemoved)
  //   }))
  // }

  // addPhoto(postSubmitted) {
  //   this.setState(state => ({
  //     posts: state.posts.concat(postSubmitted)
  //   }))
  // }

  //life cycle methods:
  //componentWillMount()  //like the constructor gets invoked before DOM is inserted  


  //ajax calls, asynchronous code should be executed right after DOM mounted
  //fetching data must be INSIDE componentDidMount

  //componentDidMount() 
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.posts);
  //   console.log(this.state);
  // }

  render() {  //when state is updated render method is called //render method should never execute asynchronous code. render should only be responsable for rendering UI based on props and states that were passed into it
    return <div>
      <Route exact path='/' render={() => (
        <div>
          <Title title={'PhotoWall'} />
          {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} /> */}
        </div>
      )} />

      {/* <Route path='/AddPhoto' render={({ history }) => (
        <AddPhoto onAddPhoto={(addedPost) => {
          this.addPhoto(addedPost);
          history.push('/');
        }} />
      )} /> */}
    </div>
  } // PhotoWall has 2 props: posts and method - removePhoto //when rendering only one component, can pass it through component
}


export default Main