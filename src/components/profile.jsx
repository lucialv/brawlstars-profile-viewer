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

  return (
    <div>
      <form onSubmit={handleSubmit} className="gap-8 flex">
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
          {datos.brawlers.map((brawler) => (
            <div key={brawler.id}>
              <p>Nombre del Brawler: {brawler.name}</p>
              {brawler.name === "SHELLY" ? (
                <img
                  src="https://static.wikia.nocookie.net/brawlstars/images/e/e5/Shelly_Portrait.png"
                  alt="Shelly"
                />
              ) : null}
              <div className="relative">
                <img
                  src="/fuerza.png"
                  alt="power"
                  className="absolute h-8 top-0 right-0"
                />

                {brawler.power < 10 ? (
                  <p className="absolute top-[4px] right-[10.5px] font-bold">
                    {brawler.power}
                  </p>
                ) : (
                  <p className="absolute top-[4px] right-[6.5px] font-bold">
                    {brawler.power}
                  </p>
                )}
              </div>

              <img
                src={`/ranks/Rank_${brawler.rank}.webp`}
                className="w-8"
                alt={`Rank ${brawler.rank} Image`}
              ></img>
              <p>Trofeos del Brawler: {brawler.trophies}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Ingrese el tag del jugador y presione 'Buscar'.</p>
      )}
    </div>
  );
};

export default Profile;
