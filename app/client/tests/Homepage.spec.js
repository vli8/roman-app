import 'jsdom-global/register';
import { expect } from 'chai';
import React from 'react';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../components/Homepage';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// functions to spyOn
import apiRequestCallBack from '../components/requests'

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('/components/HomePage.jsx', () => {
    let component;
    let history = createMemoryHistory();

    before(() => {
        component = mount(
            <Router history={history}>
                <Home />
            </Router>
        )
    });
  
    it('renders <h1> text output correctly', () => {
        expect(component.find('#headerId').text()).to.be.equal('Welcome to the roman numeral app');
    });
})