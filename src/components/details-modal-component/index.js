
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DetailsModal = (props) => {
    const{ movie, onToggle, open } = props;
    return (
        <div>
            <Button color="danger" onClick={onToggle()}>close</Button>
            <Modal isOpen={open} toggle={onToggle()} className={this.props.className}>
                <ModalHeader toggle={onToggle()}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onToggle()}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={onToggle()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DetailsModal;