(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{619:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(18);n.b.div`
  font-size: 34px;
  line-height: 35px;
  margin-bottom: 25px;
  width:500px;
`;const l=n.b.div`
  width: 900px;
  padding: 20px 0px;
  border-bottom: 1px solid #e5e5e5;
  position:relative;
  min-height:250px; 
  display: flex;
  justify-content:space-around;
`,i=n.b.div`
  img,video {
    max-width:400px;
    max-height: 300px;
    padding: 10px 10px;
  }
  p{
    text-align: center;
    max-width:400px;
  }
  margin: 0 0 10px;
`},626:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(619),o=a(616);t.default=Object(n.memo)((function(e){const{data:t}=e;console.log(t);const{name:a,url:r,people:p,description:c,createTime:m,relatedPeople:d}=t;return l.a.createElement(n.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(i.b,null,l.a.createElement("a",{href:r,target:"_blank"},l.a.createElement("video",{src:r,controls:"controls"})),l.a.createElement("p",null,a)),l.a.createElement(o.a,{layout:"horizontal",column:1,style:{width:500,paddingTop:30}},p?l.a.createElement(o.a.Item,{label:"拍摄者"},p):"",m?l.a.createElement(o.a.Item,{label:"拍摄日期"},m):"",d&&d.length?l.a.createElement(o.a.Item,{label:"相关人物"},d.map((e,t)=>e.peopleName+" : "+e.description+" ; ")):"",c?l.a.createElement(o.a.Item,{label:"相关描述"},c):"")))}))}}]);