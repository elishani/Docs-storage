import React from 'react';
import DocsNavbar from "../components/DocsNavbar";

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { activeUser } = this.props;
        return (
            <div>
                <DocsNavbar activeUser={activeUser} />
                <h1>HomePage</h1>
            </div>
        );
    }

}

export default HomePage;