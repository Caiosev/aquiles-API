class HomeController {
  index(req, res) {
    res.json({
      balapai: true,
    });
  }
}
export default new HomeController();
