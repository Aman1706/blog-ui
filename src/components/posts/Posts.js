import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import { Button } from 'reactstrap'

import { ListGroup, ListGroupItem } from 'reactstrap'


class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible:10
        }
        this.handleButton = this.handleButton.bind(this)
    }
    handleButton(){
        this.setState((prevState)=>{
            return {
                visible:prevState.visible+10
            }
        })
    }

    render(){
        return (
            <div>
                <h1 className ="text-light bg-dark p-3" >Posts - {this.props.posts.slice(0,this.state.visible).length}</h1>
                <ListGroup className="mb-4">
                    {this.props.posts.slice(0,this.state.visible).map(post =>{
                        return <ListGroupItem key={post.id} action><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroupItem>
                    })}
                </ListGroup>
                
                {this.state.visible<this.props.posts.length && (
                     <Button color = "success" onClick = {this.handleButton}>Load More</Button>
                )
                    
                }
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts)