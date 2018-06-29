jest.mock('react-redux', () => require('react-redux-mock'));

import React from 'react';
import { MemoryRouter } from 'react-router';
import { __setState } from 'react-redux';
import DetailsView from "../../src/components/Details/DetailsView";
import Enzyme, { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import character from '../responses/character';
import episode from '../responses/episode';

Enzyme.configure({ adapter: new Adapter() });

const characterId = 4;
const match = {
    params: {
        id: characterId
    }
};

describe('detail snapshot testing', () => {
    it('should render correctly if not loaded', () => {
        __setState({
            character: {},
            episodes: []
        });
        
        const componentRender = render(
            <MemoryRouter>
                <DetailsView match={match} />
            </MemoryRouter>
        );

        expect(toJson(componentRender)).toMatchSnapshot();
    });

    it('should render correctly if loaded', () => {
        __setState({
            match: {
                params: {
                    id: characterId
                }
            },
            character,
            episodes: [episode]
        });

        const componentRender = render(
            <MemoryRouter>
                <DetailsView match={match} />
            </MemoryRouter>
        );

        expect(toJson(componentRender)).toMatchSnapshot();
    });
});