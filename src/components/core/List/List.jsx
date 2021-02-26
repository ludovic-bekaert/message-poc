import PropTypes from 'prop-types';

function List({
  children,
}) {
  return (
    <div>
      { children && <div>{children}</div>}
    </div>
  );
}

List.propTypes = {
  children: PropTypes.node,
};

export default List;