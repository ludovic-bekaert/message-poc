import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Label from '../Label';

function Checkbox({
  label,
  id,
  onChange,
  name,
}) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
      />
      { label && <Label htmlFor={id}>{label}</Label>}
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  id: v4(),
  onChange: () => { },
};

export default Checkbox;