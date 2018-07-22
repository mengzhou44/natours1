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

                    <div className="u-center-text u-margin-top-huge">

                        <a href="#" className="btn btn--green">Discover all tours</a>

                    </div>
                </section>
                <section className="section-stories">
                    <div className="bg-video">
                        <video className="bg-video__content" autoPlay muted loop >
                            <source src="img/video.mp4"   type="video/mp4" />
                            <source src="img/video.webm"  type="video/webm" />
                            Your browser is not supported!
                          </video>
                    </div>
                    <div className="u-center-text u-margin-bottom-medium">
                        <h2 className="heading-secondary">We make people genuinely happy</h2>
                    </div>
                    <div className="row">
                        <div className="story">
                           <figure className="story__shape">
                            <img src="img/nat-8.jpg" alt="story image" className="story__img" />
                            <figcaption className="story__caption">Mary Smith</figcaption>
                           </figure>
                           <div className="story__text">
                           <h3 className="heading-tertiary u-margin-bottom-small">
                              I had the best week ever with my family
                           </h3>
                            <p>
                            ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea
                            ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptas ea
                       
                            </p>
                           </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="img/nat-9.jpg" alt="Person on a tour" className="story__img" />
                            <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">Read all stories &rarr;</a>
                </div>
                </section>
                <section className="section-book">
                   <div className="row">
                   <div className="book">
                        <div className="book__form">
                        <div class="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>
                        <form action="#" className="form">
                           <div className="form__group">
                              <input type="text" className="form__input" placeholder="Full Name"  required id="name" />
                              <label htmlFor="name"  className="form__label">Full name</label>
                           </div>

                            <div className="form__group">
                              <input type="email" className="form__input" placeholder="Email"  required id="email" />
                              <label htmlFor="email"  className="form__label">Email</label>
                           </div>

                              <div className="form__group u-margin-bottom-medium">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size" />
                                        <label for="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>

                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="large" name="size" />
                                        <label for="large" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                             </div>
                                
                             <div className="form__group">
                                    <button className="btn btn--green">Next step &rarr;</button>
                                </div>
                        </form>
                        </div>
                   </div>
                   </div>
            </section>
            </main>
          <footer className="footer">
             <div className="footer__logo-box">
               <img src="img/logo-green-2x.png" alt="" className="footer__logo" />
             </div>
             <div className="row">
             <div className="col-1-of-2">
                <div className="footer__navigation">
                 <ul className="footer__list">
                    <li className="footer__item">
                         <a href="#" className="footer__link">Company</a>
                    </li>
                    <li className="footer__item">
                         <a href="#" className="footer__link">Contact</a>
                    </li>
                    <li className="footer__item">
                         <a href="#" className="footer__link">Career</a>
                    </li>
                    <li className="footer__item">
                         <a href="#" className="footer__link">Privacy</a>
                    </li>
                    <li className="footer__item">
                         <a href="#" className="footer__link">Terms</a>
                    </li>
                 </ul>
                 </div>
             </div>
             <div className="col-1-of-2">
                <p className="footer__copyright">
                       Built by <a href="#" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" class="footer__link">Advanced CSS and Sass</a>.
                        Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                        Schmedtmann, is of course highly appreciated!
                </p>
             </div>
             </div>
           
          </footer>
            
        </div>

    );

}