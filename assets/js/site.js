(function(){
  "use strict";
  document.addEventListener("click",function(event){
    var link=event.target.closest("[data-analytics-event]");
    if(!link) return;
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({
      event:link.getAttribute("data-analytics-event"),
      page_language:document.documentElement.lang,
      page_path:window.location.pathname,
      cta_label:link.getAttribute("data-analytics-label")||link.textContent.trim(),
      cta_location:link.getAttribute("data-analytics-location")||"",
      link_url:link.href||""
    });
  },true);
})();
