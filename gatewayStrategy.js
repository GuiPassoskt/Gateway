const strategyCulture = {
    'pt': (motivo) => GatewayCodesPt[motivo],
    'en': (motivo) => GatewayCodesEn[motivo],
    'es': (motivo) => GatewayCodesEs[motivo]
}

const setErrorCode = (motivo) => {

    const culture = document.cookie.match(/culture=([^;]+)/)
    const currentCulture = culture ? culture[1] : 'pt'
    return strategyCulture[currentCulture](motivo) ?? motivo

}

function setLanguageCookie(expireIn, lang) {
    const cookieExpire = new Date();
    cookieExpire.setTime(cookieExpire.getTime() + expireIn);
    document.cookie = `culture=${lang}; expires=${cookieExpire.toUTCString()}; path=/;`;
  }