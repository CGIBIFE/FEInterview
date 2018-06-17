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
        const result = text.match(regex)
        this.setState({RT: result !== null && this.props.userMentioned.find(x => x.screen_name === result[1]),tweet: text.replace(regex,'')})
    }

    render(){
        return (
            <div >
                {this.state.RT && <span className="retweet"><a href={`https://twitter.com/${this.state.RT.screen_name}`} >{this.state.RT.name}</a> Retweeted</span>}
                <div className="tweet">
                    <span className="user-profile"><a href={`https://twitter.com/${this.props.user.screen_name}`} ><img className="profilePic" src={this.props.user.profile_image_url} />{`${this.props.user.name} (@${this.props.user.screen_name})`}</a></span>
                <p>{this.state.tweet}</p>
                </div>
            </div>
        )
    }
}

export default TextParser