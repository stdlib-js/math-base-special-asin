// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.sqrt,n=.7853981633974483;function t(t){var e,u,a,f,i;if(function(r){return r!=r}(t))return NaN;if(t>0?a=t:(e=!0,a=-t),a>1)return NaN;if(a>.625)f=(u=1-a)*function(r){var n,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(n=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),n/t)}(u),u=r(u+u),i=n-u,i-=u=u*f-6123233995736766e-32,i+=n;else{if(a<1e-8)return t;i=(u=a*a)*function(r){var n,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(n=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),n/t)}(u),i=a*i+a}return e?-i:i}export{t as default};
//# sourceMappingURL=mod.js.map
