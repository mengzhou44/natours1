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
                        <h2 className="heading-secondary u-margin-bottom-big">Exciting tours for adventous people</h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">You are going to fall love with the nature</h3>
                            <p className="paragraph">
                                ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea necessitatibus corrupti fugiat delectus ullam harum, minus unde aperiam minima excepturi. Enim, voluptates architecto. Magni error temporibus asperiores dolor.
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                            <p className="paragraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea necessitatibus corrupti fugiat delectus ullam harum, minus unde aperiam minima excepturi. Enim, voluptates architecto. Magni error temporibus asperiores dolor.
                            </p>
                            <a href="#" className="btn-text">Learn more&rarr;</a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src="img/nat-1-large.jpg" alt="photo1" className="composition__photo  composition__photo--p1" />
                                <img src="img/nat-2-large.jpg" alt="photo2" className="composition__photo  composition__photo--p2" />
                                <img src="img/nat-3-large.jpg" alt="photo3" className="composition__photo  composition__photo--p3" />
                            </div>
                        </div>
                    </div>

                </section>

                <section className="section-features">
                  
                    <div className="row">
                        <div class="col-1-of-4">
                            <div className="feature-box">
                            <i className="icon-basic-world" />
                            <h3 className="heading-tertiary">
                               Explore the wolrd
                            </h3>
                             <p className="feature-text-box">
                             ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea necessitatibus corrupti fugiat delectus ullam harum, minus unde aperiam minima excepturi. Enim, voluptates architecto. Magni error temporibus asperiores dolor.
            
                            </p>
                            </div>
                        </div>

                        <div class="col-1-of-4">
                            <div className="feature-box">
                            </div>
                        </div>
                        <div class="col-1-of-4">
                            <div className="feature-box">
                            </div>
                        </div>

                        <div class="col-1-of-4">
                            <div className="feature-box">
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    );

}