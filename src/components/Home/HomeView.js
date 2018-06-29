import React, { Component } from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { GET_DATA } from '../../constants/actionTypes';
import ListView from '../Shared/ListView';

const mapStateToProps = state => ({
  characters: state.characters.characters,
  page: state.characters.page,
  pageCount: state.characters.pageCount
});

const mapDispatchToProps = dispatch => ({
  fetchData: (payload) => dispatch({ type: GET_DATA, payload })
});

class HomeView extends Component {
  componentWillMount() {
    this.getData();
  }

  getData = () => {
    const currentPage = this.props.page;
    const getCharactersPromise = agent.Characters.all(currentPage);

    this.props.fetchData(getCharactersPromise);
  }

  loadMore = () => {
    this.getData();
  }

  render () {
    const {
      characters,
      loading,
      pageCount,
      page
    } = this.props;

    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <ListView
              characters={characters}
              loading={loading}
              pageCount={pageCount}
              currentPage={page}
              loadMore={this.loadMore}
            />
          </div>
        </div>
      </div>
    );
  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
