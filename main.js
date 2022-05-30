// Get Cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
// Set Cookie
function setCookie(value) {
  var d = new Date();
  d.setTime(d.getTime() + (10*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "ad-api="+value+";"+expires+";path=/";
}
// Select Advert
function selectAd(ads) {
  const length = ads.length
  var cookie = parseInt(getCookie('ad-api'));
  var advert = ads[cookie];
  if (ads[cookie+1]) {
    setCookie(cookie+1)
  } else {
    setCookie(0)
  }
  // API Tag
  var tag = document.getElementById('ad-api');
  // Ad Link
  var link = document.createElement("A");
  link.setAttribute("href", advert.link);
  link.setAttribute("target", '_blank');
  link.setAttribute("id", 'ad-api-link');
  tag.appendChild(link);
  // Image Tag
  var image = document.createElement("img");
  image.setAttribute("src", advert.image);
  image.setAttribute("width", advert.width);
  image.setAttribute("height", advert.height);
  link.appendChild(image);
}
