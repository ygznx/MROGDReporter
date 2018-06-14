var serverAddress = newFunction();
var createGDAddress = getServerAddress()
var equipPage = newFunction_1()

function newFunction_1() {
  return "http://192.168.10.116/WebView/index.html#/ComosJY/projects/U:2:A3BQHFA8AR:/wl/U:42:A42RGSHG8W:/details/item/U:8:";
}

function getServerAddress(){
   return "http://192.168.10.116:50388/";
  // return "http://localhost:57148/";
}

function newFunction() {
  //http://localhost:57148/api/MROData/GetMROTableList?Like=FP_DESCRIPTION@%E7%BD%90@FP_EQUIPID@A
    return "http://192.168.10.116:50388/api/MROData/";
  //return "http://localhost:57148/api/MROData/";
}

//http://localhost:57148/api/MROData/GetMROTableList?Like=
