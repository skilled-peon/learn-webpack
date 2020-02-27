console.log('home');

class Log {
    constructor() {
        // 故意在这里写错，测试一下 sourcemap
        console.lo('出错了！');
    }
}

let log = new Log();