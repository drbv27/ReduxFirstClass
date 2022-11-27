import React from 'react'

import Header from './header'

function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <main className="main">
                {props.children}
            </main>

        <footer>
            Footer de mi pagina
        </footer>
        </React.Fragment>
    )
}
export default Layout