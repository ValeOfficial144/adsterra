(() => {
    const ADS_KEY = "ads:enableAds"; // completely optional if you want to let your users toggle ads!
    const LAST_OPEN_KEY = "ads:lastAdOpenAt"; // makes sure your cooldown persists against reloads
    const COOLDOWN_MS = 2 * 60 * 1000; // replace the first digit (ex. 2) with the amount of minutes between ads
    const SMARTLINK = "smartlink_url_here"; // register a smartlink in your adsterra dashboard, then paste the link here

    const enabled = (localStorage.getItem(ADS_KEY) || "yes") === "yes";
    document.addEventListener("click", () => {
        const now = Date.now();
        if (now - Number(localStorage.getItem(LAST_OPEN_KEY) || 0) < COOLDOWN_MS) return;

        localStorage.setItem(LAST_OPEN_KEY, String(now));
        window.open(SMARTLINK, "_blank")?.blur();
        window.focus();
    });
})();
