import "core-js/stable";
import "regenerator-runtime/runtime";
import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsPage from '../components/ResultsPage';

const adapter = new Adapter();
enzyme.configure({adapter});

describe('/components/ResultsPage.jsx', () => {
    let component
  
    beforeEach(() => {
        component = shallow(<ResultsPage romanLetters='VIII' />)
    })
  
    it('renders <pre> text output correctly', () => {
      expect(component.find('pre').text()).to.be.equal('Output: ')
    })

    it('renders <textarea> output correctly', () => {
        expect(component.find('textarea').props().value).to.be.equal('VIII')
     })
  })