import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Person } from './Person';

describe('Person', () => {

  describe('view model', () => {
    let person;
    beforeEach(() => {
      person = new Person();
    });

    describe('name', () => {
      it("defaults to ''", () => {
        expect(person.name()).toBe('');
      });
    });
  });

  describe('bindings', ()=>{
    const intoDom = TestUtils.renderIntoDocument(
      <Person  />
    );
    const rendered = ReactDOM.findDOMNode(intoDom);

    it("binds input", ()=>{
      const element = rendered.querySelectorAll('input')[0];
      const binding = element.vmBinding;
      expect(binding.value).toBe('name');
    })

    it("binds label", ()=>{
      const element = rendered.querySelectorAll('label')[0];
      const binding = element.vmBinding;
      expect(binding.text).toBe("'Hello ' + name");
    })
  })
  
});