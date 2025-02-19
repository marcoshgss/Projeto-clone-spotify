import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://MarcosHenrique1:7Wc50m2NXj0FWRjl@cluster0.zknjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
