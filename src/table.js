import React, { Component } from 'react';


class UserTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const isActive = this.props.isActive;

        const row = [];
        let lastUser = null;

       return (
           <div>
               Table
           </div>
       );
         
    }
}

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." />
            </div>
        );
    }
}

class SearchableUserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            isActive: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleIsActiveChange = this.handleIsActiveChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleIsActiveChange(isActive) {
        this.setState({
            isActive: isActive
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <UserTable />
            </div>
        );
    }

}

export default SearchableUserTable;