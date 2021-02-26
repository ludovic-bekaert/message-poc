import PropTypes from 'prop-types';
import _ from 'lodash';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './MessageForm.module.css';
import { sendMessageAction } from '../../store/reducers/messages';
import Button from '../core/Button/Button';
import Checkbox from '../core/Checkbox';
import TextField from '../core/TextField';

function MessageForm() {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const isValid = useMemo(() => !_.isEmpty(message.content));

  function handleChange(e) {
    setMessage({
      ...message,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await dispatch(sendMessageAction(message));
    setLoading(false);
    setDone(true);
  }

  function handleReset() {
    setMessage({});
    setDone(false);
  }

  if (done) {
    return (
      <div
        className={styles.successMessage}
      >
        <h2>Votre message a été envoyé</h2>
        <Button onClick={() => handleReset()}>Envoyer un nouveau message</Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <fieldset className={styles.fieldset}>
        <div>
          <TextField
            label="Votre message"
            autoFocus
            name="content"
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
      </fieldset>
      <Button
        type="submit"
        disabled={loading || !isValid}
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