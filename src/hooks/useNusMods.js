import { useState } from "react";

export const useNusMods = () => {
  function formatYear(acadyear) {
    return "20" + acadyear.substring(0, 3) + "20" + acadyear.substring(3);
  }

  const [error1, setError1] = useState(null);
  const [modExist, setModExist] = useState(true);
  var modName = null;
  const usingapi = async (ay, mc) => {
    const nusmodsAPI =
      "https://api.nusmods.com/v2/" +
      formatYear(ay) +
      "/modules/" +
      mc +
      ".json";

    await fetch(nusmodsAPI)
      .then((response) => response.json())
      .then((data) => {
        modName = data.title;
        console.log(data + " this is data");
      })
      .catch((error) => {
        setModExist(false);
        setError1(`Module does not exist! Please click checkbox:)`);
      });

    console.log("modname var inside usingapi is " + modName);
    return modName;
  };

  return { error1, usingapi, modExist };
};
