# rsschool-cv
1. ### React components(нельзя использовать хуки)
  
   a. Typescript, Vite(react-ts).
  
   b. eslint, prettier.
  
    c. React-Router v6, header which shows the current page, add pages “About Us”, “404”. If user will input unknown route into url – application should redirect to “404”.
  
   d. Search Bar. (Input value should be saved to LocalStorage during component’s unmount. During the initialization pick the value from LocalStorage and show it).
  
    e. Cards. (Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage).

2. ### React. Forms(нельзя использовать хуки)
    
    a. Add functionality to your app:
          Collect information through a form
          You can collect any type of information, but form has to include at least those controls:
          text input
          date input
          dropdown/select
          checkbox
          switcher (radio)
          file upload (image)
    b. After the Submit button is clicked, all data from the form has to be displayed as Card in the cards list below the form. The confirmation message (with information that the data has been saved) should be displayed, after that form has to be cleared.

          The quantity of cards should equal the number of form submissions (if the user filled in and submitted the form five times, then five cards have to be displayed under the form).

          Form validation

          Validation should happen after the Submit button was clicked. In case when some field was filled in incorrectly, error message should be displayed below the field. The card mustn’t be created until the user fixes all errors. Examples of validation:

          mandatory field - check if input contains any information (no text in text input, radio or checkbox isn't selcted, etc);
          if text input is used for the name or surname, check if name or surname starts with uppercased letter
          Remove erorrs in case they have been fixed on next Submit button click.
