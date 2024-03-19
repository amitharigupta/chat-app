
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// import logger from "../config/logger";
const version = "1.0.0";

const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat App API with Swagger",
      version: version,
      description: "This is a chat app developed by Amit Gupta using NodeJS, Prisma, Mysql, ReactJS"
    },
    servers: [
      {
        url: `http://localhost:${port}`
      }
    ]
  },
  apis: ["../routes/*.js"]
}


const swaggerDocument = swaggerJsDoc(options);


function swaggerDoc(app, port) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.get('docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocument);
  })

  console.log(`Api Docs available at http://localhost:${port}/docs`);
}

export default swaggerDoc;
