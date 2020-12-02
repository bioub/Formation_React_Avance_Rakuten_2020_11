import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function UsersList({ match, users = [], loading, fetchData }) {
    useEffect(() => {
      fetchData();
    }, [fetchData])

    return (
      <div className="UsersList">
        {loading ? (
          <CircularProgress />
        ) : (
          <List component="nav">
            {users.map((user) => (
              <ListItem
                key={user.id}
                button
                component={Link}
                to={match.path + '/' + user.id}
              >
                <ListItemText>{user.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    );
  }

