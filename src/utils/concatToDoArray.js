import { localFilter } from "./filtersParser"

export const concatToDoArray = (state, data) => {
    return [...new Set([...state.todoArray, ...data, ...localFilter(state.createdTasks, state.filter)].sort((a, b) => a.id - b.id))]
}