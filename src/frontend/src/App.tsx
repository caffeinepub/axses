import { HomePage } from './pages/HomePage';
import { AboutGamePage } from './pages/AboutGamePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { WorldMapPage } from './pages/WorldMapPage';
import { GalleryPage } from './pages/GalleryPage';
import { DownloadPage } from './pages/DownloadPage';
import { ContactPage } from './pages/ContactPage';
import { Header } from './components/site/Header';
import { Footer } from './components/site/Footer';
import { useHashRouter } from './router/useHashRouter';
import { routes } from './router/routes';

function App() {
  const { currentRoute } = useHashRouter();

  const CurrentPage = routes.find(r => r.path === currentRoute)?.component || HomePage;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <CurrentPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
