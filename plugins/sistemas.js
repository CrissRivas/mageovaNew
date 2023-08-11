export function getInsertData() {
  const queryString = new URLSearchParams(window.location.search);
  const host_campana = window.location.host;
  const path = "";
  const identificador = window.navigator.userAgent;
  const sistema = getOS(identificador);
  const navegador = getBrowser(identificador);
  const folio = generateUniqueId();

  const uamip = queryString.get("uamip") || "no uamip";
  const uamport = queryString.get("uamport") || "no uamport ";
  const called = queryString.get("called") || "no called";
  const mac = queryString.get("mac") || "no macnasid ";
  const nasid = queryString.get("nasid") || "no nasid ";
  const sessionid = queryString.get("sessionid") || "no sessionid ";
  const userurl = queryString.get("userurl") || "no userurl ";
  const challenge = queryString.get("challenge") || "no challenge";
  const id = queryString.get("id") || "no id";
  const direccion_ip = queryString.get("ip") || "no ip";
  const dispositivo_rt = queryString.get("model") || "no disp";
  

  const insertData = {
    host_campana,
    path,
    identificador,
    folio,
    dispositivo_rt,
    direccion_ip,
    navegador,
    sistema,
    id,
    uamip,
    uamport,
    called,
    mac,
    nasid,
    sessionid,
    userurl,
    challenge,
  };

  return insertData;
}

function getOS(userAgent) {
  const os_array = {
    "Windows 10": /(windows nt 10)/i,
    "Windows 8.1": /(windows nt 6.3)/i,
    "Windows 8": /(windows nt 6.2)/i,
    "Windows 7": /(windows nt 6.1)/i,
    "Windows Vista": /(windows nt 6.0)/i,
    "Windows Server 2003/XP x64": /(windows nt 5.2|windows xp)/i,
    "Windows XP": /(windows nt 5.1|windows xp)/i,
    "Windows 2000": /(windows nt 5.0)/i,
    "Windows ME": /(win me)/i,
    "Windows 98": /(win98)/i,
    "Windows 95": /(win95)/i,
    "Windows 3.11": /(win16)/i,
    "Mac OS X": /(macintosh|mac os x)/i,
    "Mac OS 9": /(mac_powerpc)/i,
    Linux: /(linux)/i,
    Ubuntu: /(ubuntu)/i,
    iPhone: /(iphone)/i,
    iPod: /(ipod)/i,
    iPad: /(ipad)/i,
    Android: /(android)/i,
    BlackBerry: /(blackberry)/i,
    Mobile: /(webos|mobile)/i,
  };

  for (const [value, regex] of Object.entries(os_array)) {
    if (regex.test(userAgent)) {
      return value;
    }
  }

  return "Unknown OS Platform";
}

function getBrowser(userAgent) {
  const browser_array = {
    "Internet Explorer": /(msie|trident)/i,
    Firefox: /(firefox)/i,
    Safari: /(safari)/i,
    Chrome: /(chrome)/i,
    Edge: /(edge|edg)/i,
    Opera: /(opera|opr)/i,
    Netscape: /(netscape)/i,
    Maxthon: /(maxthon)/i,
    Konqueror: /(konqueror)/i,
    "Handheld Browser": /(mobile)/i,
  };

  for (const [value, regex] of Object.entries(browser_array)) {
    if (regex.test(userAgent)) {
      return value;
    }
  }

  return "Unknown Browser";
}

function generateUniqueId() {
  // Genera un número aleatorio de 4 dígitos y lo combina con la marca de tiempo actual
  const randomNum = Math.floor(Math.random() * 10000);
  const timestamp = new Date().getTime();
  const uniqueId = randomNum.toString() + timestamp.toString();
  return uniqueId;
}
