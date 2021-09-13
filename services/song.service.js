const SongRepository = require("../repositories/song.repository");

const SongService = {
  findAll: async () => {
    return await SongRepository.findAll();
  },
  findById: async (id) => {
    const song = await SongRepository.findById(id);
    return song;
  },
  findByArtist: async (artist) => {
    const song = await SongRepository.findByArtist(artist);
    return song;
  },
  create: async (song) => {
    await SongRepository.create(song);
  },
  update: async (id, songInfo) => {
    const song = await SongRepository.findById(id);
    if (!song) {
      throw Error("song not found");
    }
    await SongRepository.update(id, songInfo);
  },
  isBetter: (song1, song2) => {
    if (!song1) {
      throw Error("song1 is null");
    }
    if (!song2) {
      throw Error("song2 is null");
    }
    return song1.note > song2.note;
  },
};

module.exports = SongService;
