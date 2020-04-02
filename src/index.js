import _ from './components/navBar';
import { loadDynamicBannerText } from './components/typed';

document.addEventListener('turbolinks:load', () => {
	// Call your JS functions here
	// [...]
	loadDynamicBannerText();
});
