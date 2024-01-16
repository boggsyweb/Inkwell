import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkrkrrb");
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
        <label htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Please do not enter any sensitive information in this field.'
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
