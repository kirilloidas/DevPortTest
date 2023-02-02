import favoritesTasks from "./favoritesTasks"

const localFilter = (array, config) => {

    const baseCondition = (el, config, lastParam = true) => (el === 'All' ? true : el.userId === config.userId) && (config.title ? el.title === config.title : true) && lastParam

    return array.filter(el => {
        if(config.status === 'All') return baseCondition(el, config)
        if(config.status === 'Completed') return baseCondition(el, config, el.completed)
        if(config.status === 'Uncompleted') return baseCondition(el, config, !el.completed)
        if(config.status === 'Favorites') return baseCondition(el, config, favoritesTasks.getAll().includes(el))
    })
}

const apiFilter = (config) => {
    const returnConfig = {
        userId: config.userId === 'All' ? '' : config.userId,
        title: config.title,
        _page: config._page
    }

    if(config.status === 'Completed') returnConfig.completed = true
    if(config.status === 'Uncompleted') returnConfig.completed = false
    if(config.status === 'Favorites') returnConfig.id = favoritesTasks.getAll()

    return returnConfig
}

export {
    localFilter,
    apiFilter
}