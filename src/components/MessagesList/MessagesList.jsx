import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import List from '../core/List/List';
import ListItem from '../core/ListItem';

function MessagesList({
  children,
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { list } = useSelector((state) => state.messages);

  useEffect(() => {
    // Only trigger fetching when list is undefined
    if (!list) {
      setLoading(true);
      // TODO: Call api the fetch list
    } else {
      setData(list);
    }
  }, []);

  return (
    <div>
      <h1>Liste des messages</h1>
      { loading && <span>Chargement...</span>}
      { !loading && (
        <List>
          {data.map((item) => <ListItem key={item.id} />)}
        </List>
      )}
    </div>
  )
}

export default MessagesList;