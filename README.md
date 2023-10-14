To Set up a Custom Search Engine, go to https://programmablesearchengine.google.com/ and create your custom search engine. Then customize the search engine if desired and then obtain your Search Engine ID.

Then Go to the Google Cloud Console (https://console.cloud.google.com/) and create a new project or select an existing project. In the sidebar, click on "APIs & Services" and then search for "Custom Search API", click on it and then enable the API for your project.

Then, In the Google Cloud Console, go to "APIs & Services" and click on "Credentials" and then Click on the "Create credentials" button and select "API key". Then Copy the generated API key.

Then after getting the API Key from Google Cloud Console and the Engine ID from programmable search engine, go to the 'server.js' file in the 'backend' folder of this repository and follow the steps as to how to connect to the Custom Search Engine and respond to search queries.

In the 'SearchPage.jsx' file in the 'src' folder of this repository, you can see how to send query requests by taking the user input in the search box.

--------------------------------------------------------------------------

To Start :
Run npm install to install the dependencies and then Run npm start