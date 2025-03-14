import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.9bj7c.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodejs`)
      console.log('Conexão com o banco de dados efetuada com sucesso!')

    } catch (error) {
      console.log('Ocorreu um erro ao realizar conexão com o banco de dados! Erro: ', error)
    }
  };

export default connectToDatabase;