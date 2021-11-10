import React, { Component } from "react";
import "./Header.css";
import config from '../../../config/config';
import image from '../../../background.jpg'
import Blogs from '../../../api/Blog';

export class Header extends Component {
  state = {
    Blogs: []
  };
  componentDidMount() {
    Blogs().then(res => {
      this.setState({ Blogs: res.data });
    });
  }
  render() {
    if (this.state.Blogs == null) return (<div>Loading...</div>);

    let blogs = this.state.Blogs.slice(0, 6).map((blog, index) => {
      return (
        <a style={{ color: "white", fontSize: "20px", paddingTop: "5px" }} key={index} href={blog.link}>
          {`< ${blog.title.rendered} >`}
        </a>
      );
    });
    return (
      <header
        style={{
          height: window.screen.height,
          backgroundImage: "url(" + image + ")",
          backgroundPosition: "0px 0px"
        }}
        id="fh5co-header"
        className="fh5co-cover"
        role="banner"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container" style={{ paddingTop: "250px" }}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="">
                <div
                  className="display-tc animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div className="profile-thumb"></div>
                  <h1 style={{ fontSize: "55px" }}>
                    <span>Avaneesa Basappa</span>
                  </h1>
                  <h3>
                    <span>Software Developer / Life Long Learner</span>
                  </h3>
                  <div style={{ marginTop: "20px" }}>
                    <a href={config.twitterLink} target="_blank" rel="noopener noreferrer">
                      <img alt="twitter" src={config.twitterIcon}></img>
                    </a>
                    <a
                      href={config.linkedInLink}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img alt="linkedin" src={config.linkedinIcon}></img>
                    </a>
                    <a href={config.gitHubLink} target="_blank" rel="noopener noreferrer">
                      <img alt="github" src={config.githubIcon}></img>
                    </a>
                  </div>
                  <h3 style={{ paddingTop: "20px" }}>
                    <a
                      href={config.blogLink}
                      target="_blank" rel="noopener noreferrer"
                      style={{ color: "white", fontSize: "25px" }}
                    >
                      My Blog
                    </a>

                  </h3>
                  <h3 style={{ paddingTop: "10px", fontSize: "20px" }}>Latest Blog Posts</h3>
                  {blogs}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
