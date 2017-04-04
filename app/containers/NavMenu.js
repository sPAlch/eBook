import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import NavMenu from '../components/navMenu';

const mapStateToProps = (state) => ({
	configData: state.getIn(['config', 'configData'])
});

export default connect(
	mapStateToProps
)(NavMenu);