// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).asin=n()}(this,(function(){"use strict";var e=function(e){return e!=e},n=Math.sqrt;var t=e,r=n,f=.7853981633974483,i=function(e){var n,t;return 0===e?.16666666666666713:((e<0?-e:e)<=1?(n=e*(19.562619833175948+e*(e*(5.444622390564711+e*(.004253011369004428*e-.6019598008014124))-16.262479672107002))-8.198089802484825,t=e*(139.51056146574857+e*(e*(70.49610280856842+e*(1*e-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(e=1/e)*(e*(5.444622390564711+e*(e*(19.562619833175948+-8.198089802484825*e)-16.262479672107002))-.6019598008014124),t=1+e*(e*(70.49610280856842+e*(e*(139.51056146574857+-49.18853881490881*e)-147.1791292232726))-14.740913729888538)),n/t)},u=function(e){var n,t;return 0===e?.08333333333333809:((e<0?-e:e)<=1?(n=28.536655482610616+e*(e*(6.968710824104713+e*(.002967721961301243*e-.5634242780008963))-25.56901049652825),t=342.43986579130785+e*(e*(147.0656354026815+e*(1*e-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(e=1/e)*(e*(6.968710824104713+e*(28.536655482610616*e-25.56901049652825))-.5634242780008963),t=1+e*(e*(147.0656354026815+e*(342.43986579130785*e-383.8770957603691))-21.947795316429207)),n/t)};return function(e){var n,o,a,s,d;if(t(e))return NaN;if(e>0?a=e:(n=!0,a=-e),a>1)return NaN;if(a>.625)s=(o=1-a)*u(o),o=r(o+o),d=f-o,d-=o=o*s-6123233995736766e-32,d+=f;else{if(a<1e-8)return e;d=a*(d=(o=a*a)*i(o))+a}return n?-d:d}}));
//# sourceMappingURL=bundle.js.map
