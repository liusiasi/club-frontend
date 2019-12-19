(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{542:function(e,t,a){"use strict";var l=a(0),n=a.n(l);const r=a(18).b.div`
  width: 250px;
  margin: 10px 0;
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
`;var i=a(338),c=a.n(i);a(530),a(531),t.a=Object(l.memo)((function(e){const{title:t,data:a}=e;return n.a.createElement(r,null,n.a.createElement("h3",null,t),n.a.createElement(c.a,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!0},(()=>{switch(t){case"图片":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("img",{src:e.url})),n.a.createElement("h3",null,e.name)));case"视频":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("video",{src:e.url,controls:"controls"}),n.a.createElement("h3",null,e.name))));case"音频":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("audio",{src:e.url,controls:"controls"}),n.a.createElement("h3",null,e.name)));default:return""}})()))}))},547:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(18);const i=r.b.div`
  font-size: 34px;
  line-height: 35px;
  margin-bottom: 25px;
  width:500px;
`,c=r.b.div`
  width: 900px;
  padding: 20px 0px;
  border-bottom: 1px solid #e5e5e5;
  position:relative;
  min-height:250px; 
`;var o=a(541),m=a(542);t.default=Object(l.memo)((function(e){const{data:t}=e,{name:a,organizationName:r,createTime:s,source:d,type:p,relatedPeople:u,description:h,images:x}=t;return n.a.createElement(l.Fragment,null,n.a.createElement(c,null,n.a.createElement(i,null,a),n.a.createElement(o.a,{layout:"horizontal",column:1,style:{width:500}},r?n.a.createElement(o.a.Item,{label:"相关社团名称"},r):"",s?n.a.createElement(o.a.Item,{label:"文献日期"},s):"",d?n.a.createElement(o.a.Item,{label:"出处来源"},d):"",p?n.a.createElement(o.a.Item,{label:"活动类型"},1==p?"原始文献":"研究文献"):"",u.length?n.a.createElement(o.a.Item,{label:"相关人物"},u.map((e,t)=>e.peopleName+" : "+e.description+" ; ")):"",h?n.a.createElement(o.a.Item,{label:"文献描述"},h):""),x.length?n.a.createElement(m.a,{title:"图片",data:x}):n.a.createElement("span",null)))}))}}]);