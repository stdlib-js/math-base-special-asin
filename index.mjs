// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-fourth-pi@esm/index.mjs";var e=t,n=r,i=s,a=function(t){var r,s;return 0===t?.16666666666666713:((t<0?-t:t)<=1?(r=t*(19.562619833175948+t*(t*(5.444622390564711+t*(.004253011369004428*t-.6019598008014124))-16.262479672107002))-8.198089802484825,s=t*(139.51056146574857+t*(t*(70.49610280856842+t*(1*t-14.740913729888538))-147.1791292232726))-49.18853881490881):(r=.004253011369004428+(t=1/t)*(t*(5.444622390564711+t*(t*(19.562619833175948+-8.198089802484825*t)-16.262479672107002))-.6019598008014124),s=1+t*(t*(70.49610280856842+t*(t*(139.51056146574857+-49.18853881490881*t)-147.1791292232726))-14.740913729888538)),r/s)},m=function(t){var r,s;return 0===t?.08333333333333809:((t<0?-t:t)<=1?(r=28.536655482610616+t*(t*(6.968710824104713+t*(.002967721961301243*t-.5634242780008963))-25.56901049652825),s=342.43986579130785+t*(t*(147.0656354026815+t*(1*t-21.947795316429207))-383.8770957603691)):(r=.002967721961301243+(t=1/t)*(t*(6.968710824104713+t*(28.536655482610616*t-25.56901049652825))-.5634242780008963),s=1+t*(t*(147.0656354026815+t*(342.43986579130785*t-383.8770957603691))-21.947795316429207)),r/s)};var d=function(t){var r,s,d,f,o;if(e(t))return NaN;if(t>0?d=t:(r=!0,d=-t),d>1)return NaN;if(d>.625)f=(s=1-d)*m(s),s=n(s+s),o=i-s,o-=s=s*f-6123233995736766e-32,o+=i;else{if(d<1e-8)return t;o=d*(o=(s=d*d)*a(s))+d}return r?-o:o};export{d as default};
//# sourceMappingURL=index.mjs.map