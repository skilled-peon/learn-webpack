import $ from 'jquery';
import moment from 'moment';

console.log($);

// 手动引入所需要的语言包
import 'moment/locale/zh-cn';


// 距离今天23:59 还有多久
let r = moment().endOf('day').fromNow(); 
console.log(r);