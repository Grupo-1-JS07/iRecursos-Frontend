function Home() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Seja Bem Vinde ao iRecursos!</h2>
            <p>
              É uma aplicação web para profissionais de RH onde é possível fazer
              todo o gerenciamento de times, integrando os colaboradores aos
              cargos e seus superiores.
            </p>
          </div>

          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/3733/3733871.png?ga=GA1.1.1890198675.1754349318"
              alt="Imagem da Página Home"
              width="400px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
