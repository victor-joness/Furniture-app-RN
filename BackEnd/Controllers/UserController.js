const User = require("../models/User");

module.exports = {
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User deletado com sucesso" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if(!user) return res.status(404).json({ message: "User não existe" });

      const { password, __v, createdAt, updateAt, ...userData } = user._doc;

      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
