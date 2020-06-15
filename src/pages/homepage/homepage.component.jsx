import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component.jsx';



const HomePage = () => {


    return (
<div className="homepage">
    <div className="directory-menu">
        <Directory /> 
    </div>
</div>
    );
}

export default HomePage;