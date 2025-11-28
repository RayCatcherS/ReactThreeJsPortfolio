import { useEffect, useState } from 'react';
import CategoryPage from './assets/pages/CategoryPage';

function App() {
  const [mediaAssetsData, setMediaAssetsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // sostituisci con il tuo URL reale
    const url = 'https://www.stefanoromanelli.it/remoteAssets/mediaAssetsData.json';

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Errore nel caricamento del JSON');
        }
        return res.json();
      })
      .then((data) => {
        setMediaAssetsData(data.assetsData);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Errore: {error}</div>;
  }

  if (!mediaAssetsData) {
    return <div>Caricamento…</div>;
  }

  return (
    <main>
      <CategoryPage mediaAssetData={mediaAssetsData} />
    </main>
  );
}

export default App;