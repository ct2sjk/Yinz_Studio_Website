import React, { useRef, useState } from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const object: Record<string, string> = {};
    formData.forEach((value, key) => {
      object[key] = value as string;
    });
    const json = JSON.stringify(object);

    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await response.json();
      setResult(data.message);
    } catch (error) {
      setResult("Something went wrong!");
    }

    form.reset();
    setTimeout(() => setResult(""), 5000);
  };

  return (
    <div className="contact-form-bg">
      <div className="contact-form-container">
        <h1 className="contact-form-title">Contact Us</h1>
        <p className="contact-form-desc">
          Fill out the form below to send us a message.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="15eed754-23c2-4c5c-bf18-3e5e1155e99f" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <label htmlFor="name" className="contact-form-label">Full Name</label>
          <input type="text" name="name" id="name" placeholder="John Doe" required className="contact-form-input" />

          <label htmlFor="email" className="contact-form-label">Email Address</label>
          <input type="email" name="email" id="email" placeholder="you@company.com" required className="contact-form-input" />

          <label htmlFor="phone" className="contact-form-label">Phone Number</label>
          <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="contact-form-input" />

          <label htmlFor="message" className="contact-form-label">Your Message</label>
          <textarea rows={5} name="message" id="message" placeholder="Your Message" required className="contact-form-textarea"></textarea>

          <button type="submit" className="contact-form-btn">
            Send Message
          </button>
          <p className="contact-form-result">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;