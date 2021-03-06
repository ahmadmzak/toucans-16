import React, { Component } from "react";

class FilterOption extends Component {
    filterType = evt => {
        evt.preventDefault();
        this.props.onOptionClick(this.props.value);
    };
    render() {
        return this.props.option === this.props.value ? (
            <h4 className="todo__filter__btn">{this.props.value}</h4>
        ) : (
            <a
                className="todo__filter__btn--off"
                href=""
                onClick={this.filterType}
            >
                <h4>{this.props.value}</h4>
            </a>
        );
    }
}

export default FilterOption;
