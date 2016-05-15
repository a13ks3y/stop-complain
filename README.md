# stop-complain
Offline first web app that allows to send abuse to other person, that he/she have complained about something.

* Story 0: As developer I expect to be able to use live-reload dev server and jasmine for unit-testing, running by webpack.
* Story 1: As user I expect to be able login with Google credentials.
* Story 2: As user I want to be able see the list of my friends from Google+
* Story 3: As user I want to be able to abuse any user if it's not denied.
* Story 4: As user I want to be able to restrict adding and/or view abuses on me by one of the options:
    + All
    + Friends Only
    + White/Black List
    + No one
* Story 5: As user I want to be able view abuses on me and abuses that I have made, with filtering and sort


# Rough database structure:

* users
    + uid - string (firebase id)
    + info - object with fields like name, email etc.
    + friends - array of uid
    + complains - array of complains on this user
        * description - string
        * uid - id of user that made abuse
    + userComplains - array of complains ids that user have made
    + rules - object with rules, who can make abuse

# todo items
 * Change unit test, so they run with webpack, and watch should not be stopped by errors