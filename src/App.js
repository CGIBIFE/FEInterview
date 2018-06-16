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
            this.setState({post:json,filteredPosts:json})
        })
    }

    findHandel = (event) => {
        const value = event.target.value.toLowerCase();
        let relevantHandles = [];
        if(value.indexOf('@') !== -1) {
            relevantHandles = this.state.post.filter(x => x.user.screen_name.toLowerCase().includes(value.replace('@','')))
        }else{
            relevantHandles = this.state.post.filter(x => x.user.name.toLowerCase().includes(value))
        }
        this.setState({filteredPosts:relevantHandles})
    }

    showRetweetsOnly = () => {
        const retweetedTweets = this.state.post.filter(x => x.retweeted_status)
       this.setState({filteredPosts:retweetedTweets})
    }

    showAllTweets = () => {
        this.setState({filteredPosts:this.state.post})
    }

    render() {
    return (
      <div className="container">
          <div className="leftPanel">
              <h3>Tweet Filters</h3>
              <div className="searchBox"> <input placeholder="@nameHandel or name" onChange={this.findHandel}/></div>
              <h4>Show only</h4>
              <div className="radioButton"><input type="radio" id="filterChoice2" name="filter" value="showall" onClick={this.showAllTweets} defaultChecked={true}/><label >All tweets</label></div>
              <div className="radioButton"><input type="radio" id="filterChoice1" name="filter" value="filter" onClick={this.showRetweetsOnly}/><label htmlFor="contactChoice1">Retweeted tweets</label></div>
          </div>
          <div className="content">
          {this.state.filteredPosts.map(post => (
              <PostCard text={post.text} key={post.id} user={post.user} userMentioned={post.entities.user_mentions}/>
          ))}
          </div>
      </div>
    );
  }
}

export default App;
