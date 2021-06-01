PROJECT REQUIREMENTS:

[X] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[X] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[X] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

[ ] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

FRIDAY TO DO:
[X] Add additional languages and cities to bulk out base
[X] Create form to create new interpreter
[x] Create handle submit event listener
[X] Create post fetch request
[ ] Create Edit button?


[x] Hide create new form when not in use
[X] Hide create new button when form is present
 # Okay this works the first time, now reset to hide form and show button again
[ ] Move Int Fetch request to Interpreter Adapter to clear up index.js
[X] Add drop down to new create form
[X] Fix Delete Button to disappear
[X] Fix Delete Button to work on initialization of new object
[X] Create Favorite Button and a way to store on local storage
    [ ] Maybe favorite cities and languages so they can check those easy too?
    [ ] Make favorites a class? Then push those faves into it?

[X] Create show option for favorites (similiar to cart?)
    [X] When favorites are shown, add option to click to display additional information about them

## CLEAN UP:
[ ] Remove debuggers at EOD
[ ] Remove console.logs on completed list items (delete notifications etc)

## FOR FUN:
[ ] Create Drop Down option to search through Cities/Languages to see all interpreters for that case
[ ] Create form to create new Cities
[ ] Create form to create new Languages

5/28:
[ ] Clean up green text and debuggers
[ ] Remove console.logs
[ ] Move things out of index.js
[ ] Fix clicking issue with display more
[X] Fix localStorage issue
[X] Make the whole thing just look better
[X] Add alert for issues

5/31:
[X] Readme
[ ] Create new branch for display options
[X] Video 
[X] Add seed default interpreters
[X] Backend readme
[X] Front end readme

6/2:
[ ] Fix display more options to reach correct id
    Need to grab id upon click
[ ] Check event listeners to make sure they're looking for the right places
[X] Remove id from localStorage favorites if the int is deleted 

