import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvlpay");
  if (state.succeeded) {
      return <p>Thanks! I'll be in touch shortly.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
          First and Last Name
      </label>
          <input
              id="name"
              type="name" 
              name="name"
              placeholder='your name'
              required
          />
        <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
        />
        <label htmlFor="email">
          Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder='your@email.com'
            required
          />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="service">What types of services do you need?</label>
    <select name="service" id="service" required="">
        <option value="" defaultValue disabled="">Select</option>
        <option value="SetUp">Set up new business</option>
        <option value="Manage">Manage existing business</option>
        <option value="CleanUp">Clean-up or catch-up</option>
        <option value="Other">Other</option>
    </select>
      <ValidationError 
            prefix="Service" 
            field="service"
            errors={state.errors}
          />
        <label htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Please do not send any sensitive information through this form.'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
          <p><em>Your information will never be shared or sold.</em></p>
        <button type="submit" disabled={state.submitting}>
          SUBMIT
        </button>
    </form>
  );
}

export default ContactForm;
