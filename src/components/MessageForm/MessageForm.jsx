import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../core/Button/Button';
import Checkbox from '../core/Checkbox';
import TextField from '../core/TextField';

function MessageForm({
  onSubmit,
}) {
  const [message, setMessage] = useState({});

  function handleChange(e) {
    setMessage({
      ...message,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          label="Votre message"
          autoFocus
          name="message"
          onChange={handleChange}
        />
      </div>
      <div>
        <Checkbox
          label="Indiquer comme privé"
          name="isPrivate"
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
      >Envoyer</Button>
    </form>
  );
}

MessageForm.propTypes = {
  /**
   * Function called on form submission
   */
  onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;