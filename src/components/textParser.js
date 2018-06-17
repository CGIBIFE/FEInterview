import React from 'react'

class TextParser extends React.Component{
    constructor(){
        super()
        this.state = {
            RT:""
        }
    }
    componentDidMount(){
        const text = this.props.text;
        const regex =/^RT \B\@([\w\-]+)\:/i;
        const handelRegex =/\B\@([\w\-]+)/i;
        const link = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/
        const result = text.match(regex);
        this.setState({RT: result !== null && this.props.userMentioned.find(x => x.screen_name === result[1])});
        const handels = [];
        const links = [];
        let altertedTweet = text.replace(regex,'');
        altertedTweet.replace(regex,'').split(' ').map(x => {
        if(x.match(handelRegex)!==null) {
            const handelLink = {};
            handelLink.handel = x.match(handelRegex)[0];
            handelLink.url = `<a href="https://twitter.com/${x.match(handelRegex)[1]}">${x.match(handelRegex)[0]}\</a>`;
          handels.push(handelLink)
        }else if(x.match(link)){
            const Links = {};
            Links.handel = x.match(link)[0];
            Links.url = `<a href="${x.match(link)[0]}">${x.match(link)[0]}\</a>`;
            console.log(Links)
            links.push(Links)
        }
        });
        handels && handels.map(x =>{
            altertedTweet = altertedTweet.replace(x.handel,x.url)
        })
        links && links.map(x =>{
            altertedTweet = altertedTweet.replace(x.handel,x.url)
        })

        this.setState({tweet:altertedTweet})
    }

    render(){
        return (
            <div >
                {this.state.RT && <span className="retweet"><a href={`https://twitter.com/${this.state.RT.screen_name}`} >{this.state.RT.name}</a> Retweeted</span>}
                <div className="tweet">
                    <span className="user-profile"><a href={`https://twitter.com/${this.props.user.screen_name}`} ><img className="profilePic" src={this.props.user.profile_image_url} />{`${this.props.user.name} (@${this.props.user.screen_name})`}</a></span>
                <p className="tweetContent" dangerouslySetInnerHTML={{__html: this.state.tweet}} />
                </div>
            </div>
        )
    }
}

export default TextParser