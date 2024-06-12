const setLanguageCookie = (expireIn, lang) => {
    const cookieExpire = new Date();
    cookieExpire.setTime(cookieExpire.getTime() + expireIn);
    document.cookie = `culture=${lang}; expires=${cookieExpire.toUTCString()}; path=/;`;
}