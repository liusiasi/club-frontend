(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{542:function(e,t,a){"use strict";var n=a(0),l=a.n(n);const r=a(18).b.div`
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
`;var i=a(338),c=a.n(i);a(530),a(531),t.a=Object(n.memo)((function(e){const{title:t,data:a}=e;return l.a.createElement(r,null,l.a.createElement("h3",null,t),l.a.createElement(c.a,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!0},(()=>{switch(t){case"图片":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("img",{src:e.url})),l.a.createElement("h3",null,e.name)));case"视频":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("video",{src:e.url,controls:"controls"}),l.a.createElement("h3",null,e.name))));case"音频":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("audio",{src:e.url,controls:"controls"}),l.a.createElement("h3",null,e.name)));default:return""}})()))}))},549:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18);const i=r.b.div`
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
`;var o=a(541),s=a(542);t.default=Object(n.memo)((function(e){const{data:t}=e,{name:a,organizationName:r,description:m,images:d,createTime:p}=t;return l.a.createElement(n.Fragment,null,l.a.createElement(c,null,l.a.createElement(i,null,a),l.a.createElement(o.a,{layout:"horizontal",column:1,style:{width:500}},r?l.a.createElement(o.a.Item,{label:"相关社团名称"},r):"",p?l.a.createElement(o.a.Item,{label:"史料日期"},p):"",m?l.a.createElement(o.a.Item,{label:"史料描述"},m):""),d.length?l.a.createElement(s.a,{title:"图片",data:d}):l.a.createElement("span",null)))}))}}]);