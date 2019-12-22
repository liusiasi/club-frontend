(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{617:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return r}));var n=a(18);const l=n.b.div`
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
`;var i=a(369),c=a.n(i);a(603),a(604),t.a=Object(n.memo)((function(e){const{title:t,data:a}=e;return l.a.createElement(r,null,l.a.createElement("h3",null,t),l.a.createElement(c.a,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!0},(()=>{switch(t){case"图片":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("img",{src:e.url})),l.a.createElement("h3",null,e.name)));case"视频":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("video",{src:e.url,controls:"controls"}),l.a.createElement("h3",null,e.name))));case"音频":return a.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("audio",{src:e.url,controls:"controls"}),l.a.createElement("h3",null,e.name)));default:return""}})()))}))},627:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(48),i=a(617),c=a(18);const o=c.b.div`
  width: 100%;
  display: flex;
  margin: 0 0 20px;
  justify-content: flex-start ;
  img {
    width: 120px;
    height: 170px;
    margin-right: 20px;
  }
  h1 {
    padding: 20px 0;
  }
`,m=c.b.section`
  padding: 20px 30px;
  p:first-child {
    text-align: center;
    font-weight: bold;
    line-height: 35px;
  }
`,s=c.b.p`
  font-size: 14px;
  font-family: Microsoft YaHei,SimHei,Verdana;
  word-wrap: break-word;
  line-height: 24px;
  margin-left: 50px;
  a {
    color: rgba(0, 0, 0, 0.65);
    :hover {
      color: #417dc9;
    }
  }
`;var d=a(167),p=a(618),u=a(13);const{TabPane:h}=d.a;t.default=Object(n.memo)((function(e){const{data:t}=e,{logoUrl:a,peopleName:c,organizations:E,activities:g,journals:x,realObjects:b,literatures:f,images:k,audios:$,videos:w}=t;return l.a.createElement(n.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(o,null,l.a.createElement("img",{src:a}),l.a.createElement("h1",null,c)),l.a.createElement(d.a,{defaultActiveKey:"shengping"},l.a.createElement(h,{tab:"人物生平",key:"shengping"},E.length?l.a.createElement(m,null,l.a.createElement("p",null,"相关社团"),E.map((e,t)=>{const{id:a,name:n,startTime:i,creator:c,leader:o,secretariat:m,member:d}=e;return l.a.createElement(s,{key:a},`${t+1}.`,l.a.createElement(r.b,{to:`/detail?id=${a}&theme=${u.f}`,target:"_blank"},`${n}，`),i?`创办时间：${i}，`:"",c?`发起人： ${c}，`:"",o?`理事会：${o}，`:"",m?`秘书处：${m}，`:"",d?`会员：${d}，`:"")})):l.a.createElement("span",null),g.length?l.a.createElement(m,null,l.a.createElement("p",null,"相关活动"),g.map((e,t)=>{const{id:a,name:n,startTime:i,relationDescription:c}=e;return l.a.createElement(s,{key:a},`${t+1}.`,l.a.createElement(r.b,{to:`/detail?id=${a}&theme=${u.a}`,target:"_blank"},`${n}，`),i?`活动时间：${i}，`:"",c?`与人物的关系： ${c}，`:"")})):l.a.createElement("span",null)),l.a.createElement(h,{tab:"学术著述",key:"zhushu"},x.length?l.a.createElement(m,null,l.a.createElement("p",null,"相关期刊"),x.map((e,t)=>{const{id:a,name:n,startTime:i,relationDescription:c}=e;return l.a.createElement(s,{key:a},`${t+1}.`,l.a.createElement(r.b,{to:`/detail?id=${a}&theme=${u.d}`,target:"_blank"},`${n}，`),i?`发刊日期：${i}，`:"",c?`与人物的关系： ${c}，`:"")})):l.a.createElement("span",null),b.length?l.a.createElement(m,null,l.a.createElement("p",null,"相关实物"),b.map((e,t)=>{const{id:a,name:n,startTime:i,description:c,relationDescription:o}=e;return l.a.createElement(s,{key:a},`${t+1}.`,l.a.createElement(r.b,{to:`/detail?id=${a}&theme=${u.h}`,target:"_blank"},`${n}，`),i?`实物日期：${i}，`:"",c?`实物描述：${c}，`:"",o?`与人物的关系： ${o}，`:"")})):l.a.createElement("span",null)),l.a.createElement(h,{tab:"流光影年",key:"影年"},k.length?l.a.createElement(p.a,{title:"图片",data:k}):l.a.createElement("span",null),$.length?l.a.createElement(p.a,{title:"音频",data:$}):l.a.createElement("span",null),w.length?l.a.createElement(p.a,{title:"视频",data:w}):l.a.createElement("span",null)))))}))}}]);