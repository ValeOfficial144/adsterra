(() => {
    const ADS_KEY = "ads:enableAds"; 
    const LAST_OPEN_KEY = "ads:lastAdOpenAt";
    const COOLDOWN_MS = 6 * 60 * 1000; 
    const SMARTLINK = "smartlink_url_here"; 

    const enabled = (localStorage.getItem(ADS_KEY) || "yes") === "yes";
    document.addEventListener("click", () => {
        const now = Date.now();
        if (now - Number(localStorage.getItem(LAST_OPEN_KEY) || 0) < COOLDOWN_MS) return;

        localStorage.setItem(LAST_OPEN_KEY, String(now));
        window.open(SMARTLINK, "_blank")?.blur();
        window.focus();
    });
})();
