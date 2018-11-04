// OS detection
function isAndroidOS()
{
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  return (/android/i.test(userAgent));
}

function isIos()
{
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  return (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream);
}

// Logic
    
function getCurrentOsLink(desktopOrFallbackLinkUrl) {
    if (isAndroidOS()) {
      return = "https://play.google.com/store/apps/details?id=com.cotano.cotano";
    } else if (isIos()) {
      return "https://itunes.apple.com/us/app/cotano/id1250187572?ls=1&mt=8";
    } else {
      return desktopOrFallbackLinkUrl;
    }
 }
