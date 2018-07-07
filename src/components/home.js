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
                    <a href="#" className="btn btn--white">Discover Tours</a>
                </div>
            </div>
            <main>
                <section className="section-about">
                    <div className="u-center-text">
                        <h2 className="heading-secondary">Exciting tours for adventous people</h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            Text
                        </div>
                        <div className="col-1-of-2">
                            Image
                        </div>
                    </div>

                </section>
            </main>
        </div>

    );

}