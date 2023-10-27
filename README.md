# TeachTok

## TODO 

#### Need to have
- add animation for correct/incorrect
- add extra button above action button row (use avatar?)
- add text shadow
- fix text highlight border radius on question
- highlight answers correctly based on correct/incorrect
- implement swipe gesture to reload new data 
  - how tf to keep track of answers on previous questions if it's random ids?
    - create page component and keep state in the App.js that tracks questions with state:
      - { id: 123, data: {answered: bool, correctAnswer: "A", selectedAnswer: "B" }}

#### Nice to have
- convert to typescript

## Run the app
- clone repo
- in the repo directory run `npm install; cd ios; bundle exec pod install; cd ..; npx expo start;`