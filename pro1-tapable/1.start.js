let {SyncHook} = require('tapable');

class Lesson {
    constructor() {
        this.hooks = {
            arch: new SyncHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tap('node', function(name) {
            console.log('node', name);
        })
        this.hooks.arch.tap('react', function(name) {
            console.log('react', name);
        })
    }
    start() {
        this.hooks.arch.call('Tony');
    }
}

let l = new Lesson();
l.tap(); // 注册者两个事件
l.start(); // 启动钩子