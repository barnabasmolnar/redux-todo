import React from 'react';
import { connect } from "react-redux";
import { setVisibilityFilter } from '../actions';
import { Visibility } from '../actionConstants';
import { bindActionCreators } from 'redux';

const FilterTab = ({ setVisibilityFilter, visibilityFilter }) => (
    <ul className="nav nav-tabs card-header-tabs nav-fill mt-5">
        <li className="nav-item" onClick={()=> {setVisibilityFilter(Visibility.SHOW_ALL)}}>
            <span className={visibilityFilter === Visibility.SHOW_ALL ? "nav-link active" : "nav-link"}>All</span>
        </li>
        <li className="nav-item" onClick={()=> {setVisibilityFilter(Visibility.SHOW_TODO)}}>
            <span className={visibilityFilter === Visibility.SHOW_TODO ? "nav-link active" : "nav-link"}>To Do</span>
        </li>
        <li className="nav-item" onClick={()=> {setVisibilityFilter(Visibility.SHOW_COMPLETED)}}>
            <span className={visibilityFilter === Visibility.SHOW_COMPLETED ? "nav-link active" : "nav-link"}>Done</span>
        </li>
    </ul>
)


const mapDispatchToProps = dispatch => bindActionCreators({
    setVisibilityFilter
}, dispatch);

const mapStateToProps = ({ visibilityFilter }) => ({ visibilityFilter })

export default connect(mapStateToProps, mapDispatchToProps)(FilterTab);