import { useState, useEffect } from 'react';

export const useNusMods = () => {
    function formatYear(acadyear) {
        return "20" + acadyear.substring(0, 3) + "20" + acadyear.substring(3);
      }

    const [error1, setError1] = useState(null);
    const [moduleName, setModuleName] = useState("");
    const [modExist, setModExist] = useState(true);
    var modName = null;
    const usingapi = async (ay, mc) => {
        const nusmodsAPI =
          "https://api.nusmods.com/v2/" +
          formatYear(ay) +
          "/modules/" +
          mc +
          ".json";
        
        
        // useEffect(() => {
        //   fetch(nusmodsAPI)
        //     .then((response) => response.json())
        //     .then((data) => setModuleName(data.title))
        //     .catch((error) =>
        //       setError1(`Module does not exist! Please click checkbox:)`)
        //     );
        // }, []);

            await fetch(nusmodsAPI)
              .then((response) => response.json())
              .then((data) => {
                // setModuleName(data.title)
                modName = data.title;
                console.log(data + " this is data")
              })
              .catch((error) => {
                setModExist(false);
                setError1(`Module does not exist! Please click checkbox:)`)
    });

      console.log("modname var inside usingapi is " + modName);
      return modName;
    //    return moduleName; 
    }

    return { error1, usingapi, modExist  };
}



