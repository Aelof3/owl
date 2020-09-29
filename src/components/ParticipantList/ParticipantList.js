import React from 'react';
import Participant from './Participant';

class ParticipantList extends React.Component {
    
    generateParticipants( participants ){
        // return list of participants created from imported participants
        let p = participants.map( participant => {
            return (
                <Participant
                    key={btoa(`${participant.name}${participant.id}`)}
                    id={participant.id}
                    name={participant.name}
                    avatar={participant.avatar}
                    inSession={participant.inSession}
                    onStage={participant.onStage}
                />
            );
        } )
        return p;
    }

    render( ){
        const { participants } = this.props;
        return (
            <ul >
                { this.generateParticipants( participants ) }
            </ul>
        );
    }
}

export default ParticipantList;