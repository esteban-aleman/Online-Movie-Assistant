//External libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

//Actions
import {addChatMessage, changeChatContext, retrieveSuggestions, addFilter, removeFilter} from "../../actions";

//Components
import Message from '../../components/message-component';

//Styles
import '../../assets/style/_basics.scss';
import './chat.scss'

const WATSON_API_URL = '/watsonApi';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.sendInput = this.sendInput.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.requestWatson = this.requestWatson.bind(this);
    }

    setMessage(text, who = 'user',context = this.props.chatContext){
        const answer = {text: text, author:who};
        this.props.addChatMessage(answer);
        this.props.changeChatContext(context);
    }

    scrollAnswer(){
        var answers = document.getElementById('messages');
        answers.scrollTop = answers.scrollHeight;
    }

    sendMessage(text) {
        var body = {};
        body.input = {text:text};
        body.context = this.props.chatContext;
        this.requestWatson(body).then (res =>{
            var answer = 'Error...';
            if(res.output.text){
                console.log(res.output.text);
                let sections = res.output.text[0].split('|');
                if(sections.length > 1) {
                    this.processWatson(sections[0]);
                    answer = sections[1];
                }else{
                    answer = sections[0];
                }
            }
            this.setMessage( answer, 'ai',res.context);
        }).then(() => {
            this.scrollAnswer();
        })
    }

    sendInput(e){
        var target = document.getElementById('chat__message-input');
        var text = target.value;
        if((e.type === 'keypress' && e.key === 'Enter' && text) || e.type === 'click'){
            this.setMessage(text);
            this.scrollAnswer();
            this.sendMessage(text);
            target.value = '';
        }
    }/*

}*/

    requestWatson(body) {
        const url = WATSON_API_URL + '/message';

        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': ' application/json'
            },
            body : JSON.stringify(body)
        }).then( response => {
            return response.json()
        })
    }

    processWatson(tag) {
        let will = tag.split('{');
        switch (will[0]) {
            case 'add':
                this.props.addFilter(will[1]);
                break;
            case 'remove':
                this.props.removeFilter(will[1]);
                break;
            default:
                console.log('Error processing watson answer')
        }
        this.props.retrieveSuggestions(this.props.filters);
    }

    render() {
        return (
            <div className="bg--secondary-color border--dark-grey p-1 position-relative">
                <div className="chat__messages pb-5 mb-5 overflow-y--auto" id='messages'>
                    {
                        this.props.chatMessages && this.props.chatMessages.length ? this.props.chatMessages.map((msg,i) =>
                            <Message key={i} text={msg.text} author={msg.author}/>
                        ) : null
                    }
                </div>
                <div className='position-relative'>
                <div className="chat__message-form w-100 d-flex p-1">
                    <div className="form-group text--white w-100 m-0">
                        <input id='chat__message-input' type="text"
                               className="chat__message-input form-control py-2 rounded-0 text--white bg--primary-color border-0"
                               placeholder="Type here..." onKeyPress={this.sendInput}/>
                    </div>
                    <Button className="chat__message-send-btn border-0 rounded-0 text--white bg--primary-color" onClick={this.sendInput}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} size='lg' />
                    </Button>
                </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        chatMessages: state.chatMessageReducer.chatMessages,
        chatContext: state.chatContextReducer.context,
        filters: state.filtersReducer.filters
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addChatMessage: addChatMessage,
        changeChatContext: changeChatContext,
        retrieveSuggestions: retrieveSuggestions,
        addFilter: addFilter,
        removeFilter: removeFilter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);