window.openCMS = function(newWin) {
  var id, match, matcher, hash, redirectUrl, res, _i, _len;
  hash = window.location.hash;
  redirectUrl = null;
  res = [
    {
      re: new RegExp("show_segment-(.+)", "gi"),
      cmsPath: "show_segments"
    }, {
      re: new RegExp("news_story-(.+)", "gi"),
      cmsPath: "news_stories"
    }, {
      re: new RegExp("blog_entry-(.+)", "gi"),
      cmsPath: "blog_entries"
    }
  ];
  for (_i = 0, _len = res.length; _i < _len; _i++) {
    matcher = res[_i];
    if (match = matcher.re.exec(hash)) {
      id = match[1];
      redirectUrl = "http://www.scpr.org/outpost/" + matcher.cmsPath + "/" + id + "/edit";
      break;
    }
  }
  if (redirectUrl) {
    newWin.location = redirectUrl;
    return newWin.focus();
  } else {
    newWin.close();
    return alert("This page doesn't contain a single article that I can open in Outpost.");
  }
};
