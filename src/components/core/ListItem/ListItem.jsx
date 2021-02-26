import PropTypes from 'prop-types';
import styles from './ListItem.module.css';

function ListItem({
  children,
}) {
  return (
    <div
      className={styles.root}
    >
      { children}
    </div>
  )
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;