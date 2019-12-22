(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{617:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var l=a(18);const n=l.b.div`
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
`;var i=a(369),c=a.n(i);a(603),a(604),t.a=Object(l.memo)((function(e){const{title:t,data:a}=e;return n.a.createElement(r,null,n.a.createElement("h3",null,t),n.a.createElement(c.a,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!0},(()=>{switch(t){case"图片":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("img",{src:e.url})),n.a.createElement("h3",null,e.name)));case"视频":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("video",{src:e.url,controls:"controls"}),n.a.createElement("h3",null,e.name))));case"音频":return a.map((e,t)=>n.a.createElement("div",{key:t},n.a.createElement("audio",{src:e.url,controls:"controls"}),n.a.createElement("h3",null,e.name)));default:return""}})()))}))},623:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(617),i=a(616),c=a(618);t.default=Object(l.memo)((function(e){const{data:t}=e,{organizationName:a,realObjectDetail:{name:o,description:m,images:s,createTime:d,source:p,nameHistory:u,relatedPeople:h}}=t;return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,null,n.a.createElement(r.b,null,o),n.a.createElement(i.a,{layout:"horizontal",column:1,style:{width:500}},a?n.a.createElement(i.a.Item,{label:"相关社团名称"},a):"",u?n.a.createElement(i.a.Item,{label:"名称沿革"},u):"",d?n.a.createElement(i.a.Item,{label:"创建日期"},d):"",p?n.a.createElement(i.a.Item,{label:"来源"},p):"",h.length?n.a.createElement(i.a.Item,{label:"相关人物"},h.map((e,t)=>e.peopleName+" : "+e.description+" ; ")):"",m?n.a.createElement(i.a.Item,{label:"实物描述"},m):""),s.length?n.a.createElement(c.a,{title:"图片",data:s}):n.a.createElement("span",null)))}))}}]);