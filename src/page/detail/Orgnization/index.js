import loadable from "@loadable/component";
import React from 'react'

const OrgnizationClub = loadable(() => import("./OrgnizationClub.js"), {
  fallback: <div>正在加载</div>
});

export default (data) => <OrgnizationClub {...data}/>