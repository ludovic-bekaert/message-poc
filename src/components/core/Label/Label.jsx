import PropTypes from 'prop-types';

function Label({
  children,
  ...rest
}) {
  return (
    <label
      {...rest}
    >{children}</label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;