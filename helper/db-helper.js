import { MongoClient } from "mongodb";

let cachedConnection = null;

const connectToDatabase = async () => {
  try {
    if (!cachedConnection) {
      const connection = await MongoClient.connect(
        "MONGODB URI"
      );
      if (connection) {
        cachedConnection = connection;
        console.log("Connection established");
      }
    }

    return cachedConnection;
    
  } catch (error) {
    console.log("Connection failed!");
    console.log(error);
  }
};

export default connectToDatabase;
