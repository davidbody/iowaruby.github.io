// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}
window.onload = externalLinks;

function setCookie(c_name, value, expiredays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      var c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

function update_code_example_link_and_cookie() {
  var code_example = $("code_example");
  var link = $("code_example_link");
  if (Element.visible(code_example)) {
    link.innerHTML = "Hide Code Example";
    setCookie('show_code_example', 'yes', 365);
  } else {
    link.innerHTML = "Show Code Example";
    setCookie('show_code_example', 'no', 365);
  }
}

function toggle_code_example() {
  var code_example = $("code_example");
  code_example.toggle();
  update_code_example_link_and_cookie();
}

function update_code_example() {
  var code_example = $("code_example");
  var show_code_example = getCookie('show_code_example');
  if (show_code_example == 'no') {
    Element.hide(code_example);
  } else {
    Element.show(code_example);
  }
  update_code_example_link_and_cookie();
}

document.observe("dom:loaded", function() {
  update_code_example();
});
