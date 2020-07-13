import { createSelector } from 'reselect';

/* Selector */
const selectUser = state => state.user;

/* Reselect function */
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);
