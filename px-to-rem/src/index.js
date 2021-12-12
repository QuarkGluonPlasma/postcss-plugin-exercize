const plugin = (options) => {
    const pxReg = /(\d+)px/ig;
    return {
        postcssPlugin: 'postcss-simple-px2rem',
        Declaration (decl) {
            decl.value = decl.value.replace(pxReg, (matchStr, num) => {
                return num/options.base + 'rem';
            });
        }
    }
}
module.exports = plugin;
