import { ACTIONS } from './constants';

export const mountAction = () => ({
  type: ACTIONS.HOME_CONTAINER_MOUNT
});

export const sortAction = payload => ({
  type: ACTIONS.HOME_CONTAINER_SORT_TABLE,
  payload
});

export const onChangeAction = payload => ({
  type: ACTIONS.HOME_CONTAINER_CHANGE_FORM,
  payload
});

export const addDataAction = payload => ({
  type: ACTIONS.HOME_CONTAINER_ADD_DATA_REQUEST,
  payload
});
