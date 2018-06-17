import React, { Component } from 'react';
import './App.css';
import PostCard from './components/postCard'
class App extends Component {
    constructor(){
        super()
        this.state ={
            post:[],
            filteredPosts:[],
            numberOfPages:0,
            currentPage:1,
            maxPageCount:6,
            test:'',
        }
    }
    componentDidMount() {
        fetch('Api/data.json').then((data) => {
            return data.json()
        }).then((json) => {
            this.setState({post:json,filteredPosts:json})
            const slicedPost = json.slice(0, 6);
            this.setState({filteredPosts: slicedPost})
        });
        let pageList = [];
        for (let i = 1; i < 4; i++) {
            pageList.push(i)
        }
        this.setState({numberOfPages: pageList});

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
    };

    showRetweetsOnly = () => {
        const retweetedTweets = this.state.post.filter(x => x.retweeted_status)
       this.setState({filteredPosts:retweetedTweets})
    };

    showAllTweets = () => {
        this.setState({filteredPosts:this.state.post})
    };
    filterNoOfTweet = (event) => {
        this.setState({maxPageCount: event.target.value})
        if(event.target.value <= this.state.post.length && event.target.value >=1) {
            const slicedPost = this.state.post.slice(0, event.target.value)
            this.setState({filteredPosts: slicedPost})
            const pageList = [];
            for (let i = 1; i < Math.ceil(this.state.post.length / event.target.value); i++) {
                pageList.push(i)
            }
            this.setState({numberOfPages: pageList})
        }else{
            event.target.valueOf = 5
        }
    };

    setPage = (pageNo) => {
        this.setState({currentPage:pageNo});
        const startNumber = Number(pageNo)*this.state.maxPageCount;
        const endNumber = startNumber+Number(this.state.maxPageCount);
        const slicedPost = this.state.post.slice(startNumber, endNumber);
        this.setState({filteredPosts: slicedPost})
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
              <h4>Number post/page</h4>
                <span className="pageFilter">No.of post per page : <input placeholder="5" type="number" onChange={this.filterNoOfTweet} min={5} max={this.state.post.length} defaultValue={6}/></span>
              {this.state.numberOfPages.length >0 && <p>Pages:</p>}
              <ul className="pages">
                  {this.state.numberOfPages.length >0  && this.state.numberOfPages.map((x,index) => (<li key={index} className={this.state.currentPage-1 === index ? 'active':''} ><a href="#" onClick={() => this.setPage(x)}>{x}</a> </li>))}
              </ul>
          </div>
          <div className="content">
          {this.state.filteredPosts.map(post => (
              <PostCard text={post.text} key={post.id} user={post.user} userMentioned={post.entities.user_mentions} retweet={post.retweeted_status?true:false}/>
          ))}
          </div>
      </div>
    );
  }
}

export default App;
