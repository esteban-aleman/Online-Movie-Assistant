import PropTypes from 'prop-types';

export const chatMessageType = PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
})

export const chatMessageTypeDefault = {
    text: 'default-text',
    author: 'user'
}

export const chatContextType = PropTypes.shape({
})

export const chatContextTypeDefault = {
}

export const suggestionType = PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    saved: PropTypes.bool.isRequired,
    watched: PropTypes.bool.isRequired
})

export const suggestionTypeDefault = {
    image: 'no-image',
    title: 'default-title',
    description: 'default-description',
    saved: false,
    watched: false
}

export const filtersType = PropTypes.shape({
    filters: PropTypes.array.isRequired
})

export const filtersTypeDefault = {
    filters: []
}

