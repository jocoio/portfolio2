import HomePage from '../home/HomePage.js';
import AboutPage from '../about/AboutPage.js';
import ProjectPage from '../project/ProjectPage.js';

export default [
  {
    key: 'home',
    Component: HomePage,
    path: {
      path: process.env.PUBLIC_URL + '/',
      exact: true,
    },
  },
  {
    key: 'about',
    Component: AboutPage,
    path: {
      path: process.env.PUBLIC_URL + `/about`,
    },
  },
  {
    key: 'scout',
    Component: ProjectPage,
    path: {
			path: process.env.PUBLIC_URL + `/scout`,
    },
	},
	{
    key: 'hellola',
    Component: ProjectPage,
    path: {
			path: process.env.PUBLIC_URL + `/hellola`,
    },
  },
  {
    key: 'portfolio',
    Component: ProjectPage,
    path: {
			path: process.env.PUBLIC_URL + `/portfolio`,
    },
  },
  {
    key: 'scoutsite',
    Component: ProjectPage,
    path: {
			path: process.env.PUBLIC_URL + `/scoutsite`,
    },
  },

  {
    key: 'unsize',
    Component: ProjectPage,
    path: {
			path: process.env.PUBLIC_URL + `/unsize`,
    },
  },
  {
    key: 'thisgirlcodes',
    Component: ProjectPage,
    path: {
			path: process.env.PUBLIC_URL + `/thisgirlcodes`,
    },
  },
  {
    key: 'myhousing',
    Component: ProjectPage,
    path: {
			path: process.env.PUBLIC_URL + `/myhousing`,
    },
  },
]