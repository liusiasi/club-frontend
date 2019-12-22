(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{617:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return r}));var n=a(18);const l=n.b.div`
  font-size: 34px;
  line-height: 35px;
  margin-bottom: 25px;
  width:500px;
`,r=n.b.div`
  width: 900px;
  padding: 20px 0px;
  border-bottom: 1px solid #e5e5e5;
  position:relative;
  min-height:250px; 
`},618:function(e,t,a){"use strict";var n=a(0),l=a.n(n);const r=a(18).b.div`
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
`;var i=a(369),c=a.n(i);a(603),a(604),t.a=Object(n.memo)((function(e){const{title:t,data:a}=e;return l.a.createElement(r,null,l.a.createElement("h3",null,t),l.a.createElement(c.a,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!0},(()=>{switch(t){case"图片":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("img",{src:e.url})),l.a.createElement("h3",null,e.name)));case"视频":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("video",{src:e.url,controls:"controls"}),l.a.createElement("h3",null,e.name))));case"音频":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("audio",{src:e.url,controls:"controls"}),l.a.createElement("h3",null,e.name)));default:return""}})()))}))},621:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(617),i=a(616),c=a(618);t.default=Object(n.memo)((function(e){const{data:t}=e,{name:a,organizationName:o,createTime:m,source:s,type:d,relatedPeople:p,description:u,images:h}=t;return l.a.createElement(n.Fragment,null,l.a.createElement(r.a,null,l.a.createElement(r.b,null,a),l.a.createElement(i.a,{layout:"horizontal",column:1,style:{width:500}},o?l.a.createElement(i.a.Item,{label:"相关社团名称"},o):"",m?l.a.createElement(i.a.Item,{label:"文献日期"},m):"",s?l.a.createElement(i.a.Item,{label:"出处来源"},s):"",d?l.a.createElement(i.a.Item,{label:"活动类型"},1==d?"原始文献":"研究文献"):"",p.length?l.a.createElement(i.a.Item,{label:"相关人物"},p.map((e,t)=>e.peopleName+" : "+e.description+" ; ")):"",u?l.a.createElement(i.a.Item,{label:"文献描述"},u):""),h.length?l.a.createElement(c.a,{title:"图片",data:h}):l.a.createElement("span",null)))}))}}]);