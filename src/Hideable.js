import React, { Component } from "react";

class Hideable extends Component {
    state = {
        hidden: true
    };
    handleClick = e => {
        e.preventDefault();
        this.setState({
            hidden: !this.state.hidden
        });
    };
    /* handleBlur = () => {
        setTimeout(() => {
            if (this.state.focus)
                this.setState({
                    focus: false
                });
        }, 0);
    };
    handleFocus = () => {
        if (!this.state.focus)
            this.setState({
                focus: true
            });
    }; */
    render() {
        const btnStyle = {
            alignSelf: this.props.align,
            backgroundColor: "transparent",
            border: "0",
            color: "white",
            outline: "0",
            margin: this.props.margin
        };
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    textAlign: "center"
                }}
            >
                {this.props.dir === "top" ? (
                    <button
                        className="hideable"
                        style={btnStyle}
                        onClick={this.handleClick}
                    >
                        <div
                            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.3)" }}
                        >
                            {this.props.label}
                        </div>
                    </button>
                ) : null}
                <div
                    style={{
                        opacity: this.state.hidden ? "0" : "1",
                        WebkitTransition: "0.2s",
                        transition: "0.2s",
                        margin: this.props.childMargin
                    }}
                >
                    {this.props.children}
                </div>
                {this.props.dir === "bottom" ? (
                    <button
                        className="hideable"
                        style={btnStyle}
                        onClick={this.handleClick}
                    >
                        <div
                            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.3)" }}
                        >
                            {this.props.label}
                        </div>
                    </button>
                ) : null}
            </div>
        );
    }
}

export default Hideable;
