(async () => {
  const domain = window.location.hostname;
  const cssUrl = chrome.runtime.getURL(`source/${domain}.css`);

  try {
    const response = await fetch(cssUrl);
    if (response.ok) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssUrl;
      document.head.appendChild(link);
      // console.log(`[StyTek] Injected ${cssUrl}`);
    } else {
      // console.log(`[StyTek] No CSS for ${domain}`);
    }
  } catch (e) {
    // console.log(`[StyTek] Failed to fetch CSS: ${e.message} for ${domain}`);
  }
})();
