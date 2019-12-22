var headers=chrome.extension.getBackgroundPage().currentHeader;
function $(id){return document.getElementById(id);}
function escapeHTML(str) { return str.replace(/[&"'<>]/g, (m) => ({ "&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;" })[m]); }
function html(id,html){$(id).innerHTML=escapeHTML(html)};

html("header",headers.header);

html("headersrv",headers.server+" 0(Lookup)");
$("headersrv").href="http://ddg.gg/?q="+headers.server;

html("ip",headers.ip);
$("ip").href="http://"+headers.ip;

$("ibip").href="https://www.infobyip.com/ip-"+headers.ip+".html";
$("ipcn").href="http://ip.cn/index.php?ip="+headers.ip;
$("ipinfoio").href="https://ipinfo.io/"+headers.ip;
$("wimipa").href="https://whatismyipaddress.com/ip/"+headers.ip;

var width=headers.url.length>100?headers.url.length:100;

var qrcode = new QRCode("qrcode", {
    text: headers.url,
    width: width,
    height: width,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
