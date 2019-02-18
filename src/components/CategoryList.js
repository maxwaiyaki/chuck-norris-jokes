import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCat} from '../redux/action/fetchCat';


 class Posts extends Component { 
     componentWillMount(){
       this.props.fetchCat();
     }
  render() {
    return (
      <div>
        <div className="row">
            {this.props.posts.map((cat,indx)=>(
            <div class="col-sm-3">

              <div class="card m-2">
                <div key={indx} class="card-body">
                  <h5 class="card-title cat-details font-weight-bold">{cat} Jokes</h5>
                  <Link to={{
                    pathname: '/jokes/random',
                    search: '?category='+ cat
                    }} className="btn btn-outline-info">Get Jokes
                  </Link>
                </div>
               </div>

            </div>
               ))}

        </div>
      </div>
    )
  }
}
const mapStateToProps = state => (
  {
    posts:state.cat.posts
  }
);
export default connect(mapStateToProps,{ fetchCat })(Posts);