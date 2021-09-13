const expect = require("chai").expect;
const SongService = require("../services/song.service");

//#region data

const song1 = {
  nom: "song1",
  note: "9",
};
const song2 = {
  nom: "ketchup",
  note: "8",
};

//# end region data

describe("SongService", () => {
  describe("isBetter", () => {
    it("should return true", () => {
      const result = SongService.isBetter(song1, song2);
      expect(result).to.be.true;
    });
    it("should return false", () => {
      const result = SongService.isBetter(song2, song1);
      expect(result).to.be.false;
    });

    it("should return null", () => {
      const result = SongService.isBetter(song2, song1);
      expect(result).to.be.null;
    });
  });
});
//KO