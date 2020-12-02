import { connect } from 'react-redux';
import { userFetchRequested } from '../actions';

import UsersList from '../components/UsersList/UsersList';
import { selectUsersItems, selectUsersLoading } from '../selectors';

function mapStateToProps(state) {
  return {
    users: selectUsersItems(state),
    loading: selectUsersLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData() {
        // redux-thunk / redux-saga / redux-promise / redux-observable
        dispatch(userFetchRequested())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
