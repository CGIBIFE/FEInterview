import React from 'react'
import TextParser from './textParser'

class PostCard extends React.Component{

    render(){
        return (
            <div className="postCard">
                <TextParser text={this.props.text} user={this.props.user} userMentioned={this.props.userMentioned}/>
            </div>
        )
    }
}

export default PostCard