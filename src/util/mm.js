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
}

export default MUtil;