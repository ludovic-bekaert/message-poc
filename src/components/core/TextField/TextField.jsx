import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Label from '../Label';
import styles from './TextField.module.css';

function TextField({
  autoFocus,
  label,
  id,
  onChange,
  name,
}) {
  const ref = useRef();

  useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea
        role="textbox"
        id={id}
        ref={ref}
        onChange={onChange}
        name={name}
        className={styles.input}
      />
    </>
  );
}

TextField.propTypes = {
  autoFocus: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  autoFocus: false,
  id: v4(),
  onChange: () => { },
};

export default TextField;