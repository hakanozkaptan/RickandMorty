import characterList from '../../src/reducers/characterList';
import { GET_DATA } from '../../src/constants/actionTypes'

describe('character reducer', () => {
    const defaultState = {
        page: 1,
        characters: [],
        characterCount: 0,
        pageCount: 0
    };

    it('should return default state when action is incorrect', () => {
        const action = {
            type: 'INCORRECT_ACTION'
        };

        const state = characterList(defaultState, action);

        expect(state).toEqual(defaultState);
    });

    it('should update state when data come', () => {
        const action = {
            type: GET_DATA,
            payload: {
                results: [
                    {
                        name: 'Rick'
                    }
                ],
                info: {
                    pages: 25
                }
            }
        };

        const state = characterList(defaultState, action);

        expect(state.characters[0].name).toEqual('Rick');
        expect(state.pageCount).toEqual(25);
    });

    it('should increment page when data come and append characters', () => {
        const action = {
            type: GET_DATA,
            payload: {
                results: [
                    {
                        name: 'Rick'
                    }
                ],
                info: {
                    pages: 25
                }
            }
        };

        let state = characterList(defaultState, action);

        expect(state.page).toEqual(2);

        state = characterList(state, action);

        expect(state.page).toEqual(3);
        expect(state.characters.length).toEqual(2);
    })
});