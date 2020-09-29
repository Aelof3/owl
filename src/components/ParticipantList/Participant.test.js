import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';

describe('Participant tests', () =>{
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Participant />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})
