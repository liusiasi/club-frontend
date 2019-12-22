(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{617:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var l=a(18);const n=l.b.div`
  font-size: 34px;
  line-height: 35px;
  margin-bottom: 25px;
  width:500px;
`,r=l.b.div`
  width: 900px;
  padding: 20px 0px;
  border-bottom: 1px solid #e5e5e5;
  position:relative;
  min-height:250px; 
`},618:function(e,t,a){"use strict";var l=a(0),n=a.n(l);const r=a(18).b.div`
  width: 250px;
  margin: 10px 25px 0;
  border: 1px solid #e6e6e6;
  h3 {
    font-size: 18px;
    color: #555;
    padding: 10px 10px ;
  }
  .slick-next:before {
    content:'→'
  }
  .slick-prev:before {
    content:'←'
  }
  .slick-slider slick-initialized {
    text-align: center;
    width: 250px;
    overflow: hidden;
    color:#000;
  }
  
  .slick-slider h3 {
    color: #555;
    width: 250px;
    line-height: 30px;
    text-align: center;
    font-size: 15px;
  }

  .slick-slider img, video,audio {
    height:160px;
    width: 250px;
  }
  .slick-slider audio {
    height:80px;
    width: 250px;
  }

  .slick-prev:before, .slick-next:before {
    color: black;
  }
`;var i=a(369),c=a.n(i);a(603),a(604),t.a=Object(l.memo)((function(e){const{title:t,data:a}=e;return n.a.createElement(r,null,n.a.createElement("h3",null,t),n.a.createElement(c.a,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!0},(()=>{switch(t){case"图片":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("img",{src:e.url})),n.a.createElement("h3",null,e.name)));case"视频":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("video",{src:e.url,controls:"controls"}),n.a.createElement("h3",null,e.name))));case"音频":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("audio",{src:e.url,controls:"controls"}),n.a.createElement("h3",null,e.name)));default:return""}})()))}))},620:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(617),i=a(616),c=a(618);t.default=Object(l.memo)((function(e){const{data:t}=e,{name:a,organizationName:o,startTime:m,endTime:s,place:d,type:p,relatedPeople:u,content:h,images:E,audios:x,videos:b}=t;return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,null,n.a.createElement(r.b,null,a),n.a.createElement(i.a,{layout:"horizontal",column:1,style:{width:500}},o?n.a.createElement(i.a.Item,{label:"承办社团名称"},o):"",m?n.a.createElement(i.a.Item,{label:"开始日期"},m):"",s?n.a.createElement(i.a.Item,{label:"结束日期"},s):"",d?n.a.createElement(i.a.Item,{label:"活动地点"},d):"",p?n.a.createElement(i.a.Item,{label:"活动类型"},1==p?"学术活动":2==p?"科普活动":3==p?"实业活动":"其他活动"):"",u.length?n.a.createElement(i.a.Item,{label:"相关人物"},u.map((e,t)=>e.peopleName+" : "+e.description+" ; ")):"",h?n.a.createElement(i.a.Item,{label:"活动内容"},h):""),E.length?n.a.createElement(c.a,{title:"图片",data:E}):n.a.createElement("span",null),x.length?n.a.createElement(c.a,{title:"音频",data:x}):n.a.createElement("span",null),b.length?n.a.createElement(c.a,{title:"视频",data:b}):n.a.createElement("span",null)))}))}}]);