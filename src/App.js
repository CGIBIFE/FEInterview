import React, { Component } from 'react';
import './App.css';
import PostCard from './components/postCard'
class App extends Component {
    constructor(){
        super()
        this.state ={
            post:[],
            filteredPosts:[]
        }
    }
    componentDidMount() {
        fetch('Api/data.json').then((data) => {
            return data.json()
        }).then((json) => {
            this.setState({post:json})
        })
    }

    showRetweetsOnly = () => {
        console.log()
    }

    render() {
    return (
      <div className="container">
          <div className="leftPanel">
              <h3>Tweet Filters</h3>
              <div className="searchBox"> <input placeholder="@name-handel"/></div>
              <h4>Show only</h4>
              <div className="radioButton"><input type="radio" id="contactChoice2" name="contact" value="phone" /><label htmlFor="contactChoice2">All tweets</label></div>
              <div className="radioButton"><input type="radio" id="contactChoice1" name="contact" value="email" /><label htmlFor="contactChoice1">Retweeted tweets</label></div>
          </div>
          <div className="content">
          {this.state.post.map(post => (
              <PostCard text={post.text} key={post.id} user={post.user} userMentioned={post.entities.user_mentions}/>
          ))}
          </div>
      </div>
    );
  }
}

export default App;
