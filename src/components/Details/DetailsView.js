import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import moment from 'moment';
import agent from '../../agent';

import {
  CHARACTERS_PAGE_LOADED,
  CHARACTERS_PAGE_UNLOADED,
  CHARACTERS_EPISODE_LOADED,
  CHARACTERS_EPISODE_UNLOADED
} from '../../constants/actionTypes';

import noImage from '../../assets/images/noimage.jpg';

const mapStateToProps = state => ({
  ...state.character,
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: CHARACTERS_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: CHARACTERS_PAGE_UNLOADED }),
  onEpisodeLoad: payload =>
    dispatch({ type: CHARACTERS_EPISODE_LOADED, payload }),
  onEpisodeUnload: () =>
    dispatch({ type: CHARACTERS_EPISODE_UNLOADED })
});

class DetailsView extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;

    const loadCharacterPromise = Promise.all([agent.Characters.getCharacterDetail(id)]);
    loadCharacterPromise.then((character) => {
      const promises = character[0].episode.map((episode) => {
        return agent.Episode.get(episode);
      });

      this.props.onEpisodeLoad(Promise.all(promises));
    });

    this.props.onLoad(loadCharacterPromise);
  }

  componentWillUnmount() {
    this.props.onUnload();
    this.props.onEpisodeUnload();
  }

  createCharacterModel = (character) => {
    const model = {
      name: character.name ? character.name : '-',
      image: character.image ? character.image : noImage,
      location: character.location ? character.location.name : 'Unknown',
      formattedCreateDate: character.created ? moment(character.created).fromNow() : '-'
    }

    return model;
  }

  render() {
    const { character, episodes } = this.props;

    if (!character) {
      return null;
    }

    const characterModel = this.createCharacterModel(character);

    return (
      <div className="details-container">
        <div className="button-center">
          <Link to="/"><div className="bk-btn"><div className="bk-btn-triangle"></div><div className="bk-btn-bar"></div></div>
          </Link>
        </div>
        <div className="card">
          <LazyLoad height={300} offsetVertical={300}>
            <img className="card-img-top" src={characterModel.image} alt={characterModel.name} />
          </LazyLoad>
          <div className="filler" />
          <div className="card-body">
            <h4 className="card-title">{characterModel.name}</h4>
            <p className="location">
              <label>Location: </label>
              {characterModel.location}
            </p>
            <p>
              <label>Created Date: </label>
              {characterModel.formattedCreateDate}
            </p>
          </div>
          <div className="card-footer">
            {episodes.length > 0 && (
              <div className="episode">
                <ul>
                  <li><label>Episodes</label></li>
                  {episodes.map((episode, index) => {
                    return (
                      <li key={'episode_' + episode.id}><strong>{(index + 1)}</strong> - {episode.name}</li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);
