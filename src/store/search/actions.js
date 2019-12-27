export const USER_SEARCH_REQUEST = 'USER_SEARCH_REQUEST';

export function updateUserList(user_name, users) {
    let newList = [];
    
    users.users.forEach(user => {
        if(user.login.includes(user_name)) {
            newList.push(user);
        }
    });

    return {
       type: USER_SEARCH_REQUEST,
       payload: newList,
    }
}