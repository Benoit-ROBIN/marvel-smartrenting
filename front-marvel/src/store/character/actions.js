export const FETCH_ALL_CHARACTERS = 'FETCH_ALL_CHARACTERS';
export const FETCH_ALL_CHARACTERS_SUCCESS = 'FETCH_ALL_CHARACTERS_SUCCESS';
export const FETCH_ERROR= 'FETCH_ERROR';

export function fetchAllCharacters(page) {
  return { type: FETCH_ALL_CHARACTERS, page }
}

export function fetchAllCharactersSuccess(data) {
    return { type: FETCH_ALL_CHARACTERS_SUCCESS, data}
}

export function fetchError(text) {
    return { type: FETCH_ERROR, text}
}