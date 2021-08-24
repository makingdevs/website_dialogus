function get_browser() {
  let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: (tem[1] || '') };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR|Edge\/(\d+)/)
    if (tem != null) { return { name: 'Opera', version: tem[1] }; }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
  return {
    name: M[0],
    version: M[1]
  };
}

function validateVersion() {
  const navigator = get_browser()
  if (navigator.name == 'Chrome' && Number(navigator.version) < 95) {
    return true;
  }

  if (navigator.name == 'Firefox' && Number(navigator.version) < 65) {
    return true;
  }

  if (navigator.name == 'Safari' && Number(navigator.version) < 14) {
    return true;
  }

  return false;
}

export { get_browser, validateVersion };
