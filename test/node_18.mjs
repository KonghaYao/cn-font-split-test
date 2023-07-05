import { fontSplit } from "@konghayao/cn-font-split";
 import {checkResult} from  './common/checkResult.mjs'
const names = []
 fontSplit({
    destFold: "/tmp/"+Date.now(),
    FontPath: "/tmp/SmileySans-Oblique.ttf",
    targetType: "woff2",
    previewImage: {},
    outputFile(name,buffer){
        names.push(name)
    }
}).then(()=>{

   
    checkResult(names)
})