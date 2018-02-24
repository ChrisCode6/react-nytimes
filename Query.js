var React = require('react');
var ReactDOM = require('react-dom');

var Query = React.createClass({

    getInitialState: function() {
        return {
            term: '',
            begin: '',
            end: ''
        };
    },

    handleChange: function(event) {

        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);

    },

    handleSubmit: function(event) {
 
        event.preventDefault();

   
        this.props.setTerms(this.state.term, this.state.begin, this.state.end);

        this.setState(
            {
                term: '',
                begin: '',
                end: ''
            }
        );
    },
    render: function () {
        return(
            <div className="query">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="term">Search Term:</label>
                    <input
                        type="text"
                        value={this.state.term}
                        id="term"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Search Term"
                        required
                    />
                    <label htmlFor="begin">Begin year:</label>
                    <input
                        type="number"
                        value={this.state.begin}
                        onChange={this.handleChange}
                        id="begin"
                        className="form-control"
                        placeholder="1998"
                    />
                    <label htmlFor="end">End year:</label>
                    <input
                        id="end"
                        className="form-control"
                        placeholder="2015"
                        type="number"
                        value={this.state.end}
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="search-button btn btn-info center-block">Search</button>
                </form>
            </div>
        )
    }
});

module.exports = Query;