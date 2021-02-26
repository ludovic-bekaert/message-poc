import PropTypes from 'prop-types';

function Button({
  type,
  children,
}) {
  return (
    <button
      type={type}
    >{children}</button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;