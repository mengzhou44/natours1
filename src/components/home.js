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
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world" />
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Explore the wolrd
                            </h3>
                                <p className="feature-text-box">
                                    ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea
                            </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-compass" />
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Meet the nature
                            </h3>
                                <p className="feature-text-box">
                                    ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea
                            </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-map" />
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Find your way
                            </h3>
                                <p className="feature-text-box">
                                    ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea
                            </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-heart" />
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Live healthy life
                            </h3>
                                <p className="feature-text-box">
                                    ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea
                            </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-tours">
                    <div className="u-center-text">
                        <h2 className="heading-secondary u-margin-bottom-medium"> Most popular tours</h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture-1">
                                        &nbsp;
                                  </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>3 day tours</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>Sleep in cozy hotels</li>
                                            <li>Difficulty: easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$297</p>
                                        </div>
                                        <a href="#popup" className="btn btn--white">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture-2">
                                        &nbsp;
                                </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>7 day tours</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: medium</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$497</p>
                                        </div>
                                        <a href="#popup" className="btn btn--white">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture-3">
                                        &nbsp;
                                </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>5 day tours</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: hard</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$897</p>
                                        </div>
                                        <a href="#popup" className="btn btn--white">Book now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="u-center-text u-margin-top-huge">
                        <a href="#" class="btn btn--green">Discover all tours</a>
                    </div>
                </section>
            </main>
        </div>

    );

}