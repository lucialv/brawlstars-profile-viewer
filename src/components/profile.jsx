import React, { useState } from "react";

const Profile = () => {
  const [playerTag, setPlayerTag] = useState(""); // Estado para almacenar el tag del jugador
  const [datos, setDatos] = useState(null);

  const handleChange = (event) => {
    setPlayerTag(event.target.value); // Actualiza el estado cuando cambia el valor del input
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    try {
      const response = await fetch(`/api/players/${playerTag}`); // Utiliza el endpoint con el tag del jugador
      if (!response.ok) {
        throw new Error("No se pudo obtener la respuesta de la API");
      }
      const data = await response.json();
      setDatos(data); // Actualiza los datos en el estado
      console.log(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  function androidColorToHex(androidColor) {
    var red = (androidColor >> 16) & 0xff;
    var green = (androidColor >> 8) & 0xff;
    var blue = androidColor & 0xff;

    var redHex = ("0" + red.toString(16)).slice(-2);
    var greenHex = ("0" + green.toString(16)).slice(-2);
    var blueHex = ("0" + blue.toString(16)).slice(-2);

    // Formatear y devolver el color hexadecimal
    var hexColor = "#" + redHex + greenHex + blueHex;
    return hexColor.toUpperCase(); // Convertir a mayúsculas
  }

  const fondo = (brawler) => {
    if (brawler === "SHELLY") {
      return "#94d7f4";
    } else if (
      brawler === "NITA" ||
      brawler === "COLT" ||
      brawler === "BULL" ||
      brawler === "BROCK" ||
      brawler === "EL PRIMO" ||
      brawler === "BARLEY" ||
      brawler === "POCO" ||
      brawler === "ROSA"
    ) {
      return "#2edd1c";
    } else if (
      brawler === "JESSIE" ||
      brawler === "DYNAMIKE" ||
      brawler === "TICK" ||
      brawler === "8-BIT" ||
      brawler === "RICO" ||
      brawler === "DARRYL" ||
      brawler === "PENNY" ||
      brawler === "CARL" ||
      brawler === "JACKY" ||
      brawler === "GUS"
    ) {
      return "#0086fb";
    } else if (
      brawler === "BO" ||
      brawler === "EMZ" ||
      brawler === "STU" ||
      brawler === "PIPER" ||
      brawler === "PAM" ||
      brawler === "FRANK" ||
      brawler === "BIBI" ||
      brawler === "BEA" ||
      brawler === "NANI" ||
      brawler === "EDGAR" ||
      brawler === "GRIFF" ||
      brawler === "GROM" ||
      brawler === "BONNIE" ||
      brawler === "GALE" ||
      brawler === "COLETTE" ||
      brawler === "BELLE" ||
      brawler === "ASH" ||
      brawler === "LOLA" ||
      brawler === "SAM" ||
      brawler === "MANDY" ||
      brawler === "MAISIE" ||
      brawler === "HANK" ||
      brawler === "PEARL" ||
      brawler === "LARRY & LAWRIE" ||
      brawler === "ANGELO"
    ) {
      return "#b116ed";
    } else if (
      brawler === "MORTIS" ||
      brawler === "TARA" ||
      brawler === "GENE" ||
      brawler === "MAX" ||
      brawler === "MR. P" ||
      brawler === "SPROUT" ||
      brawler === "BYRON" ||
      brawler === "SQUEAK" ||
      brawler === "LOU" ||
      brawler === "RUFFS" ||
      brawler === "BUZZ" ||
      brawler === "FANG" ||
      brawler === "EVE" ||
      brawler === "JANET" ||
      brawler === "OTIS" ||
      brawler === "BUSTER" ||
      brawler === "GRAY" ||
      brawler === "R-T" ||
      brawler === "WILLOW" ||
      brawler === "DOUG" ||
      brawler === "CHUCK" ||
      brawler === "CHARLIE" ||
      brawler === "MICO" ||
      brawler === "MELODIE"
    ) {
      return "#ff0424";
    } else if (
      brawler === "SPIKE" ||
      brawler === "CROW" ||
      brawler === "LEON" ||
      brawler === "SANDY" ||
      brawler === "AMBER" ||
      brawler === "MEG" ||
      brawler === "SURGE" ||
      brawler === "CHESTER" ||
      brawler === "CORDELIUS" ||
      brawler === "KIT"
    ) {
      return "#fef01e";
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="gap-8 flex items-center justify-center"
      >
        <input
          className="rounded-lg px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          value={playerTag}
          onChange={handleChange}
          placeholder="Ingrese el tag del jugador"
        />
        <button
          className="rounded-lg px-4 py-2 border-2 hover:bg-blue-500 text-white border-gray-300 hover:outline-none hover:border-blue-500 "
          type="submit"
        >
          Buscar
        </button>
      </form>

      {datos ? (
        <div className="text-white">
          {/* Mostrar los datos aquí */}
          <div className="flex gap-4">
            <img
              src={`https://brawlace.com/assets/images/brawlstars/icons-players/${datos.icon.id}.png`}
              alt={`icon`}
              className="w-8"
            ></img>
            <span style={{ color: `${androidColorToHex(datos.nameColor)}` }}>
              {datos.name}
            </span>
          </div>

          <p>Nivel: {datos.level}</p>
          <div className="grid grid-cols-3 gap-8">
            {datos.brawlers.map((brawler) => (
              <div>
                <div className="w-1/2 bg-[#ef7527] border-black border h-[10px] flex relative">
                  <img
                    src="/assets/Trophy.webp"
                    alt="trophie"
                    className="w-auto h-[7px] ml-8 mt-[1.2px] object-contain aspect-auto"
                  />
                  <span className="text-[#f9b623] font-bold ml-[0.5px] text-[8px] -mt-[1.9px]">
                    {brawler.trophies}
                  </span>
                  <img
                    src={`/ranks/Rank_${brawler.rank}.webp`}
                    className="w-7 z-10 absolute -left-3 -top-3"
                    alt={`Rank ${brawler.rank} Image`}
                  ></img>
                </div>
                <div
                  style={{ backgroundColor: `${fondo(brawler.name)}` }}
                  className="w-[150px] relative border-2 border-black shadow-lg"
                  key={brawler.id}
                >
                  {brawler.name === "8-BIT" ? (
                    <img
                      className="h-[80px]"
                      src="/brawlers/8-BIT_Portrait.webp"
                      alt="8-BIT"
                    />
                  ) : brawler.name === "MR. P" ? (
                    <img
                      className="h-[80px]"
                      src="/brawlers/Mr.P_Portrait.webp"
                      alt="Colt"
                    />
                  ) : brawler.name === "LARRY & LAWRIE" ? (
                    <img
                      className="h-[80px]"
                      src="/brawlers/LarryLawrie_Portrait.webp"
                      alt="Jessie"
                    />
                  ) : brawler.name === "EL PRIMO" ? (
                    <img
                      className="h-[80px]"
                      src="/brawlers/El_Primo_Portrait.webp"
                      alt="Jessie"
                    />
                  ) : (
                    <img
                      className="h-[80px]"
                      src={`/brawlers/${
                        brawler.name.charAt(0).toUpperCase() +
                        brawler.name.slice(1).toLowerCase()
                      }_Portrait.webp`}
                      alt={`${
                        brawler.name.charAt(0).toUpperCase() +
                        brawler.name.slice(1).toLowerCase()
                      } Portrait`}
                    />
                  )}
                  <div>
                    <img
                      src="/fuerza.png"
                      alt="power"
                      className="absolute h-8 top-11 right-1"
                    />

                    {brawler.power < 10 ? (
                      <p className="absolute top-[47.5px] right-[14.5px] font-bold">
                        {brawler.power}
                      </p>
                    ) : (
                      <p className="absolute top-[47.5px] right-[10.5px] font-bold">
                        {brawler.power}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Ingrese el tag del jugador y presione 'Buscar'.</p>
      )}
    </div>
  );
};

export default Profile;
