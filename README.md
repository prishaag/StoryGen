# StoryGen


StoryGen is an interactive learning app designed to help children improve their reading skills by allowing them to generate and engage with stories of their choice. Harnessing the power of ChatGPT, StoryGen enables children to create stories tailored to their reading level and interests, allowing them to learn at an accelerated rate. 

DEMO: https://www.youtube.com/watch?v=Ljc6oeeNnrE

Update for anyone taking a look at this project: The repo is currently kind of a mess, so here's some instructions to actually see the code used in the application (we have a bunch of junk files also here that still need to be deleted haha). Anyways, go to the App folder, and then take a look at App.js, CreateAccount.js Mainscreen.js, Dictation.js, and Success.js. We need to still fix the naming of these files to make sense! Will probably clean these soon:) Thank you for your patience!


## Features

1. **Interactive Story Generation:**
   - Children input their reading level and keywords or topics of interest.
   - The app generates stories sentence by sentence at a slow pace, providing ample time for children to read and comprehend.

2. **Multifaceted Learning:**
   - **Listen Aloud Feature:** Users can listen to the generated stories out loud, enhancing their auditory learning.
   - **Sentence Structure Visualization:** Nouns and verbs are highlighted to aid in understanding sentence structure.

3. **Engaging Activities:**
   - **Generate New Story:** Children can create a new story with the same keywords, fostering creativity and exploration.
   - **Word Spelling Practice:** For new words encountered, children can practice spelling, reinforcing vocabulary.
  
## Development details

StoryGen was created using Node.js and React Native. StoryGen relies on connection to the ChatGPT 3.5 Turbo API, text to speech packages, and natural language processing packages. 

## Getting Started

### Prerequisites

- Ensure you have a reliable internet connection.
- Access to the ChatGPT API (API key required).

### Installation

1. Clone the StoryGen repository:

   ```bash
   git clone https://github.com/prishaag/StoryGen.git
   cd StoryGen
   cd App
   npm install
2. Open MainScreen.js and add your chatgpt API key where "ignore" is written
3. Run the app using npx expo start. Ensure that ExpoGo is installed on your mobile device in order to view the app.

## Acknowledgements
StoryGen was created by Prisha Agnihotri, Vivian Kunlin, Alisha Patel, and Aarushi Singh during the MHacks hackathon. Kunlin and Prisha worked heavily on backend, while Alisha and Aarushi worked heavily on frontend. This project would not have been possible without each and every team member, who contributed equally - though the commit history does not reflect this, because Vscode liveshare was used to work on the project simultaneously. We would also like to acknowledge the support of the MHacks organizers and mentors for making this project possible.



