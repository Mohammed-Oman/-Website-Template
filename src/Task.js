import React, { useState } from "react";
import "./App.css";

function Task() {
  const [toggle,set_toggle] =useState(false)
  return (
    <div className="main">
      <script src="js/addons/rating.js"></script>
      <script src="https://unicons.iconscout.com/release/v4.0.8/script/monochrome/bundle.js" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release-pro/v4.0.0/css/solid.css"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />
      <meta name="viewport" content="width-device-width,initial-scale=1.0"></meta>
       
      <div
        className="col-lg-12 col-md-12 col-sm-12 col-xs-12 section1"
        style={{ background: "black" }}
      >
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12 text-center px-1 top">
            <p className="top-banner-text px-1 pt-2 text-white">
              This is an educational{" "}
              <span style={{ color: "orange" }}>HTML CSS</span> template by
              Template website.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="pt-2 top-banner-icon">
            <ul>
              <li><img className="facebook" src="/images/img11.png" alt="frgg"></img></li>
              <li>  
              <img className="twitter" src="/images/img20.png"></img></li>
              <li> <img className="bee" src="/images/behance.svg"></img></li>
              <li>
              <img className="linkedin" src="/images/linkedin.svg"></img></li>
            </ul>
             </div>
             </div>
             </div>

      {/* SECTION2 */}
      <div className="section2">

      
        
        <nav className="navbar navbar-expand- bg-white bg-opacity-25 px-4 navexpand">
          <h3 className="navbar-brand text-white px-5 meeting "> EDU MEETING</h3>
          <button className="navbar-toggler collapsed btn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>set_toggle(!toggle)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          
        </nav>
        <div className="collapse navbar-collapse justify-content-center text-center px-5" id="navbarSupportedContent"
                     style={ toggle ? { display: 'block' } : { display: 'none' }}
                    >
            <ul className="navbar-nav mr-auto px-5">
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <b>HOME</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <b>MEETINGS</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <b>APPLYNOW</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <b>PAGES</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <b>COURSES</b>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white">
                  <b>CONTACT US</b>
                </a>
              </li>
            </ul>
          </div>
        <div className="container pt-5 
         text-white">
          <h4 className="pt-5 s2-box-hello"> HELLO STUDENTS</h4>
          <p className="s2-box-text">WELCOME TO EDUCATION</p>
          <p className="s2-text">
            Reboot builds upon Normalize, providing many{" "}
            <span style={{ color: "blue" }}>HTML elements</span>
            <br></br>
            with somewhat opinionated styles using only element{" "}
            <span style={{ color: "blue" }}> selectors.</span>
          </p>
          <br></br>
          <button
            type="button"
            className="rounded-pill text-white  bg-danger text-white"
            id="A1"
          >
            JOIN US NOW
          </button>
          <br></br>
          <br></br>
        </div>
      </div>
      {/* SECTION2 CLOSE */}
      {/* Middle content */}
      <div id="carosalCards" className="carousel slide" data-ride="carousel">
        <div className="container">
          <div className="carousel-inner px-5">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 carousel-box1">
                  <div
                    className="card carousel-boxes-s2"
                    style={{ border: "none", textAlign:"center",height: 200}}
                  >
                    <div className="card-body text-center bg-danger text-white rounded carousel-boxes-s2">
                      <img
                        src="/images/study.svg"
                        alt="Study"
                        style={{ height: 40 }}
                      ></img>
                      <h5 className="card-title text-center">Best Education</h5>
                      <p className="card-text text-center">
                        “Education is the kindling of a flame, not the filling
                        of a vessel,it is Not the Filling of a Pail, but the
                        Lighting of a Fire.” <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 carousel-box1">
                  <div
                    className="card best"
                    style={{  border: "none", textAlign:"center", height: 200}}
                  >
                    <div className="card-body text-center bg-danger text-white rounded">
                      <img
                        src="/images/study.svg"
                        alt="Study"
                        style={{ height: 40 }}
                      ></img>
                      <h5 className="card-title text-center">Best Teacher</h5>
                      <p className="card-text text-center">
                        "A good teacher continues to provide good answers to
                        their students,a good always encourage students to learn
                        new things." <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 carousel-box1">
                  <div
                    className="card"
                    style={{ border: "none", textAlign:"center", height: 200}}
                  >
                    <div className="card-body text-center bg-danger text-white rounded">
                      <img
                        src="/images/study.svg"
                        alt="Study"
                        style={{ height: 40 }}
                      ></img>
                      <h5 className="card-title text-center">Best Student</h5>
                      <p className="card-text text-center">
                        "Teachers can open the door, but you must enter it
                        yourself, teacher shows us a way but we have to walk
                        through it."<br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carosalCards"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carosalCards"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* Middle content close */}

      {/* SECTION3 */}

      <div className="section_three  bg-black pt-5">
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <h1 className="text-className text-center text-white pt-3">
          <b>UPCOMING MEETING</b>
        </h1>
        <div className="pt-5"></div>
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 cardsSection">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 firstcard">
              <div className="container">
                <div className="card " style={{ height: 520,height:"auto",marginBottom:20 }} id="cc1">
                  <div className="card-body rounded" id="CB1">
                    <h4 className="card-title">Meeting categories</h4>
                    <br></br>
                    <br></br>
                    <p className="card-text ">Meeting Scheduled</p>
                    <br />
                    <p className="card-text ">Meeting On-Going</p>
                    <br></br>
                    <p className="card-text ">Meeting End</p>
                    <br></br>
                    <p className="card-text ">Meeting In-Process</p>
                    <br></br>
                    <p className="card-text ">Meeting About-end</p>
                    <br></br>
                    <button
                      type="button"
                      id="Ubtn1"
                      className="rounded-pill text-white p-3 mb-2 bg-danger text-white"
                    >
                      ALL UPCOMING MEETINGS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 upcoming-cards upcoming-cards-fRow">
              <div className="card" style={{ height: 420,height:"auto",marginBottom:20}} id="cc4">
                <div className="rateTag">
                  <p style={{ color: "black" }}>$22.00</p>
                </div>
                <img
                  className="card-img-top"
                  src="/images/img1.jpg"
                  alt="Card  cap"
                ></img>
                <div className="card-body newlecture">
                  <div className="row">
                    <div className="col-md-2" id="jan">
                      <p>
                        <b>NOV</b>
                      </p>
                      <p id="num1">
                        <b>24</b>
                      </p>
                    </div>
                    <div className="col-md-10" id="on">
                      <h4 className="card-title text-left">New Lecture Meeting</h4>
                      <p className="card-text text-left">
                        My lecture is started,please attend my session.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 upcoming-cards upcoming-cards-fRow-box2">
              <div className="card " style={{ height: 420,height:"auto",marginBottom:20}} id="cc5">
                <div className="rateTag">
                  <p style={{ color: "black" }}>$22.00</p>
                </div>
                <img
                  className="card-img-top"
                  src="/images/img1.jpg"
                  alt="Card  cap"
                ></img>
                <div className="card-body lecture">
                  <div className="row">
                    <div className="col-md-2" id="jan">
                      <p>
                        <b>NOV</b>
                      </p>
                      <p id="num1">
                        <b>24</b>
                      </p>
                    </div>
                    <div className="col-md-10" id="on">
                      <h4 className="card-title text-left">New Lecture Meeting</h4>
                      <p className="card-text text-left">
                        My lecture is started,please attend my session.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-5">{/*style={{marginTop:-50}} */}
            <div className="col-md-4 upcoming-cards-sRow"></div>
            <div className="col-md-4 upcoming-cards upcoming-cards-row-card">
              <div className="card" style={{ height: 420,height:"auto",marginBottom:20}} id="cc6">
                <div className="rateTag">
                  <p style={{ color: "black" }}>$36.00</p>
                </div>
                <img
                  className="card-img-top"
                  src="/images/img1.jpg"
                  alt="Card cap"
                ></img>
                <div className="card-body session">
                  <div className="row">
                    <div className="col-md-2" id="feb">
                      <p>
                        <b>NOV</b>
                      </p>
                      <p id="num2">
                        <b>25</b>
                      </p>
                    </div>
                    <div className="col-md-10" id="no">
                      <h4 className="card-title text-left">New Lecture Meeting</h4>
                      <p className="card-text text-left">
                        My lecture is on-going,please join the session.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 upcoming-cards upcoming-cards-row-card">
              <div className="card upcoming-row-card-width" style={{ height: 420,height:"auto",marginBottom:20}} id="cc8">
                <div className="rateTag">
                  <p style={{ color: "black" }}>$48.00</p>
                </div>
                <img
                  className="card-img-top"
                  src="/images/img1.jpg"
                  alt="Card cap"
                ></img>
                <div className="card-body recordings">
                  <div className="row">
                    <div className="col-md-2" id="nov">
                      <p>
                        <b>NOV</b>
                      </p>
                      <p id="num4">
                        <b>27</b>
                      </p>
                    </div>
                    <div className="col-md-10 pb-5" id="new">
                      <h4 className="card-title text-left">New Lecture Meeting</h4>
                      <p className="card-text text-left">
                        My lecture has end,get the recordings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION3 CLOSE*/}

      {/* SECTION4 */}

      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <div className="section4">
          <div className="container">
            <div className="row"  id="cc9">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6 pt-5 section4-boxes" >
                <div className="row pt-3">
                  <div className="card apply1 text-white" id="cc10">
                    <div className="card-body pt-5">
                      <h5 className="for">
                        <b>APPLY FOR BACHELOR DEGREE</b>
                      </h5>
                      <br></br>
                      <p className="take card-text">
                        “Take the attitude of a student, never be too big to ask
                        questions, never know too much to learn something new.”
                      </p>
                      <br></br>
                      <button
                        type="button"
                        className="rounded-pill text-white  bg-danger text-white"
                        id="cc11"
                      >
                        JOIN US NOW
                      </button>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="card apply " id="cc12">
                    <div className="card-body pt-5 text-white">
                      <h5 className="degree">
                        <b>APPLY FOR BACHELOR DEGREE</b>
                      </h5>
                      <br></br>
                      <p className="card-text">
                        “The secret of success is learning how to use pain and
                        pleasure instead of having pain and pleasure use you."{" "}
                      </p>
                      <br></br>
                      <button
                        type="button"
                        className="rounded-pill text-white  bg-warning text-white"
                        id="cc13"
                      >
                        JOIN US NOW
                      </button>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6 pt-5 secret ">
                <div className="card" id="cc14">
                  <div className="card-body" id="CC14">
                    <h6 className="text-center text-warning" id="A1">
                      <b>About Edu Meeting HTML Template.</b>
                    </h6>
                    <br></br>
                    <p className="card-text text-center">
                      “The secret of success is learning how to use pain and
                      pleasure instead of having pain and pleasure use you. Take
                      the attitude of a student, never be too big to ask
                      questions, never know too much to learn something."{" "}
                    </p>
                    <br></br>
                    <h5 className="html text-black">
                      <b>HTML CSS bootstrap Layout.</b>
                    </h5>
                    <p className="card-text">
                      "Education is the tool that breaks down all barriers."
                    </p>
                    <br></br>

                    <h5 className="please text-black">
                      <b>Please tell your friends.</b>
                    </h5>
                    <p className="card-text">
                      "Education is the tool that breaks down all barriers."
                    </p>
                    <br></br>
                    <h5 className="share text-black">
                      <b>Share this to your colleagues.</b>
                    </h5>
                    <p className="card-text">
                      "Education is the tool that breaks down all barriers."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION4 CLOSE */}

      {/* SECTION5 */}

      <div className="section5">
        <div className="container">
          <h4 className="abc text-white pt-5" id="btn5">
            <b>OUR POPULAR COURSES</b>
          </h4>

          <div className="acd col-sm-12 col-md-12 col-lg-12 col-xs-12 pt-5">
            <div className="pt-5"></div>
            <div id="carosal_cards" className="carousel" data-ride="carousel">
              <div className="container">
                <div className="carousel-inner  px-5">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 carousel-box1 carousel-box1-height">
                        <div className="card" id="cc15" style={{ height: 350,height:"auto" }}>
                          <img
                            className="card-img-top"
                            src="/images/img4.jpg"
                            alt="card cap"
                          ></img>
                          <div className="card-body">
                            <h4 className="panel text-center" id="cc16">
                              <b>Please visit our website again</b>
                            </h4>
                            <br></br>
                            <div className="moon">
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <span className="p1" id="pp1">
                                <b>$360</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 pt-1 carousel-box1 ">
                        <div className="card" id="cc17" style={{ height: 350,height:"auto" }}>
                          <img
                            className="card-img-top"
                            src="/images/img4.jpg"
                            alt="card cap"
                          ></img>
                          <div className="card-body">
                            <h4 className="panel1 text-center" id="cc18">
                              <b>Responsive HTML Template</b>
                            </h4>
                            <br></br>
                            <div className="moon">
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <span className="p2" id="pp2">
                                <b>$400</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 pt-1 carousel-box1">
                        <div className="card" id="cc19" style={{ height: 350,height:"auto" }}>
                          <img
                            className="card-img-top"
                            src="/images/img4.jpg"
                            alt="card cap"
                          ></img>
                          <div className="card-body">
                            <h4 className="panel2 text-center" id="cc20">
                              <b>Download free CSS layouts for your buisness</b>
                            </h4>
                            <br></br>
                            <div className="moon">
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <span className="p3" id="pp3">
                                <b>$430</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 pt-1 carousel-box1">
                        <div className="card" id="cc21" style={{ height: 350,height:"auto" }}>
                          <img
                            className="card-img-top"
                            src="/images/img4.jpg"
                            alt="card cap"
                          ></img>
                          <div className="card-body">
                            <h4 className="panel3 " id="cc22">
                              <b>Morbi in libero blandit lectus</b>
                            </h4>
                            <br></br>
                            <div className="moon">
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                className="fa fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <span className="p4" id="pp4">
                                <b>$480</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carosalCards"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carosalCards"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION5 CLOSE */}

      {/* SECTION6 */}

      <div className="section6">
        <div className="container">
          <h1 className="about text-white pt-5">
            <b>
              A Few Facts About Our<br></br>
              University
            </b>
          </h1>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6 awards">
                <div className="row ">
                  <div className="col-md-4 mt-4 few-facts-box align-few-facts-box1">
                    <div className="card" id="SM">
                      <div className="card-body text-center ">
                        <h5 className="ss1 text-warning few-facts-card-text">
                          <b>94% </b>
                        </h5>
                        <p className="card-text text-white few-facts-card-text">Successed Students</p>
                        <br></br>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-1 align-few-facts-box2">
                    <div className="card mt-5 left-padded-boxes" id="SM1">
                      <div className="card-body text-center"style={{paddingTop:30}}>
                        <h5 className="ss2 text-warning few-facts-card-text">
                          <b>2345 </b>
                        </h5>
                        <p className="card-text text-white few-facts-card-text">New Students</p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                 
                 
                </div>
                <div className="row">
                  <div className="current col-md-4 few-facts-box align-few-facts-box3">
                    <div className="card" id="SM2">
                      <div className="card-body text-center"style={{paddingTop:30 }}>
                        <h5 className="ss3 text-warning few-facts-card-text">
                          <b>126</b>
                        </h5>
                        <p className="card-text text-white few-facts-card-text">Current Teachers</p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 c-box1 align-few-facts-box4">
                    <div className="card mt-3 left-padded-boxes"id="SM3">
                      <div className="card-body text-center"style={{paddingTop:30}}>
                        <h5 className="ss4 text-warning few-facts-card-text">
                          <b>32 </b>
                        </h5>
                        <p className="card-text text-white few-facts-card-text">Awards</p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img4 col-md-6 mt-5">
                <div className="card bg-white" id="ss10">
                  <img
                    className="card-img section4-img"
                    src="/images/img28.jpg"
                    alt="card cap"
                  ></img>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      {/* SECTION6 CLOSE */}

      {/* SECTION7 */}

      <div className="section7 pb-5 pt-5">
        <div className="sec7 col-sm-12 col-md-12 col-lg-12 col-xs-12 pb-5 pt-5">
          <div className="container">
            <div className="row pt-3">
              <div className="col-md-8 pt-4">
                <div className="card pt-4 mb-4" id="m1">
                  <div className="card-body letsget pt-3 pr-4">
                    <h4 className="ss18">LETS GET IN TOUCH</h4>

                    <ul className="nav  justify-content-between fs-6 " id="m2">
                      <li className="nav-item float-right pt-5 pr-5">
                        <a href="#" className="nav-link text-black ">
                          YOUR NAME
                        </a>
                      </li>
                      <li className="nav-item pt-5">
                        <a href="#" className="nav-link text-black">
                          YOUR EMAIL
                        </a>
                      </li>
                      <li className="nav-item pt-5 mr-5">
                        <a href="#" className="nav-link text-black">
                          SUBJECT
                        </a>
                      </li>
                    </ul>
                    <br></br>
                    <br></br>
                    <ul className="lap" id="pa1">
                      <li>YOUR MESSAGE</li>{" "}
                    </ul>
                    <br></br>
                  
                    <button
                      type="button"
                      className="rounded-pill text-white  bg-danger text-white"
                      id="m4"
                    >
                      SEND MESSAGE NOW
                    </button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card" id="ss16" style={{ height: 450 }}>
                  <div className="card-body bg-danger text-white ml-4" id="ss17">
                    <h6 className="ss15">
                      <b>Phone Number </b>
                    </h6>
                    <p className="card-text">
                      <b>010-020-030-040</b>
                    </p>
                    <br></br>
                    <br></br>
                    <h6 className="ss15">
                      <b>Email-Address</b>
                    </h6>
                    <p className="card-text">
                      <b>info@edu.com</b>
                    </p>
                    <br></br>
                    <br></br>
                    <h6 className="ss15">
                      <b>Street Address</b>
                    </h6>
                    <p className="card-text">
                      <b>2nd street layout 22-2526 newyork</b>
                    </p>
                    <br></br>
                    <br></br>
                    <h6 className="ss15">
                      <b>Web-site url</b>
                    </h6>
                    <p className="card-text">
                      <b>www.meeting.edu</b>
                    </p>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION7 CLOSE */}

      {/* SECTION8  */}
      <div className="section8 text-white text-center" id="L1">
        <p>
          COPYRIGHT@2022 EDU MEETING CO.LTD.ALL RIGHTS RESERVED<br></br>
          DESIGN:<span style={{ color: "yellow" }}>TEMPLATEMO</span>
        </p>
      </div>

      {/* SECTION8 CLOSE */}
    </div>
    </div>
  );
}
export default Task;
