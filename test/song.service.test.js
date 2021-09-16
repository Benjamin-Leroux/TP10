const expect = require("chai").expect;
const SongService = require("../services/song.service");

//#region data

const song1 = {
  genre: "Pop",
  titre: "La banane",
  duree: 200,
  auteur: "Philippe Katerine",
};
const song2 = {
  genre: "Pop",
  titre: "Anissa",
  duree: 100,
  auteur: "Wejdenne",
};
const song3 = {
  genre: "Pop",
  titre: "Louxor j'adore",
  duree: 150,
  auteur: "Philippe Katerine",
};
const song4 = {
  genre: "Rock",
  titre: "Allumez le feu",
  duree: 150,
  auteur: "Johnny Haliday",
};

//# end region data

describe("SongService", () => {
  describe("isLonger", () => {
    it("should return true", () => {
      const result = SongService.isLonger(song1, song2);
      expect(result).to.be.true;
    });
    it("should return false", () => {
      const result = SongService.isLonger(song2, song1);
      expect(result).to.be.false;
    });
    it("should return false", () => {
      const result = SongService.isLonger(song3, song4);
      expect(result).to.be.false;
    });
  });
  describe("isFromSameArtist", () => {
    it("should return true", () => {
      const result = SongService.isFromSameArtist(song1, song3);
      expect(result).to.be.true;
    });
    it("should return false", () => {
      const result = SongService.isFromSameArtist(song2, song1);
      expect(result).to.be.false;
    });
  });
});
