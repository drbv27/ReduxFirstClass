import React from 'react';
import '../App.css';
import Modal from '../components/modal'


class PageModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleHide = this.handleHide.bind(this)
    }

    handleShow() {
        this.setState({ showModal: true })
    }

    handleHide() {
        this.setState({ showModal: false })

    }

    render() {

        let modal = ''
        if (this.state.showModal) {
            modal = (
                <Modal>
                    <div className="modal">
                        Este es el contenido de mi modal
          <button onClick={this.handleHide}> Ocultar modal</button>
                    </div>
                </Modal>
            )
        }


        return (
            <div className="app">
                <button onClick={this.handleShow}> Show modal</button>
                {modal}
            </div>
        )

    }
}

export default PageModal;