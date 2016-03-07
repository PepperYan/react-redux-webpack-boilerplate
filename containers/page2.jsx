import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'


class PageTwo extends Component {


	render() {

		return (
			<div>
				Page 2
			</div>
		)
	}
}

PageTwo.propTypes = {};

function mapStateToProps(state) {
	return {

	};
}

export default connect(mapStateToProps)(PageTwo)
