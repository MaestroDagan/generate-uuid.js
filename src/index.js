module.exports =
  /**
   *
   * @returns {string} UUID
   */
  () => {
    try {
      const OPTIONS = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ];

      const resultArray = [];

      for (let index = 1; index < 37; index++) {
        if (index == 9 || index == 14 || index == 19 || index == 24) {
          resultArray.push("-");
        } else
          resultArray.push(OPTIONS[Math.floor(Math.random() * OPTIONS.length)]);
      }

      return resultArray.join("");
    } catch (err) {
      if (err) throw new Error(err);
    }
  };
