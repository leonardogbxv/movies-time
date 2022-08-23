window.addEventListener("load", async () => {
  const actors = await fetchActors();

  actors.forEach(actor => insertNewRow('actors-table', actor));
});

const fetchActors = async () => {
  const date = new Date();

  return [
    {
      id: 1,
      nome: "Matheus Santos",
      dt_nascimento: date
    },
    {
      id: 2,
      nome: "Leonardo Gomes",
      dt_nascimento: date
    },
    {
      id: 3,
      nome: "Luara Bruning",
      dt_nascimento: date
    }
  ];
}
