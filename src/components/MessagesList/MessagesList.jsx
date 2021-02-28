import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import List from '../core/List/List';
import ListItem from '../core/ListItem';
import { getMessagesActions } from '../../store/reducers/messages';

function MessagesList({
  children,
}) {
  const [loading, setLoading] = useState(false);
  const { list } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      await dispatch(getMessagesActions());
      setLoading(false);
    }
    // Only trigger fetching when list is undefined
    if (!list) {
      fetchList();
    }
  }, []);

  return (
    <div>
      <h1>Liste des messages</h1>
      { loading && <span>Chargement...</span>}
      { !loading && list && (
        <List role="list">
          {list.map((item) => (
            <ListItem key={item.id}>
              { item.content}
              { item.isPrivate && (<span>(private)</span>)}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export default MessagesList;