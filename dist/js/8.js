(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{548:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(61),r=a(18);const m=r.b.div`
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
`,o=r.b.div`
  position:absolute;
  width: 250px;
  right: 100px;
  top:10px;
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }

  .ant-carousel .slick-slide img {
    height:160px;
    width: 250px;
  }
`,d=r.b.div`
  width: 940px;
  padding: 20px 0px;
  min-height:250px; 
  .ant-tabs-tabpane {
    padding-left: 10px;
  }
`,p=r.b.div`
  font-size: 14px;
  font-family: Microsoft YaHei,SimHei,Verdana;
  word-wrap: break-word;
  line-height: 24px;
  a {
    color: rgba(0, 0, 0, 0.65);
    :hover {
      color: #417dc9;
    }
  }
`;var b=a(14),h=a(535),s=a(541),E=a(533);const{TabPane:g}=h.a;t.default=Object(l.memo)((function(e){const{data:t}=e,{organization:{name:a,nameHistory:r,startTime:u,place:k,creator:x,leader:$,secretariat:w,member:y,relatedPeople:f,logoUrl:v},activities:I,constitutions:_,historicalDataIndexs:z,journals:j,literatures:H,realObjects:J}=t;let O=[];return _.map(e=>{e.images.map(e=>{O=O.concat([e.url])})}),v&&(O=O.concat([v])),console.log(O),n.a.createElement(l.Fragment,null,n.a.createElement(c,null,n.a.createElement(m,null,a),n.a.createElement(s.a,{layout:"horizontal",column:1,style:{width:500}},x?n.a.createElement(s.a.Item,{label:"发起人"},x):"",u?n.a.createElement(s.a.Item,{label:"创办时间"},u):"",k?n.a.createElement(s.a.Item,{label:"创办地点"},k):"",r?n.a.createElement(s.a.Item,{label:"改名历史"},r):"",$?n.a.createElement(s.a.Item,{label:"理事会成员"},$):"",w?n.a.createElement(s.a.Item,{label:"秘书处"},w):"",y?n.a.createElement(s.a.Item,{label:"会员"},y):""),n.a.createElement(o,null,n.a.createElement(E.a,{autoplay:!0},O.length?O.map(e=>n.a.createElement("img",{src:e})):""))),n.a.createElement(d,null,n.a.createElement(h.a,{defaultActiveKey:"huodong"},n.a.createElement(g,{tab:"社团活动",key:"huodong"},I.length?I.map((e,t)=>n.a.createElement(p,{key:e.id},n.a.createElement(i.b,{to:`/detail?id=${e.id}&theme=${b.a}`,target:"_blank"},`${t+1}.${e.name}`))):n.a.createElement(p,null,"暂无")),n.a.createElement(g,{tab:"社团刊物",key:"kanwu"},j.length?j.map((e,t)=>n.a.createElement(p,{key:e.id},n.a.createElement(i.b,{to:`/detail?id=${e.id}&theme=${b.d}`,target:"_blank"},`${t+1}.${e.name}`))):n.a.createElement(p,null,"暂无")),n.a.createElement(g,{tab:"相关实物",key:"shiwu"},J.length?J.map((e,t)=>n.a.createElement(p,{key:e.id},n.a.createElement(i.b,{to:`/detail?id=${e.id}&theme=${b.h}`,target:"_blank"},`${t+1}.${e.name}`))):n.a.createElement(p,null,"暂无")),n.a.createElement(g,{tab:"相关人物",key:"renwu"},f.length?f.map((e,t)=>n.a.createElement(p,{key:e.id},n.a.createElement(i.b,{to:`/detail?id=${e.id}&theme=${b.g}`,target:"_blank"},`${t+1}.${e.peopleName}`))):n.a.createElement(p,null,"暂无")),n.a.createElement(g,{tab:"相关文献",key:"wenxian"},H.length?H.map((e,t)=>n.a.createElement(p,{key:e.id},n.a.createElement(i.b,{to:`/detail?id=${e.id}&theme=${b.e}`,target:"_blank"},`${t+1}.${e.name}`))):n.a.createElement(p,null,"暂无")),n.a.createElement(g,{tab:"史料索引",key:"suoyin"},z.length?z.map((e,t)=>n.a.createElement(p,{key:e.id},n.a.createElement(i.b,{to:`/detail?id=${e.id}&theme=${b.b}`,target:"_blank"},`${t+1}.${e.name}`))):n.a.createElement(p,null,"暂无")))))}))}}]);