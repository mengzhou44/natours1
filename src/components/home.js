import React from 'react';

export default (props) => {
    return (
        <div>
            <div className='header'>
                <div className="header--logo-box">
                    <img src="img/logo-white.png" alt="logo" className="header--logo" />
                </div>
                <div className="header--text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Outdoors </span>
                        <span className="heading-primary--sub">is where life happens</span>
                    </h1>
                </div>
            </div>
        </div>

    );

}