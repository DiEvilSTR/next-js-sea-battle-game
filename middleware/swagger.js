import { swaggerUi } from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { yaml } from "js-yaml";
import { fs } from "fs";

const Swagger = () => {};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default Swagger;

export function getServerSideProps({ res }) {
    const doc = yaml.load(fs.readFileSync("./swagger.json"));
    res.setHeader("Content-Type", "text/html");
    res.write(
        swaggerUi.generateHTML(doc, {
        title: "Your API Documentation",
        })
    );
    res.end();
}
