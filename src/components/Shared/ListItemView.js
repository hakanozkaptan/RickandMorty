import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import noImage from '../../assets/images/noimage.jpg'

const createCharacterModel = (character) => {
    const model = {
        name: character.name ? character.name : '-',
        image: character.image ? character.image : noImage
    }

    return model;
}

export const ListItemView = props => {
    const { character } = props;

    if (!character) {
        return null;
    }

    const characterModel = createCharacterModel(character);

    return (
        <li className="cards_item">
            <div className="card">
                <Link to={'/character/' + character.id}>
                    <LazyLoad height={300} offsetVertical={300}>
                        <img className="card-img-top" alt={characterModel.name} src={characterModel.image} />
                    </LazyLoad>
                    <div className="filler" />
                    <div className="card_content">
                        <h2 className="card_heading">{characterModel.name}</h2>
                    </div>
                </Link>
            </div>
        </li>
    );
}

export default ListItemView;
