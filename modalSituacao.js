const configModal = {
    'pt': {
        tile: 'Falha',
        button: 'Fechar'
    },
    'en': {
        tile: 'Failure',
        button: 'Close'
    },
    'es': {
        tile: 'Falla',
        button: 'Cerrar'
    }
}

const tranlateConfigModal = () => {
    const culture = document.cookie.match(/culture=([^;]+)/)
    const currentCulture = culture ? culture[1] : 'pt'
    return configModal[currentCulture]
}

const AbrirModalSituacaoTransferencia = (motivo) => {
    Swal.fire({
        title: `${tranlateConfigModal().tile}!`,
        icon: 'error',
        confirmButtonText: tranlateConfigModal().button,
        html: tranlateCodeError(motivo)
    })
}