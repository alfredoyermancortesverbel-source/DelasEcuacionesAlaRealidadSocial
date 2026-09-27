# De las ecuaciones a la realidad social

Presentación académica interactiva de Alfredo Yerman Cortés Verbel para la [Semana Internacional de la Ciencia 2026](https://www.instagram.com/p/DdwJ2TcljKP/) en la Universidad Libre Seccional Cartagena.

## Abrir

Abre `index.html` en un navegador moderno. Conserva `styles.css`, `models.js` y `app.js` en la misma carpeta. No requiere instalación, servidor, conexión a servicios externos ni claves.

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz del repositorio elegido, conservando los nombres de los archivos.
2. En la configuración del repositorio, abre **Pages** y selecciona la publicación desde la rama que contiene los archivos y la carpeta raíz.
3. Guarda la configuración y espera a que GitHub muestre la dirección pública.

Los enlaces y recursos son relativos: funcionan tanto en la página de usuario como en un repositorio de proyecto. El archivo `.nojekyll` evita procesamiento de plantillas. No hay proceso de construcción ni dependencias.

También se entrega por separado `modelos-sociales.html`, una versión autónoma. Se puede renombrar como `index.html` y publicar como único archivo. Para actualizarla después de editar los archivos separados, hay que regenerar esa versión autónoma.

## Contenido

- Fundamentos y características de los modelos matemáticos.
- Capitalización individual, renta actuarial, reparto y beneficio definido.
- SIR, SEIR, SIRD y SEIRD, cada uno con su propia pestaña.
- Gráficas de infecciosos, incidencia, contagios acumulados y compartimentos.
- Comparación de R₀, animación manual con pausa y control de avance, tablas de resultados.
- Referencias, interpretación y supuestos visibles.

## Uso en celulares y accesibilidad

En celulares, un selector compacto permite cambiar de modelo. Los parámetros se despliegan con «Ajustar parámetros» y el botón «Ver gráfica actualizada» devuelve al resultado. En escritorio se conserva la navegación por pestañas. Se puede operar con teclado, controles numéricos y deslizadores. Las gráficas tienen descripciones y una tabla alternativa. Las transiciones respetan la preferencia de movimiento reducido; la animación de resultados solo comienza al pulsar **Animar**.

## Cálculos

Los modelos epidemiológicos usan integración Runge–Kutta de cuarto orden, con paso de 0,1 días. El modelo cerrado conserva S + E + I + R + D = N. En SIR y SEIR, D = 0. La transmisión es β = R₀ / duración infecciosa. En modelos con mortalidad, γ + μ = 1 / duración infecciosa. En modelos con latencia, σ = 1 / latencia. Se inicia con E = R = D = 0.

El pico mostrado es el máximo dentro del horizonte seleccionado. Los valores son continuos y aproximados; cantidades inferiores a una persona representan valores esperados del modelo. La comparación de R₀ mantiene iguales todos los demás parámetros. Las métricas corresponden siempre al R₀ editable, incluso al mostrar varias curvas.

La capitalización supone aportes al final de cada año y rentabilidad real constante. El factor actuarial es un supuesto editable, no una tabla de mortalidad. Reparto y beneficio definido son modelos agregados y algebraicos simplificados, respectivamente. No se implementan reglas pensionales legales.

## Alcance

Contenido adaptado del documento y la presentación Beamer suministrados por el autor. La población de referencia de Cartagena procede de ese material. Los parámetros y las simulaciones tienen finalidad didáctica: no constituyen pronósticos epidemiológicos ni liquidaciones pensionales individuales. No se recopilan datos, no hay analítica y los valores introducidos permanecen en la memoria del navegador.

No se ha publicado automáticamente en un repositorio. La publicación se realiza al cargar los archivos y habilitar GitHub Pages.

