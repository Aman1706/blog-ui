import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'

function Home(props){
        return (
            <div>
                <h1 className="text-light bg-dark p-3">Recent Posts - 10</h1>
                 <ListGroup>
                    {props.posts.reverse().slice(0,10).map(post=>{
                    return <ListGroupItem action key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroupItem>
                    }
                     )}
                </ListGroup> 
            </div>

        )
    }

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
