import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import DevTools from '../containers/DevTools'
import _ from 'lodash'
var HeaderBar = require('../components/ui/framework/header-bar/header-bar');
var NavBar = require('../components/ui/framework/header-bar/header-navbar');
import SiderBar from '../components/ui/framework/sider-bar'


class App extends Component {


    onClickMenu(e) {
        this.props.history.pushState(null, e.currentTarget.getAttribute('data-link'));
    }

    render() {

        return (
            <div>
                <HeaderBar isShow={{nav:true, notifications:true}} title="React Demo">
                    <NavBar isShow={{notifications:true}}/>
                </HeaderBar>
                <SiderBar title={'hibad'} mainheader="管理列表">
                    <li><a href="javascript:void(0)" onClick={this.onClickMenu.bind(this)} data-link="/"><i
                        className="fa fa-book"></i> <span>Index</span></a></li>
                      <li><a href="javascript:void(0)" onClick={this.onClickMenu.bind(this)} data-link="/pagetwo"><i
                            className="fa fa-book"></i> <span>Page2</span></a></li>
                </SiderBar>
                <div className="content-wrapper" style={{minHeight: 916}}>
                    <section className="content">
                        {this.props.children}
                    </section>
                </div>
            </div>
        )
    }
}

App.propTypes = {};
function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(App)
