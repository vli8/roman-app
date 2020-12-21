import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorPage from '../components/ErrorPage';

const adapter = new Adapter();
enzyme.configure({adapter});

describe('/components/ErrorPage.jsx', () => {
    let component
  
    it('displays the correct error message', () => {
        const errorProps = {
            data: {
                message: 'hello world mock error message',
            },
            status: 500,
        }
        component = shallow(<ErrorPage error={errorProps} />)
        expect(component.find('b').text()).to.be.equal(`Status: ${errorProps.status}`);
        expect(component.find('pre').text()).to.be.equal(' Sorry, can\'t convert it - hello world mock error message');
    });
  })