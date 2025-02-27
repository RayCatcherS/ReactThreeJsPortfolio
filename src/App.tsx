import mediaAssetsData from './assets/remoteAssets/mediaAssetsData.json';
import CategoryPage from './assets/pages/CategoryPage';


function App() {
  

  


  return (
    <main>
      <CategoryPage mediaAssetData={mediaAssetsData.assetsData}></CategoryPage>
      {/** <CategoryPage mediaAssetData={mediaAssetsData.assetsData}></CategoryPage> **/}
    </main>
  );
}

export default App;
