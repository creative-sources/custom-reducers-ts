
const storage = window.localStorage

/* 
Create SignUp function
Create login and logout strategies
Create a data object upon frist login TODO
Option timestap useagent info from mobile from chorme > data 
*/

export type User = { name: string, email: string, password: string, data: any }
export type UserAction = { type: "login" | "Logout" | "signup", payload: Partial<User> }

export function todos(state: User, action: UserAction) {
    switch (action.type) {
        case 'signup':
            return state
        default:
            return state
    }
}