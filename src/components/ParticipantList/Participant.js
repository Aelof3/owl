import React from 'react';

class Participant extends React.Component {
    render( ) {
        const { name, avatar, inSession, onStage, id } = this.props;
        let idHash = btoa(`${name}${id}`);
        return (
            <li id={idHash}>
                <div className="section--row">
                    <img src={avatar} />
                    <div className="section--column">
                        <h3>{name}</h3>
                        <div className="section--row">
                            <div className={ inSession ? 'inSession' : 'outSession' }></div>
                            <div className="onstage">{ onStage ? 'on stage' : 'inactive' }</div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Participant;