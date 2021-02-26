import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  type,
  children,
  disabled,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles.root}
    >{children}</button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: () => { },
};

export default Button;