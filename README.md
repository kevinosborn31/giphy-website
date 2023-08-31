## How to run
- Install dependencies `npm i`
- Sign up for a developer Giphy API key, to populate the environment variable
- Create a `.env` file and populate it with `GIPHY_API_KEY=YOUR_KEY_GOES_HERE`
- Start application `npm start`
- To run test cases: `npm test`

## Technologies and Libraries used
This application is built on React with Typescript. It uses the following packages:
- MUI for the UI components
- Axios and react-query for API calls

## Design and Architectural decisions
I have built this application with a file structure that is intuitive, easy to navigate, and descriptive. Components, enums, pages, utils, types/interfaces, are all split out so when more are added in the future, they can all be found in the same place.

Endpoint values were enumerated here, probably unnecessary with only 2 endpoints, but this has been built with scalability in mind.

React query provides an easy way to asynchronously query the giphy API, and re-render the components when the data is fetched.

Material UI is a great UI framework and I have chosen to use it because it not only makes bootstrapping small applications like this quick, but it also scales well into more complex applications, allowing for custom components and themes. In addition to this it is intuitive and easy to work on for any developer familiar with HTML.

## Testing
This is not a complicated logical application, test coverage can be beneficial but not when writing tests for the sake of adding coverage. I’ve added some test cases to the crucial functionality, as well as some front end component rendering tests.

## Error handling
I had no issues with the Giphy API’s reliability or speed. Despite this I have added error handling which will return a descriptive error if something goes wrong, whether it is the API key expiring, environment variable not present, or downtime on the giphy server.

## Challenges / Considerations
One of the main challenges I faced building this application was while building the search functionality. I needed it to re-render the whole page, in order to populate the home page with the results from the search endpoint, and overriding either trending or previously searched terms. The solution was to simply move the logic and state to the parent component and pass it down, but I should have considered this from the beginning.


Initially, I was rendering the gif URL’s in an image element. Debugging I found that the gif URL was indeed being fetched and passed down correctly. After some tweaking and research I found that GIF’s URL’s like this need to be displayed in an iframe with an “embed” url, which I was able to retrieve from the Giphy response. This slight tweak got the gif display to work.


A consideration I made was whether or not to merge the axios calls for both search and trending into one service, with an input variable or enum to determine which endpoint to call. Despite the code being similar enough to combine into one service, I did also consider the readability of the code, as well as the principle of each file or service performing one main function. The result was the code is now more readable, and maintainable by any dev working on this project.
