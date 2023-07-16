export function getInsertData() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  var host_campana = window.location.host;
  var identificador = window.navigator.userAgent;
  var sistema = getOS(identificador);
  var navegador = getBrowser(identificador);
  var id = generateUniqueId();
  var dispositivo = urlParams.get('model');

  var insertData = {
    'hostCampana': host_campana,
    'path':'',
    'date': '',
    'identificador': identificador,
    'folio': id,
    'dispositivoRt':dispositivo,
    'direccionIp': '',
    'navegador': navegador,
    'sistema': sistema
  }

return insertData;
}


function getOS(userAgent) {
    var os_platform = 'Unknown OS Platform';
  
    var os_array = {
      'Windows 10': /(windows nt 10)/i,
      'Windows 8.1': /(windows nt 6.3)/i,
      'Windows 8': /(windows nt 6.2)/i,
      'Windows 7': /(windows nt 6.1)/i,
      'Windows Vista': /(windows nt 6.0)/i,
      'Windows Server 2003/XP x64': /(windows nt 5.2|windows xp)/i,
      'Windows XP': /(windows nt 5.1|windows xp)/i,
      'Windows 2000': /(windows nt 5.0)/i,
      'Windows ME': /(win me)/i,
      'Windows 98': /(win98)/i,
      'Windows 95': /(win95)/i,
      'Windows 3.11': /(win16)/i,
      'Mac OS X': /(macintosh|mac os x)/i,
      'Mac OS 9': /(mac_powerpc)/i,
      'Linux': /(linux)/i,
      'Ubuntu': /(ubuntu)/i,
      'iPhone': /(iphone)/i,
      'iPod': /(ipod)/i,
      'iPad': /(ipad)/i,
      'Android': /(android)/i,
      'BlackBerry': /(blackberry)/i,
      'Mobile': /(webos|mobile)/i
    };
  
    Object.entries(os_array).forEach(([value, regex]) => {
      if (regex.test(userAgent)) {
        os_platform = value;
      }
    });
  
    return os_platform;
  }
  
function getBrowser(userAgent) {
    var browser = 'Unknown Browser';
  
    var browser_array = {
      'Internet Explorer': /(msie|trident)/i,
      'Firefox': /(firefox)/i,
      'Safari': /(safari)/i,
      'Chrome': /(chrome)/i,
      'Edge': /(edge|edg)/i,
      'Opera': /(opera|opr)/i,
      'Netscape': /(netscape)/i,
      'Maxthon': /(maxthon)/i,
      'Konqueror': /(konqueror)/i,
      'Handheld Browser': /(mobile)/i
    };
  
    Object.entries(browser_array).forEach(([value, regex]) => {
      if (regex.test(userAgent)) {
        browser = value;
      }
    });
  
    return browser;
  }

  function generateUniqueId() {
    // Genera un número aleatorio de 4 dígitos y lo combina con la marca de tiempo actual
    const randomNum = Math.floor(Math.random() * 10000);
    const timestamp = new Date().getTime();
    const uniqueId = randomNum.toString() + timestamp.toString();
    return uniqueId;
  }