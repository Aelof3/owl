import React from 'react';
import { participants } from './participants';
import Participant from './Participant';

class ParticipantList extends React.Component {
    
    generateParticipants( ){
        // return list of participants created from imported participants
        return (
            <Participant />
        )
    }

    render( ){
        return (
            <ul >
                {this.generateParticipants()}
            </ul>
        );
    }
}

export default ParticipantList;