import React, { useRef, useState } from "react";
import { RiContactsFill } from "react-icons/ri";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await emailjs.sendForm("service_2zzely2", "template_uko8ltg", formRef.current, { 
        publicKey: "Rcm6Ek-oma_LcijNB",
      });
      console.log("SUCCESS!");

      
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error.text);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact_content_header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form
            className="contact_content_form"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div className="contact_content_form_controlWrapper">
              <div>
                <input
                  required
                  type="text"
                  className="inputName"
                  name="from_name"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  type="text"
                  className="inputEmail"
                  name="from_email"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  className="inputDescription"
                  name="message"
                  rows={5}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Message
                </label>
              </div>
            </div>
            <input
              className="button"
              type="submit"
              value={submitting ? "Submitting..." : "Submit"}
              disabled={submitting}
            />
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
