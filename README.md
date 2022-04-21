# clink

Originally the plan for this project was to create a landing page which was our (first API) then once the user gets passed the landing page showing that they're over 21 it then takes us to the Actual website. The website was comprised of our 5 different types of drinks and some history behind it. I was responsible for getting the Second API which when you search up one of our alcohols listed it would pop up 5 different drinks and cocktails that can be made from that Alcohol type. Tony was responsible of creating the Git repository and  the HTML document. Brandon was responsible for the styling and Farhan was responsible for the landing page. We had alot of difficulties pulling the updated code after we would push our work in so at the end of the day we all had to work on all our stuff through our own feature branch seperately. 

Installation: I first cleaned up some of the CSS and set up the HTML elements for the Search Button, Drinks, and Cocktails.

Step 2: After setting up the HTML and CSS I first did the script.js is call the serach Button in the HTML and added an event listener of 'click' so when you click the click me Button the drinks and cocktails will pop up.

Step 3: I then added variables for Alcohol and the ingredients. I linked the website of my API to the ingredients variable. THen I used the fetch,return response, and then attribute as my search engine for the cocktails. 

Step 4: I then created a for loop with the index of 5 so when an alcohol type is searched up through the API a list of 5 drinks or cocktails will pop up. Then I used the Math.Random function to make it it random and the math.ceiling fucntion so if a decimal number pop up it always rounds up.   

Step 5: Then I created the get element by ID to get the "drinks" element from the HTML and the appenchild "drinkName1" to place it on the right of my screen.

![Landing Page](https://github.com/TonyT504/clink/blob/main/Images/LandingPage.PNG)

![Website](https://github.com/TonyT504/clink/blob/main/Images/Website.PNG)