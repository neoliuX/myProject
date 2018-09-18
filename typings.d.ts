/// <reference path="./node_modules/vuex/types/index.d.ts" />
/// <reference path="./node_modules/@types/jqueryui/index.d.ts" />
/// <reference path="./types/zepto.d.ts" />
/// <reference path="./src/common/vue-plugin/lang/Lang.d.ts" />
/// <reference path="./src/common/vue-plugin/ajax/Ajax.d.ts" />
/// <reference path="./src/common/vue-plugin/gt/gt.d.ts" />
/// <reference path="./src/common/vue-plugin/validator/Validator.d.ts" />
/// <reference path="./src/client/vue-components/plugins/spinner/spinner.d.ts" />
/// <reference path="./src/client/vue-components/plugins/alert/alert.d.ts" />
/// <reference path="./src/lib/gt/gt.d.ts" />
/// <reference path="./node_modules/flv.js/d.ts/flv.d.ts" />
/// <reference path="./src/lib/lanuch-client/lanuch-client.model.ts" />

declare var require: Function
declare var gtag: Function
declare var staticPath: string
declare const CURRENT_DATA: string
// declare module 'TcPlayer'
declare module 'webim'
// declare module 'vue-material'
// declare module 'vue-click-outside'
declare module "*.scss"
declare module '@tweenjs/tween.js'

// declare module 'lib/lanuchClient' {
//   import lanuchClientModel from "@src/lib/lanuch-client/lanuch-client.model"

//   export default lanuchClientModel
// }
// declare module 'lib/gt' {
//   import gt from "@src/lib/gt/core/index"

//   export default gt
// }

// declare module 'flvjs' {
//   import flvjs from 'flv.js/d.ts/flv.d'

//   export default flvjs
// }
declare module 'Zepto' {
  const $: ZeptoStatic
  const Zepto: ZeptoStatic
  export default $
}
declare module "*.vue" {
  import Vue from "vue";
  
  export default Vue;
}

interface JQuery {
  enscroll:{
      (options?:any): JQuery;
  }
}

interface EjsTpl {
  (data?: any): string;
}