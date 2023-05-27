<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
       <xsl:template match="/">
              <html>
                     <head>
                            <link rel="stylesheet" type="text/css" href="estilosP.css"/>
                     </head>
                     <body>
                             <header>
                            <div class="autor">
                            Gimnasio Bubito
                             </div>
                             <nav>
                                <a href="https://carloscastrofernandez.github.io/ProyectoFinalLLM/">Inicio</a>
                                <a href="https://carloscastrofernandez.github.io/ProyectoFinalLLM/EleccionSelect">Ajustes</a>
                                 <input id="mostrar-modal" name="modal" type="radio" /> 
            <label for="mostrar-modal"> Modal </label>
    
            <div id="modal">     
                <p> -Jose Antonio Holgado Bonet 1DAW <br> -Más información: Cuando se pulsa en ella aparecerá un alert con la información del autor del trabajo. Debes pulsar el botón 'COLOCAR' para aplicarlo<br>
                -En la esquina inferior derecha se visualizará un recuadro donde se recive el valor del campo html de configuración.(También será afectado por el modo noche/día)<br>-El botón 'APLICAR' 
                se aplica solo en los colores, el tamaño de las letras y en el cursor. También se incluye en el modal (Aparecerá un mensaje para saber si se ha aplicado) </p>
                
            </div>
    
            <!--Mostramos el boton de la x para salir del modal-->
            <input id="cerrar-modal" name="modal" type="radio" /> 
            <label for="cerrar-modal"> X </label>
                                <a href="https://carloscastrofernandez.github.io/ProyectoFinalLLM/ficheroPruebaArrays.html" target="_blank">TA-TE-TI</a>
                                <a href="https://carloscastrofernandez.github.io/ProyectoFinalLLM/soldadito.xml">Cancion de guerra</a>
                             </nav>


                             </header>
                            <h1> <xsl:value-of select="cancion/titulo"></xsl:value-of></h1>
                            <h1> <xsl:value-of select="cancion/autor"></xsl:value-of></h1>
                            <xsl:for-each select="cancion/letras/estrofa">
                                   <h2>Estrofa</h2>
                                          <xsl:for-each select="verso">
                                          <span>
                                          <p>
                                          <xsl:value-of select="."/>
                                          </p>
                                          </span>
                                          </xsl:for-each>  
                                          
                            </xsl:for-each>
                  
                     </body>
              </html>
       </xsl:template>
</xsl:stylesheet>
