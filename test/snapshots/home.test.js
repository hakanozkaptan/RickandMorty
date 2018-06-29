jest.mock('react-redux', () => require('react-redux-mock'));

import React from 'react';
import { MemoryRouter } from 'react-router';
import { __setState } from 'react-redux';
import HomeView from "../../src/components/Home/HomeView";
import Enzyme, { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import characterList from '../responses/characterList';

Enzyme.configure({ adapter: new Adapter() });

describe('home snapshot testing', () => {
    it('should render correctly if not loaded', () => {
        __setState({
            characters: {
                characters: []
            }
        });
        
        const componentRender = render(
            <MemoryRouter>
                <HomeView />
            </MemoryRouter>
        );

        expect(toJson(componentRender)).toMatchSnapshot();
    });

    it('should render correctly if loaded', () => {
        __setState({
            characters: {
                characters: characterList.results,
                page: 1,
                pageCount: 25
            }
        });

        const componentRender = render(
            <MemoryRouter>
                <HomeView />
            </MemoryRouter>
        );

        expect(toJson(componentRender)).toMatchSnapshot();
    });
});