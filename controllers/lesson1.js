const jaredRoute = (req, res) => {
    res.send("Hello Jared Shongwe");
  };

  const lilianRoute = (req, res) => {
    res.send("Hello Lilian Shongwe");
  };

  const wangaRoute = (req, res) => {
    res.send("Hello Wanga Shongwe");
  };


  module.exports = {
    jaredRoute,
    wangaRoute,
    lilianRoute};