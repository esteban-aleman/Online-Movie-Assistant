import React from 'react';

import './message.scss'

export default function Message(props) {
    const{ text, author } = props;
    return (
        <div className={'message__' + author + ' d-flex align-items-center'}>
            <i className={'message__avatar-' + author + ' rounded-circle m-2'}></i>
            <p className="m-0 pt-1">{text}</p>
        </div>
    );
}