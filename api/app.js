const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=br.com.vertitecnologia.mobile.vmlav.vmlaundry&pcampaignid=web_share";
const IOS_URL = "https://apps.apple.com/app/id6739942270";

module.exports = function handler(request, response) {
  const userAgent = request.headers["user-agent"] || "";

  let destination = "/";

  if (/android/i.test(userAgent)) {
    destination = ANDROID_URL;
  } else if (
    /iPad|iPhone|iPod/i.test(userAgent) ||
    (/Macintosh/i.test(userAgent) && /Mobile/i.test(userAgent))
  ) {
    destination = IOS_URL;
  }

  response.setHeader("Cache-Control", "private, no-store");
  response.setHeader("Vary", "User-Agent");
  response.redirect(302, destination);
};
