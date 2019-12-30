import React from 'react'


function ModalOverlay(props){
    const content = (
        <div className= {`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
            <h2>
                {Response.header}
            </h2>
        </header>
        <form
            onSubmit={props.onSubmit? props.onSubmit : e => e.preventDefault()}
        >
            <div className ={`modal__content ${props.contentClass}`}>
                {props.children}
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>
        </form>
    </div>

    )
    
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

export default function Modal(props) {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancle}/>}
            <CSSTransition
                in ={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames ="modal"
            >
                <ModalOverlay {...props}/>
            </CSSTransition>
        </React.Fragment>
    )
}
