import { call, put, takeLatest } from "redux-saga/effects";
import _ from 'lodash';
import { fetchError, fetchAllCharactersSuccess } from "./actions";
import { CharactersService } from "../../services/characters-service";
import { FETCH_ALL_CHARACTERS } from "./actions";

/**
 * Fetch all characters
 * @param url
 */
function* handleFetchAllCharacters(action) {
  try {
    const page = !_.isUndefined(action.page) ? action.page : 1;
    const cs = new CharactersService();
    const res = yield call(cs.getAllCharacters, "characters", page);

    if (res.status === 200) {
      yield put(fetchAllCharactersSuccess(res.data));
    }else{
      yield put(fetchError("An unknown error occured : " + res.status));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError("An unknown error occured."));
    }
  }
}

function* characterSaga() {
  yield takeLatest(FETCH_ALL_CHARACTERS, handleFetchAllCharacters);
}

export default characterSaga;
