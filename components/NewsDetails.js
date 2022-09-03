import React,{ Component } from 'react';

export default class NewsDetails extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details__main">
                                <div className="blog-details__image">
                                    <img src="/assets/images/blog/blog-d-1-1.jpg" alt="" />
                                </div>
                                <div className="blog-details__content">
                                    <ul className="blog-one__meta list-unstyled">
                                        <li><a href="#">22 Mar, 2020</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3>Can Face Mask protect me From Coronavirus?</h3>
                                    <p>There are many variations of passages of available but majority have alteration
                                        in some by
                                        inject humour or random words. There are many variations of passages of Lorem
                                        Ipsum
                                        available, but the majority have suffered alteration in some form, by injected
                                        humour, or
                                        randomised words which don't look even slightly believable. If you are going to
                                        use a
                                        passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                                        hidden in the
                                        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                                        predefined
                                        chunks as necessary, making this the first true generator on the Internet. It
                                        uses a
                                        dictionary of over 200 Latin words, combined with a handful of model sentence
                                        structures, to
                                        generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
                                        therefore always
                                        free from repetition, injected humour, or non-characteristic words etc.</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a
                                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, as opposed to using 'Content here,
                                        content
                                        here', making it look like readable English. Many desktop publishing packages
                                        and web page
                                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                        ipsum' will
                                        uncover many web sites still in their infancy. Various versions have evolved
                                        over the years,
                                        sometimes by accident, sometimes on purpose injected humour and the like.</p>
                                </div>
                                <div className="blog-details__meta">
                                    <div className="blog-details__tags">
                                        <span>Tags: </span> <a href="#">Coronavirus,</a> <a href="#">Prevention,</a> <a
                                        href="#">Facemask</a>
                                    </div>
                                    <div className="blog-details__share">
                                        <a href="#" className="fab fa-facebook-square"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-instagram"></a>
                                        <a href="#" className="fab fa-pinterest-p"></a>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-author">
                                <div className="blog-author__image">
                                    <img src="/assets/images/blog/author-1-1.jpg" alt="" />
                                </div>
                                <div className="blog-author__content">
                                    <h3>Christine Eve </h3>
                                    <p>Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry
                                        dummy text
                                        ever sincer condimentum purus.</p>
                                </div>
                            </div>
                            <div className="comment-one">
                                <h3 className="comment-one__block-title">2
                                    Comments</h3>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="/assets/images/blog/comment-1-1.jpg" alt="" />
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Eugenia Floyd</h3>
                                        <p className="comment-one__date">20 Mar, 2020 <span>.</span> 4:00 pm</p>
                                        <p>Lorem Ipsum is simply dummy free text of the available printing and
                                            typesetting been the
                                            industry standard dummy text ever sincer condimentum purus.</p>
                                    </div>
                                    <a href="#" className="thm-btn comment-one__btn">Reply</a>
                                </div>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="/assets/images/blog/comment-1-2.jpg" alt="" />
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Nellie Hanson</h3>
                                        <p className="comment-one__date">20 Mar, 2020 <span>.</span> 4:00 pm</p>
                                        <p>Lorem Ipsum is simply dummy free text of the available printing and
                                            typesetting been the
                                            industry standard dummy text ever sincer condimentum purus.</p>
                                    </div>
                                    <a href="#" className="thm-btn comment-one__btn">Reply</a>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3 className="comment-one__block-title">Leave a
                                    Comment</h3>
                                <form action="#" className="contact-form-validated contact-one__form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" name="name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email Address" name="email" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Phone Number" name="phone" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Subject" name="subject" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Write Message" name="message"></textarea>
                                        </div>
                                        <div className="col-lg-12 text-left">
                                            <button type="submit" className="thm-btn contact-one__btn">Submit Comment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__search">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="text" name="search" placeholder="Search here..." />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Latest Posts</h3>
                                    <div className="sidebar__post-wrap">
                                        <div className="sidebar__post__single">
                                            <div className="sidebar__post-image">
                                                <div className="inner-block"><img src="/assets/images/blog/lp-1-1.jpg"
                                                                                  alt="Awesome Image" /></div>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h4 className="sidebar__post-title"><a href="#">Can Face Mask Protect
                                                    me from Coronavirus?</a></h4>
                                            </div>
                                        </div>
                                        <div className="sidebar__post__single">
                                            <div className="sidebar__post-image">
                                                <div className="inner-block"><img src="/assets/images/blog/lp-1-1.jpg"
                                                                                  alt="Awesome Image" /></div>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h4 className="sidebar__post-title"><a href="#">Can Face Mask Protect
                                                    me from Coronavirus?</a></h4>
                                            </div>
                                        </div>
                                        <div className="sidebar__post__single">
                                            <div className="sidebar__post-image">
                                                <div className="inner-block"><img src="/assets/images/blog/lp-1-3.jpg"
                                                                                  alt="Awesome Image" /></div>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h4 className="sidebar__post-title"><a href="#">Can Face Mask Protect
                                                    me from Coronavirus?</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Categories</h3>
                                    <ul className="sidebar__category-list">
                                        <li className="sidebar__category-list-item"><a href="#">Coronavirus</a></li>
                                        <li className="sidebar__category-list-item"><a href="#">Virus Thread</a></li>
                                        <li className="sidebar__category-list-item"><a href="#">Corona Spread</a></li>
                                        <li className="sidebar__category-list-item"><a href="#">Face Mask</a></li>
                                        <li className="sidebar__category-list-item"><a href="#">Hand Wash Procedure</a>
                                        </li>
                                        <li className="sidebar__category-list-item"><a href="#">Virus Prevention</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">Tags</h3>
                                    <ul className="sidebar__tags-list">
                                        <li className="sidebar__tags-list-item"><a href="#">Coronavirus,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Prevention,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Facemask,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Handwashing,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Virus,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">COVID19,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Coronaspread,</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}