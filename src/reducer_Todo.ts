
export type Todo = { index: number, type: string, text: string, complete: boolean }

export function todos(state: Array<any> = [], action: Todo ) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{ text: action.text, completed: false }])
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                action.index === index
                    ? { text: todo.text, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}