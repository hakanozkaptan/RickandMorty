import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItemView } from './ListItemView';
import InfiniteScroll from 'react-infinite-scroller';
import loaderImage from '../../assets/images/loading.svg';

const mapStateToProps = state => ({
  page: state.page
});

const ListView = props => {
  const {
    characters,
    currentPage,
    pageCount,
    loadMore
  } = props;

  if (!characters) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  const loader = <div className="loading" key="loading"> <img src={loaderImage} alt="loader" />Loading...</div>;

  return (
    <div className="container">
      <InfiniteScroll
          element="ul"
          className="cards"
          pageStart={currentPage}
          loadMore={loadMore}
          hasMore={pageCount >= currentPage}
          loader={loader}
      >
        {characters && characters.map((character) => {
            return (
              <ListItemView
                character={character}
                key={character.id}
              />
            );
          })
        }
      </InfiniteScroll>
    </div>
  );
};

ListView.propTypes = {
  characters: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  loadMore: PropTypes.func
}

export default connect(mapStateToProps, () => {})(ListView);
