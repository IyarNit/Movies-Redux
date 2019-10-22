import React from 'react';



class Search extends React.Component {

    // move state of search to here


    render() {
        console.log(this.props)
        return <div>
            <input type="text" placeholder="Search" onChange={this.props.Changer} value={this.props.input} />
            <button type="button" onClick={this.props.titleSearch} style={{ marginBottom: "30px" }}>Search</button>
        </div>
    }
}

export default Search