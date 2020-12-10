export const validateFile = (value) => {
    const allowedExtensions = /(.txt|.cvs|.xls|.xlsx)$/i;
    if(!allowedExtensions.exec(value[0].name)){       
        return "Extensión no válida. El archivo solo puede tener extensión .txt, .cvs, .xls o .xlsx";
    }
    return true;
}
