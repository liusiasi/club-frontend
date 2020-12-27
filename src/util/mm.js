class MUtil {
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        // contentType: 'application/json',
        data: param.data || null,
        success(res){
          if(res.success ){
            typeof resolve === 'function' && resolve(res);
          }
          else{
            typeof reject === 'function' && reject(res.msg);
          }
        },
        error(err){
          if(err.status === 401 ){
            alert("401");
          }
          if(err.status === 500 ){
            alert("500");
          }
          typeof reject === 'function' && reject(err.statusText);
        }
      });
    })
  }

  rejson(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        contentType: 'application/json',
        // processData:false,
        data: JSON.stringify(param.data) || null,
        success(res){
          if(res.success ){
            typeof resolve === 'function' && resolve(res);
          }
          else{
            typeof reject === 'function' && reject(res.msg);
          }
        },
        error(err){
          if(err.status === 401 ){
            alert("401");
          }
          if(err.status === 500 ){
            alert("500");
          }
          typeof reject === 'function' && reject(err.statusText);
        }
      });
    })
  }

  checkRes(res) {
    if(res.success && res.obj != null && typeof res.obj == 'object'){
      return true;
    }
    else{
      return false;
    }
  }

  isLastRule(rule, value, callback) {
    var re = /^[1][0-9]{10}$/;
    if (value && !re.test(value)) {
      callback('请输入11位完整手机号！');
    } else {
      callback();
    }
  }

  configTime(time, type) {
    let _type = parseInt(type);
    // 当类型为年月日 且 日期不符合规定格式的时候 直接返回日期
   if(isNaN(_type) || _type === 1 || !(/\d{4}-\d{2}-\d{2}/g).test(time)) return time;
   //2年月（日默认设为1日）、3年（月和日默认都设为1）、4年春夏秋冬（春3月1号、夏6月1号、秋9月1号、冬12月1号），5没有时间（18860101）
   let  timeArr = time.split('-');
   switch(_type) {
     case 2:
       return timeArr[0]+'-'+timeArr[1];
     case 3:
      return timeArr[0] + '年';
     case 4:
       if(timeArr[1] == '03') return timeArr[0] +  '年 春';
       else if(timeArr[1] == '06') return timeArr[0] +  '年 夏';
       else if(timeArr[1] == '09') return timeArr[0] +  '年 秋';
       else return  timeArr[0] + '年 冬'
     case 5:
       return '未知';
   }
  }

  getDot(name){
    if(name == null || name == undefined) return '';
    if(name.indexOf("《") == 0 ) return '.';
    else return '. ';
  }

}

export default MUtil;