import "reflect-metadata";
import "module-alias/register";

import { server } from "./app";

server.listen(process.env.PORT || 3333, () => {
  console.log("Server is Running 🚀");
});
