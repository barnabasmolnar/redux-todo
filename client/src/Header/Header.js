import React from 'react';
import AddTodo from './AddTodo';
import FilterTab from './FilterTab';

const Header = () => (
    <div className="card-header">
        <div className="card-title mb-5 mt-2">
            <h3>A list of things to do...</h3>
        </div>
        <AddTodo />
        <FilterTab />
    </div>
)

export default Header;