import React from 'react';
import Participant from '../ParticipantList/Participant';

class Stage extends React.Component {
    
    generateParticipants( participants ){
        // return list of participants created from imported participants
        let p = participants.map( participant => {
           if( participant.onStage){ return (
                <Participant
                    key={btoa(`${participant.name}${participant.id}`)}
                    id={participant.id*Math.PI}
                    name={participant.name}
                    avatar={participant.avatar}
                    inSession={participant.inSession}
                    onStage={participant.onStage}
                />
            );
           };
        } )

        return p;
    
    }

    render( ){
        const { participants } = this.props;
        return (
            <ul id="stagewrapper">
                { this.generateParticipants( participants ) }
            </ul>
        );
    }
}

export default Stage;