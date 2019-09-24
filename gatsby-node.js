const { createFilePath } = require(`gatsby-source-filesystem`)

// Para adicionar o campo slug a cada postagem
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Garante que estamos processando apenas arquivos de remarcação
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` para transformar arquivos de remarcação no diretório` data / faqs` em `/ faqs / slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Cria um novo campo query'able com o nome 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}
