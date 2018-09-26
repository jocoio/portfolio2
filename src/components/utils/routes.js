import HomePage from '../home/HomePage.js';
import AboutPage from '../about/AboutPage.js';
import ProjectPage from '../project/ProjectPage.js';

export default [
  {
    key: 'home',
    Component: HomePage,
    path: {
      path: 'portfolio2.0/',
      exact: true,
    },
  },
  {
    key: 'about',
    Component: AboutPage,
    path: {
      path: `portfolio2.0/about`,
    },
  },
  {
    key: 'scout',
    Component: ProjectPage,
    path: {
			path: `portfolio2.0/scout`,
    },
	},
	{
    key: 'hellola',
    Component: ProjectPage,
    path: {
			path: `portfolio2.0/hellola`,
    },
  },
  {
    key: 'portfolio',
    Component: ProjectPage,
    path: {
			path: `portfolio2.0/portfolio`,
    },
  },
  {
    key: 'scoutsite',
    Component: ProjectPage,
    path: {
			path: `portfolio2.0/scoutsite`,
    },
  },

  {
    key: 'unsize',
    Component: ProjectPage,
    path: {
			path: `portfolio2.0/unsize`,
    },
  },
  {
    key: 'thisgirlcodes',
    Component: ProjectPage,
    path: {
			path: `portfolio2.0/thisgirlcodes`,
    },
  },
  {
    key: 'myhousing',
    Component: ProjectPage,
    path: {
			path: `portfolio2.0/myhousing`,
    },
  },
]