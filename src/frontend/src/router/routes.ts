import { HomePage } from '../pages/HomePage';
import { AboutGamePage } from '../pages/AboutGamePage';
import { FeaturesPage } from '../pages/FeaturesPage';
import { WorldMapPage } from '../pages/WorldMapPage';
import { GalleryPage } from '../pages/GalleryPage';
import { DownloadPage } from '../pages/DownloadPage';
import { ContactPage } from '../pages/ContactPage';

export const routes = [
  { path: '/', label: 'Home', component: HomePage },
  { path: '/about', label: 'About Game', component: AboutGamePage },
  { path: '/features', label: 'Features', component: FeaturesPage },
  { path: '/world-map', label: 'World Map', component: WorldMapPage },
  { path: '/gallery', label: 'Gallery', component: GalleryPage },
  { path: '/download', label: 'Download', component: DownloadPage },
  { path: '/contact', label: 'Contact', component: ContactPage },
];
