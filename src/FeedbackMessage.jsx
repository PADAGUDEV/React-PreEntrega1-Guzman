import React,{Component}from 'react';

export class FeedbackMessage extends Component {
    render() {
        return(
            <p>
                componente basdo en clases {this.props.nombre} al curso {this.props.app}
            </p>
        )
    }
};
