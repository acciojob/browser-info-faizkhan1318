//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const browserName = getName();
	const browserVersion = getVersion();

	const browserData = document.getElementById("browser-info");
	browserData.innerText = "You are using " + browserName + " version " + browserVersion;
	
})
function getName() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome")) {
        return "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
        return "Mozilla Firefox";
    } else if (userAgent.includes("Safari")) {
        return "Apple Safari";
    } else if (userAgent.includes("Edge")) {
        return "Microsoft Edge";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        return "Opera";
    } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
        return "Internet Explorer";
    } else {
        return "Unknown Browser";
    }
}

function getBrowserVersion() {
    const userAgent = navigator.userAgent;
    const versionIndex = userAgent.indexOf('Version/');

    if (versionIndex !== -1) {
        return userAgent.substring(versionIndex + 8, userAgent.indexOf(' ', versionIndex));
    } else {
        return "Unknown Version";
    }
}