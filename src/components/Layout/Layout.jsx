import PropTypes from 'prop-types';
import styles from './Layout.module.css';

function Layout({
  children,
}) {
  return (
    <div
      className={styles.root}
    >
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;