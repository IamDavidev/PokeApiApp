const Getpokes = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then((r) => r.json())
    .then((response) => {
      const { results } = response;
      const data = results.map((pokemon) => {
        const { name, url } = pokemon;
        return { name, url };
      });
      return data;
    });
    return res;
};
export default Getpokes;
// return {
//   name: pokemon.name,
//   url: pokemon.url,
// };
// const [pokes, setPokes] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);

// const fetchData = async () => {
//     setLoading(true);
//     setError(false);

//     try {
//         const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
//         setPokes(result.data.results);
//     } catch (error) {
//         setError(true);
//     }

//     setLoading(false);
// };

// useEffect(() => {
//     fetchData();
// }, []);

// return {pokes, loading, error};
