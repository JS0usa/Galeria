import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

//import dos estilos CSS
import "./index.css"



/**
 * Na página Index é exportado o Layout pré-feito do Gatsby Starter Default
 * com a alteração de cada imagem na "Galeria" ser "iniciada" atravéz do tag 'StaticImage'
 * este tag é relativamente recente à framework, sendo que este é importado do "gatsby-plugin-image", 
 * tendo descontinuado o "gatsby-image". Todas as imagens encontram-se na pasta 'images', todas as imagens são estáticas
 * 
 * O tag inclui formatação para cada imagem correspondente, sendo o "alt" um nome alternativo obrigatório 
 * 
 * Duas divs para as imagens aparecerem com o display de 'grid' especificado no ficheiro  Index.css
 */


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    

    <div className="container">
      <div className="image-container">

        <StaticImage
          src="../images/beach.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="sand"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />

        <StaticImage
          src="../images/bridge.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="ponte"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
          
        />

        <StaticImage
          src="../images/seagull.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="bird"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
          
        />

        <StaticImage
          src="../images/code.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="code"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />

        <StaticImage
          src="../images/code2.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="code2"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />
        
        <StaticImage
          src="../images/mountains.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="mountains"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />        
        <StaticImage
          src="../images/nature.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="nature"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />        
        <StaticImage
          src="../images/phone.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="phone"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />        
        <StaticImage
          src="../images/pillars.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="pilars"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />
        <StaticImage
          src="../images/that's_a_lot_of_blue.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="pc"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />
        <StaticImage
          src="../images/water.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="water"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />
        <StaticImage
          src="../images/dog.jpg"
          margin={5}
          layout="constrained"
          width={300}
          height={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="dog"
          style={{ marginRight: `1rem` ,marginBottom: `1rem` }}
        />
    </div>
  </div>

  </Layout>
)

export default IndexPage

