import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import Message from '../../components/message';

import '../../assets/style/_basics.scss';
import './chat.scss'

import userAvatar from '../../assets/img/meC.png';
import aiAvatar from '../../assets/img/meBW.png';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {context: {}, messages: []}
        this.sendMessage = this.sendMessage.bind(this);
        this.sendInput = this.sendInput.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }

    setMessage(text, who = 'user'){
        var answer = {text: text, author:who};
        this.setState({
            messages: [...this.state.messages, answer]
        });
    }

    scrollAnswer(){
        var answers = document.getElementById('messages');
        answers.scrollTop = answers.scrollHeight;
    }

    sendMessage( text, context) {
       /* var parameters = {};
        if(text){
            parameters.input = {text:text};
        }
        if(context){
            parameters.context = context;
        }
        requestAPI('message','POST',parameters).then (res =>{
            var answer = 'Are you ok?';
            if( res.output.text){
                answer = res.output.text;
            }
            this.setMessage( answer, 'ai');
            this.setState( {context: res.context});
        }).then(() => {
            this.scrollAnswer();
        })*/
    }

    sendInput(e){
        var text = e.target.value;
        if(e.key ==='Enter'&&text){
            this.setMessage(text);
            this.scrollAnswer();
            //this.sendMessage(text,this.state.context);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="bg--secondary-color border--dark-grey p-1 position-relative">
                <div className="chat__messages pb-5 mb-5 overflow-y--auto" id='messages'>
                    {
                        this.state.messages && this.state.messages.length ? this.state.messages.map((msg,i) =>
                            <Message key={i} text={msg.text} author={msg.author}/>
                        ) : null
                    }
                </div>
                <div className='position-relative'>
                <div className="chat__message-form w-100 d-flex p-1">
                    <div className="form-group text--white w-100 m-0">
                        <input type="text"
                               className="chat__message-input form-control py-2 rounded-0 text--white bg--primary-color border-0"
                               placeholder="Type here..." onKeyPress={this.sendInput}/>
                    </div>
                    <Button className="chat__message-send-btn border-0 rounded-0 text--white bg--primary-color">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} size='lg' />
                    </Button>
                </div>
                </div>
            </div>
        );
    }
}

export default Chat;