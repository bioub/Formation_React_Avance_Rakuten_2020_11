import { userFetchSuccess } from "./actions";

test('userFetchSuccess action creator', () => {
  const response = [{id: 123, name: 'Toto'}];
  const action = userFetchSuccess(response);
  expect(action).toStrictEqual({
    type: 'USER_FETCH_SUCCESS',
    payload: response
  });
});
