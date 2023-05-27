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
                                         <p >Alumno: Carlos Castro Fernandez.
                                          <br>
                                           Curso:1º DAW
                                           <br>
                                           En la zona de los ajustes cuando aplicas el tamaño de la letra se aplicará
                                            en la zona inicio y en la misma pagina ya que en la ventana modal si se modificara 
                                           <br>
                                           el tamaño de la letra se me desectructura la ventana y no queda bien en el diseño y 
                                          en el caso de que cambies de color se cambiara en la misma pagina y en la ventana modal
                                           ya que en la pagina inicio le tengo un color de letras por defecto respecto al modo dia y noche.
                                           </p>
                                    </div>
    
            <!--Mostramos el boton de la x para salir del modal-->
                            <input id="cerrar-modal" name="modal" type="radio" /> 
                             <label for="cerrar-modal"> X </label>
    
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
