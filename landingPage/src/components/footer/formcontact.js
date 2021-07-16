import React, { Component } from 'react';

class formcontact extends Component {
    render() {
        return (
            <section className="section section-lg bg-gray-1 text-center" id="get-in-touch" data-type="anchor">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-9 col-lg-7">
        <h3>Get in Touch</h3>
        {/* RD Mailform*/}
        <form className="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php" noValidate="novalidate">
          <div className="form-wrap">
            <input className="form-input form-control-has-validation" id="contact-name" type="text" name="name" data-constraints="@Required" /><span className="form-validation" />
            <label className="form-label rd-input-label" htmlFor="contact-name">Your Name</label>
          </div>
          <div className="form-wrap">
            <input className="form-input form-control-has-validation" id="contact-email" type="email" name="email" data-constraints="@Email @Required" /><span className="form-validation" />
            <label className="form-label rd-input-label" htmlFor="contact-email">E-mail</label>
          </div>
        
          <div className="form-wrap">
            <label className="form-label rd-input-label" htmlFor="contact-message"> Message</label>
            <textarea className="form-input form-control-has-validation form-control-last-child" id="contact-message" name="message" data-constraints="@Required" defaultValue={""} /><span className="form-validation" />
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-7 col-lg-5">
              <button className="button button-block button-lg button-primary" type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

        );
    }
}

export default formcontact;