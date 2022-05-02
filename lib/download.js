/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yaomingfei
 * @Date: 2019-12-11 23:00:24
 * @LastEditors: yaomingfei
 * @LastEditTime: 2019-12-11 23:01:20
 */
const { promisify }  = require('util'); //回调方式转换成异步回调
const download = promisify(require('download-git-repo'));
const ora = require('ora'); //进度条
module.exports.clone = async (repo, desc) => {
    const process = ora(`下载....${repo}`);
    process.start(); //转圈圈⭕️
    await download(repo, desc);
    process.succeed();
}