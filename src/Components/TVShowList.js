import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow.js'

class TVShowList extends Component {


  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.searchTerm !== this.props.searchTerm || this.props.searchTerm === ""){
      return true
    }
      return false
    }
  componentDidUpdate(){
    console.log('updated')
  }

  mapAllShows = () => {
    if (this.props.searchTerm != ""){
      // debugger
    return this.props.shows.map((s) => {
        if (s.name.toLowerCase().includes(this.props.searchTerm)){
          return <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>
        }
      })
    }
    return this.props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
