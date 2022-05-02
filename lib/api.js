/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yaomingfei
 * @Date: 2019-12-11 23:00:24
 * @LastEditors: yaomingfei
 * @LastEditTime: 2019-12-11 23:01:11
 */
const { clone } = require('./download.js');
const fs = require('fs')
const handlebars = require('handlebars')
const symbols = require('log-symbols')
const chalk = require('chalk')
module.exports.init = async (name) => {
    console.log('🔥创建项目：' + name);
    //从github上拉取项目
    await clone('github:chrisworkalx/vue3.0_template', name);
}

module.exports.refresh = async () => {

    // 获取页面列表
    const list =
        fs.readdirSync('./src/views')
            .filter(v => v !== 'Home.vue')
            .map(v => ({
                name: v.replace('.vue', '').toLowerCase(),
                file: v
            }))

    // 生成路由定义
    compile({
        list
    }, './src/router.js', './template/router.js.hbs')

    // 生成菜单
    compile({
        list
    }, './src/App.vue', './template/App.vue.hbs')

    /**
     * 编译模板文件
     * @param meta 数据定义
     * @param filePath 目标文件路径
     * @param templatePath 模板文件路径
     */
    function compile(meta, filePath, templatePath) {
        if (fs.existsSync(templatePath)) {
            const content = fs.readFileSync(templatePath).toString();
            const result = handlebars.compile(content)(meta);
            fs.writeFileSync(filePath, result);
        }
        console.log(symbols.success, chalk.green(`🚀${filePath} 创建成功`))
    }
}