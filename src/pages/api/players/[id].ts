export const GET = async ({ params }) => {
  try {
    const playerTag = params.id;
    const response = await fetch(
      `https://bsproxy.royaleapi.dev/v1/players/%23${playerTag}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("No se pudo obtener la respuesta de la API");
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Permitir solicitudes desde cualquier origen
      },
    });
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Permitir solicitudes desde cualquier origen
      },
    });
  }
};
