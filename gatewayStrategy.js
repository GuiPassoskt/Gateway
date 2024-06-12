const strategyCulture = {
    'pt': (motivo) => GatewayCodesPt[motivo],
    'en': (motivo) => GatewayCodesEn[motivo],
    'es': (motivo) => GatewayCodesEs[motivo]
}

const tranlateCodeError = (motivo) => {
    const culture = document.cookie.match(/culture=([^;]+)/)
    const currentCulture = culture ? culture[1] : 'pt'
    return strategyCulture[currentCulture](motivo) ?? motivo
}