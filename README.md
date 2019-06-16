![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/vspaceone/web-react.svg?style=flat-square)

# vspace.one website 2.0
This repo holds the code for the new vspace.one website written in React.
The old website code can be found at [vspaceone/web](https://github.com/vspaceone/web).

## Contribution
We use pull requests for every change that may be discussable or may damage the page view.

## Events API
Events can be loaded from /events.json in the following format.
```
{
   "apiversion": "0.2",
   "events":[
      {
         "title":"Plenum",
         "start":"2019-04-09T19:00:00+01:00",
         "end":"2019-04-09T21:00:00+01:00",
         "loc1":"vspace.one",
         "loc2":"Wilhelm-Binderstraße 19",
         "loc3":"78048 Villingen-Schwenningen",
         "price":0.0,
         "desc":"Wir treffen uns zum Plenum. Hier werden diverse Dinge aus dem Hackerspace-Alltag besprochen und kleinere Abstimmungen durchgeführt. Aber dennoch ist auch hier jeder herzlich willkommen vorbeizuschauen.",
         "link":"https://wiki.vspace.one/doku.php?id=treffen:plenum_2019_03_12",
         "download":""
      },
      {
         "title":"Lightning Talks",
         "start":"2019-04-13T16:00:00+01:00",
         "end":"2019-04-13T19:00:00+01:00",
         "loc1":"vspace.one",
         "loc2":"Wilhelm-Binderstraße 19",
         "loc3":"78048 Villingen-Schwenningen",
         "price":0.0,
         "desc":"Am 13.April wird es im vspace.one eine Lightning-Talk-Session geben. Jeder ist herzlich eingeladen ein Thema vorzustellen. Das kann alles möglich sein; Projekte, Elektronik, Geräte, Softwaretools, Serverumstellungen, Experimente und soweiter. Wirklich alles! Ihr könnte auch erklären wie man Bier braut!<br>Ich freu mich auf euch und eure Vorträge (natürlich gerne auch ohne Folien).<br>Max",
         "link":"https://wiki.vspace.one/doku.php?id=treffen:lightningtalks_2019_04_13",
         "download":"download/20190413_LightningTalks.pdf"
      }
   ]
}
```
It's a array of all upcoming events. Most attributes should be self-explaining. Price is a float in euro.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
