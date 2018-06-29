import character from '../../src/reducers/character';
import {
    CHARACTERS_PAGE_LOADED,
    CHARACTERS_PAGE_UNLOADED,
    CHARACTERS_EPISODE_LOADED,
    CHARACTERS_EPISODE_UNLOADED
} from '../../src/constants/actionTypes'

describe('character reducer', () => {
    const defaultState = {
        character: {},
        episodes: []
    };

    it('should return default state when action is incorrect', () => {
        const action = {
            type: 'INCORRECT_ACTION'
        };

        const state = character(defaultState, action);

        expect(state).toEqual(defaultState);
    });

    it('should load character data correctly', () => {
        const action = {
            type: CHARACTERS_PAGE_LOADED,
            payload: [
                {
                    name: 'Rick'
                }   
            ]
        }

        const state = character(defaultState, action);

        expect(state.character.name).toEqual('Rick');
    });

    it('should unload character data correctly', () => {
        const action = {
            type: CHARACTERS_PAGE_UNLOADED
        }

        const state = character(defaultState, action);

        expect(state.character).toEqual({});
    });

    it('should load episode data correctly', () => {
        const action = {
            type: CHARACTERS_EPISODE_LOADED,
            payload: [
                {
                    name: 'Plot I'
                }   
            ]
        }

        const state = character(defaultState, action);

        expect(state.episodes[0].name).toEqual('Plot I');
    });

    it('should unload episode data correctly', () => {
        const action = {
            type: CHARACTERS_EPISODE_UNLOADED
        }

        const state = character(defaultState, action);

        expect(state.episodes).toEqual([]);
    });
});