'usr strict';

//时间插件
var moment = require('moment');
require('moment/locale/zh-cn');
moment.locale('zh-cn');

class DateUtil {

    static formatterToFromNow(date) {
        return moment(date * 1000).fromNow();
    }

}


module.exports = DateUtil;