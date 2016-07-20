import React from 'react';
import Home from './Home';
import Details from './Details';
import Profile from './Profile';
import Exercises from './Exercises';
// import Activity from './Activity';
import Documentation from './Documentation';

const Routes = {
  getHomeRoute() {
    return {
      renderScene(navigator) {
        return <Home navigator={navigator} />;
      },

      getTitle() {
        return 'Home';
      },
    };
  },
  getDetailsRoute() {
    return {
      renderScene(navigator) {
        return <Details navigator={navigator} />;
      },

      getTitle() {
        return 'Details';
      },
    };
  },
  getProfileRoute() {
    return {
      renderScene(navigator) {
        return <Profile navigator={navigator} />;
      },

      showNavigationBar: false,
    };
  },
  getExercisesRoute() {
    return {
      renderScene(navigator) {
        return <Exercises navigator={navigator} />;
      },

      getTitle() {
        return 'Exercises'
      },
    };
  },
  // getActivityRoute({exercise}) {
  //   return {
  //     renderScene(navigator) {
  //       return <Activity navigator={navigator} id={exercise.id} />;
  //     },
  //
  //     getTitle() {
  //       return '${exercise.name}'
  //     },
  //   };
  // },
  getDocumentationRoute() {
    return {
      renderScene(navigator) {
        return <Documentation navigator={navigator} />;
      },

      getTitle() {
        return 'Documentation'
      },
    }
  },
};

export default Routes;
