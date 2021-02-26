import PropTypes from 'prop-types';

function ListItem({
  children,
}) {
  return (
    <div>
      { children}
    </div>
  )
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;