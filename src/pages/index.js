import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <form
      className="contact__wrapper__inner__form"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="contact__wrapper__inner__form__section">
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          required
        ></input>
        <input
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          required
        ></input>
      </div>
      <input
        type="text"
        placeholder="Subject"
        name="title"
        id="title"
        required
      ></input>
      <textarea
        placeholder="Message"
        name="message"
        id="message"
        required
      ></textarea>
      <div className="contact__wrapper__inner__form__btn">
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>

    <div>
      <a
        href="static/pdfs/netlify-enterprise-performance-site-performance.pdf"
        download
      >
        <p>download pdf</p>
        <p>testing</p>
      </a>
    </div>
  </Layout>
)

export default IndexPage
