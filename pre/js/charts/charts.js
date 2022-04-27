import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart() {
    /////
    /////
    // Resto
    /////
    /////

    //Iframe
    setFixedIframeUrl('informe_perfil_mayores_2022_demografia_1_1_tabla','tabla_poblacion_municipios');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('tabla_poblacion_municipios');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('tabla_poblacion_municipios');
    });

    //Altura del frame
    setChartHeight();
}