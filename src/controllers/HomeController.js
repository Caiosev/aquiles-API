import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Anaxímenes ',
      sobrenome: 'de Mileto',
      email: 'OSegundoPapiro@gmail.com',
      idade: 2610,
      peso: '90',
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
