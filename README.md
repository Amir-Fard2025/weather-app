# <Title: of the Project: Weather Dashboard>

# <BootCampBerlin 31-10-2021>

# <Description>

This is the code which takes a name of the city as an input variable for weathermap API and take the information of the weather, humidity, wind, icon and UV as an object from the API plus the forecast for the next five days. The user is able to see the name of the city current date and the weather information of the city. Entering another city name the older one will be saved in as an achievable button under the main input area. Later on the user is able to select the city nd see again the weather's information.

# <Technical Issues>

In this project we practiced the following steps.

- define the body of the html using the jquary classes. Which make the basics of the page with all headrs cards and input boxes ready.
- finding the usable data from a server API, using the objects and arreys of objects to pass throug functions.
- defining functions to read the data from objects and arrey of the objects and put them in cards. This will happen mainly through templates ${``}. Inside the template we normally define jquary selectors to assign the information from objects to the cards.
- define functions to go through two APIs and take the information of long and latt. the second one would be responsible for the weather information.
- define other function for current date and use it for current card and forecast cards
- define two other functions for information in the current date and another one for forecast cards
- define function to get the city name and use at as the variable for curent and forecast cards
- define a function to clear the childs of the main container avoiding rendering the previous cards
- define async functions inside async js file to make the operation of fetching the data asynchronous
- get the parsed name of the searched city from the local storage and put it in an array and then set the local storage with the id of the current city and its stringified name
- define event listener for each searched city to make them loadable again by clicking

# <List of Screenshots>

[./assets/screenshots/APIKey.png]
[./assets/screenshots/Localstorage.png]
[./assets/screenshots/Structure.png]

# <List of the Links>

[https://github.com/Amir-Fard2025/06-homework]
[https://amir-fard2025.github.io/06-homework/]
