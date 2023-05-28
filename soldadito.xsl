<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
       <xsl:template match="/">
              <html>
                     <head>
                            <link rel="stylesheet" type="text/css" href="estilosP.css"/>
                     </head>
                     <body>
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
