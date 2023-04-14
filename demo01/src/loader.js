// loader导出一个函数， loader会在转换源模块的时候调用该函数。
//在这个函数内部，我们可以通过传入this上下文给Loader API来使用。

module.exports = function loader(source) {
    //this.query来获取对应的webpack配置中loader的options配置参数
    const options = this.query;
    const result = source.replace('...', options.name);
    this.callback(null, result);
    return 
}