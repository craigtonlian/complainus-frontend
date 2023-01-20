# ComplaiNUS (Create React App)
Name: Craigton Lian Ee John
Matriculation No.: A0258986B

This is the frontend repo of a Computing for Voluntary Welfare Organizations (CVWO) project undertaken by Craigton in AY22/23 Winter.

The CVWO project consists of two separate repositories for the [frontend](https://github.com/craigtonlian/complainus-frontend) and [backend](https://github.com/craigtonlian/complainus-backend).

This React App is deployed on [https://complainus.netlify.app](https://complainus.netlify.app).

## Getting Started
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) this repo.
2. [Clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) **your** forked repo.
3. Open your terminal and navigate to the directory containing your cloned project.
4. Install dependencies for the project by entering this command:

```bash
npm install
```

5. Run the app in development mode by entering this command:

```bash
npm run start
```

6. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.
7. You should see a page like this.
   ![Basic Page](public/basic-page.png)
   
## Running the backend Rails API locally
1. Fork and clone the backend Rails API onto your local machine.
2. Install any dependencies by running:

```bash
bundle install
```

3. Start the rails server on [http://localhost:3000](http://localhost:3000) in by entering this command:

```bash
rails s
```

4. We have to create and migrate the database by entering this command:

```bash
rake db:create db:migrate
```

5. Now we will seed the database by entering this command:

```bash
rake db:seed
```

6. Your Rails API is now set up locally. You can test the app by creating a new user account, or by logging in using pre-seeded users such as 

```bash
{
   {
      email: user1@user.com,
      password: password1
   },
   {
      email: user2@user.com,
      password: password2
   },
   
   ...
   
   {
      email: user30@user.com,
      password: password30
   },
 }
```

7. Before you test it with the frontend React app, go to src/api/apiURL.tsx to change API_URL to http://localhost:3000, as shown below:

```bash
// export const API_URL = "https://complainus-backend.herokuapp.com";
export const API_URL = "http://localhost:3000";

```
