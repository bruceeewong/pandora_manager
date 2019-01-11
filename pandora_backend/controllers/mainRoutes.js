const fn_home = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Pandora'
    })
};

module.exports = {
    'GET /': fn_home
}