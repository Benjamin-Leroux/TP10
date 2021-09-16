module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define("song", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    genre: {
      type: Sequelize.STRING,
      maxlength: 80,
      required: false,
    },
    titre: {
      type: Sequelize.STRING,
      maxlength: 80,
      required: true,
    },
    duree: {
      type: Sequelize.INTEGER,
      required: false,
      validate: {
        min: 0
      },
    },
    auteur: {
      type: Sequelize.STRING,
      maxlength: 100,
      required: true,
    },
  });

  return Song;
};
