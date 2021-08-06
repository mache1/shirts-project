import './Modal.scss';

const Modal = (props) => {
    return (
        <div className="modal" style={{
            transform: props.show ? 'translate(-50%, 0)' : 'translate(-50%, 500px)'
        }}>
            <p>{props.children}</p>
        </div>
    );
}

export default Modal;