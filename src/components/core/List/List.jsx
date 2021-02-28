import PropTypes from 'prop-types';

function List({
  children,
}) {
  return (
    <div role="list">
      { children && <div>{children}</div>}
    </div>
  );
}

List.propTypes = {
  children: PropTypes.node,
};

export default List;