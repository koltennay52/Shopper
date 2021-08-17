export const indexPage = (req, res, next) => {
    res.render('layout', {content: 'index'})
}

export const itemForm = (req, res, next) => {
    res.render('layout', {content: 'itemform'})
}

export const basketForm = (req, res, next) => {
    res.render('layout', {content: 'basketform'})
}


export const deletePage = (req, res, next) => {
    res.render('layout', {content: 'delete'})
}

export const registerPage = (req, res, next) => {
    res.render('layout', {content: 'register'})
}

export const loginPage = (req, res, next) => {
    res.render('layout', {content: 'login'})
}

