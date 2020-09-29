import React from 'react';

class Participant extends React.Component {
    render( ) {
        const { name, avatar, inSession, onStage, id } = this.props;
        let idHash = btoa(`${name}${id}`);
        return (
            <li id={idHash}>
                <h3>{name}</h3>
                <img src={avatar} />
                <div className={ inSession ? 'inSession' : '' }></div>
                <div>{ onStage ? 'on stage' : 'inactive' }</div>
            </li>
        );
    }
}

export default Participant;