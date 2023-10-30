# ITFest-Adobe-Hackathon-2024
## ResourceMe by CloudByte
  ResourceMe is an app which creates a communication channel between homeless shelters(receivers) and donors(givers). It achieves this by having a streamlined and straightforward interface, gamification mechanics which engage the users through the use of AI, and geolocation algorithms for a clearer look at where the receiver’s main area of help is.
	The app is made in Angular 16, and uses a Firestore database( https://firebase.google.com/docs/firestore/ ), the map API is taken from leaflet ( https://leafletjs.com/ ), the OpenAI API was used for calculating the generosity score of the givers, and, in the end, through Twilio we see whether or not the giver actually did the donation( https://www.twilio.com/en-us/messaging ).

### Table of Contents
1. [How do I create an account?](#create-app)
2. [Main app](#main-app)
3. [Gamification mechanics](#gamification-mechanics)
4. [What if I don't receive the donation?](#donation)


## How do I create an account? <a name="create-app" />
  When you first open the app, you’re going to be met with a sign up(or login, based on whether you already have an account) form. After introducing all of your data, all of the info is going to be put into the Firestore database.
  ![Imgur Image](https://imgur.com/9FzcfmI.jpg)

## Main app <a name="main-app" />
  This is the main layout, and what you’ll see after you’ve logged in. 
  ![Imgur Image](https://imgur.com/QM0iUpd.jpg)
  From here, you can choose any of the available locations to see what they need.
  ![Imgur Image](https://imgur.com/hI6gHj8.jpg)
  And after that, you can tell the shelter what resources you’ll be bringing by the end of the day.
  ![Imgur Image](https://imgur.com/IsmI8NB.jpg)
## Gamification mechanics <a name="gamification-mechanics" />
  Each user, after making an account, will be given a role, a score, and a frame for their user profile photo. With each donation, the score will increase based on how bigger the donation was, how urgent the request was, and so on. This score is calculated with the use of AI. 

  User when he first makes an account<br>
  ![Imgur Image](https://imgur.com/QaC4hGQ.jpg)<br>
  User after a couple of donations<br>
  ![Imgur Image](https://imgur.com/sbMCORl.jpg)

  Moreover, the user has a dashboard, where he can see his score, and the amount he donated up until that point, together with some of the info he used for his original login.
  ![Imgur Image](https://imgur.com/qlzPV4x.jpg)

## What if I don’t receive the donation? <a name="donation" />
  If by any change the donation is not brought to you, you can fill up a form and tell us so, we’ll make sure to get in contact with the user and ban the account if the reasons weren’t justified.
	After the user makes the donation online, you will receive a SMS telling you so, with the form for the unfortunate outcome that it didn’t come through in real life as well.<br>
 ![Imgur Image](https://imgur.com/rsbYTeb.jpg)<br>
 ![Imgur Image](https://imgur.com/mw7liRo.jpg)
