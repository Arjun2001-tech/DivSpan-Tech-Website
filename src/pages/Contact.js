
import { useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  Send
} from 'lucide-react';

import { site } from '../config/site';
import { addEnquiry } from '../services/localStore';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: ''
  });

  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setError('');
    setSent(false);
  };

  const submit = async (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setError('Please complete your name, email and project details.');
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      form.email.trim()
    );

    if (!emailValid) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Save enquiry for Admin page
      addEnquiry({
        ...form,
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        createdAt: new Date().toISOString(),
        status: 'New'
      });

      // TODO: Connect EmailJS or your backend email API here.
      // Email is NOT sent until this integration is configured.

      setSent(true);

      setForm({
        name: '',
        email: '',
        service: 'Website Development',
        message: ''
      });
    } catch (err) {
      console.error('Enquiry submission failed:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">CONTACT US</span>
          <h1>
            Let's talk about
            <br />
            <em>what's next.</em>
          </h1>
          <p>
            Share a little about your project. We'll take it from there.
          </p>
        </div>
      </section>

      <section className="section container contact-layout">
        <div className="contact-info">
          <span className="eyebrow">START A CONVERSATION</span>

          <h2>
            Have a question
            <br />
            or an idea?
          </h2>

          <p>
            Tell us what you need, what you're trying to improve
            or what you'd like to build. We'll discuss a practical next step.
          </p>

          <a href={`mailto:${site.email}`}>
            <span><Mail /></span>
            <div>
              <small>EMAIL</small>
              <b>{site.email}</b>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <span><MessageCircle /></span>
            <div>
              <small>WHATSAPP</small>
              <b>Chat with our team</b>
            </div>
            <ArrowUpRight />
          </a>

          <div className="contact-location">
            <MapPin size={17} />
            {site.location}
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <h3>Tell us about your project</h3>
          <p>Fields marked with * are required.</p>

          <label>
            Your name *
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email address *
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="you@company.com"
              required
            />
          </label>

          <label>
            What do you need?
            <select
              name="service"
              value={form.service}
              onChange={update}
            >
              <option>Website Development</option>
              <option>E-commerce Development</option>
              <option>Custom Software</option>
              <option>Business Automation</option>
              <option>Maintenance & Support</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Project details *
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows="5"
              placeholder="Tell us about your goals, requirements and timeline..."
              required
            />
          </label>

          {sent && (
            <span className="form-success" role="status">
              Thank you! Your enquiry has been saved successfully.
            </span>
          )}

          {error && (
            <span className="form-error" role="alert">
              {error}
            </span>
          )}

          <button
            className="button button-primary form-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Send enquiry'}
            <Send size={16} />
          </button>

          <small className="form-note">
            Your enquiry is saved for the admin. Email notification
            will work after email integration is configured.
          </small>
        </form>
      </section>
    </>
  );
}