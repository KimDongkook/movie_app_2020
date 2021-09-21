import React from "react";

class Detail extends React.Component {

    componentDidMount() {
        const {location: {state}, history: {push}} = this.props;

        if(state === undefined) {
            push('/');
        }
    }
    render() {
        console.log(this.props)
        const {location: {state}} = this.props;
        if(state) {
            const {title} = state;
            return <span>{title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;