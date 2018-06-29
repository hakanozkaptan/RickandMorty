import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_CHARACTER = 'https://rickandmortyapi.com/api/character/?page=';
const API_DETAILS = 'https://rickandmortyapi.com/api/character/';

const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_CHARACTER}${url}`).then(responseBody),
  getDetail: id =>
    superagent.get(`${API_DETAILS}${id}`).then(responseBody),
  getEpisode: episodeUrl => 
    superagent.get(episodeUrl).then(responseBody)
};

const Characters = {
  all: page =>
    requests.get(page),
  getCharacterDetail: id =>
    requests.getDetail(id)
};

const Episode = {
  get: episodeUrl =>
    requests.getEpisode(episodeUrl)
};

export default {
  Characters,
  Episode
};
