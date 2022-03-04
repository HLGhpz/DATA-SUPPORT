module.exports = () => {
  function render(json) {
    this.set('Content-Type', 'application/json');
    this.body = json;
  }
  return async (ctx, next) => {
    ctx.send = render.bind(ctx);
    ctx.log.error('ikcamp')
    await next()
  }
}