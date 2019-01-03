import * as t from './actionTypes';

export const loadRepo = () => {
    return {
        type: t.load_repo,
    }
}

export const searchRepo = (value) => {
    return {
        type: t.search_repo,
        payload: value
    }
}

export const setRepo = (value) => {
    return {
        type: t.set_repo,
        payload: value
    }
}

export const setLoading = (value) => {
    return {
        type: t.set_loading,
        payload: value
    }
}
