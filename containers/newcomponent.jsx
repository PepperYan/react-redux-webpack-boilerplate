import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {fetchList,list} from '../models/actions/newcomponent'
import Request from '../utils/request'

class NewComponent extends Component {

  componentWillMount(){
    this.props.dispatch(fetchList());
  }

  onClick(){
    var data = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.props.dispatch(list(data));
  }

	render() {
		return (
			<div>
        <ul>
          <button onClick={this.onClick.bind(this)}>a</button>
          { this.props.newcomponent && this.props.newcomponent.map(function(item,index){
            return <li key={index}>{item}</li>
          })}
        </ul>
			</div>
		)
	}
}

NewComponent.propTypes = {};

function mapStateToProps(state) {
	return {
    newcomponent: state.newcomponent
	};
}

export default connect(mapStateToProps)(NewComponent)
