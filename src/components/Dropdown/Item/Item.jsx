import React from 'react';
import PropTypes from 'prop-types';

const Item = ({item: { href, text }, actived}) => (
    <li className={ actived ? 'active' : '' }>
        <a href={ href }>{ text }</a>
    </li>
);

Item.propTypes = {
    props: PropTypes.shape({
        item: PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }),
        actived: PropTypes.bool
    })
};

export default Item;

