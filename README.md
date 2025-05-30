This is just meant for testing Purpose for checking whether the Private Test Cases on the Pull Request.
Just Checking wether everything fine or not

I am checking for the Public Test Cases only.
I am checking for the Public Test Cases only.
Checking the Private Test Cases.
Check for the Private and Public Test Case for the above given file.
Checking whether the Results are updated on status submitted or not
Checking whether the Results are updated on status Pending or not
Checking whether the Results are getting overriding on the status In-Progress
Checking whether the Results are getting overriding on the status In-Progress
Checking whether the results are changing on status submitted.
Checking whether the results get updated on the the status invited or not
I changed my status to started and checking whether now is it accepting data or not.
1.PR corrections
2.PR Corrections -- Files not getting added
3.PR Corrections -- Checking Test Results
4.PR Corrections -- Checking Test Results
5.PR Corrections -- Checking Final Tests
6.PR Corrections -- Final Testing

# Getting Started

- System requirements

  - Node.JS v18

- Set environment variables: create a `.env` file in the root directory, and copy the contents from [.env.sample](.env.sample)
- Install dependencies
  ```
  yarn
  ```
- Seed database
  ```
  yarn seed
  ```
- Start the dev server
  ```
  yarn dev
  ```

Ust Raising a PR

# Getting Started (Docker)

Instead of following the steps above, you can also use Docker to set up your environment.

- System requirements
  - [Docker Compose](https://docs.docker.com/compose/install/)
- Run `docker-compose up` to spin up the dev server.
- Enter `Ctrl-C` in the same same terminal or `docker-compose down` in a separate terminal to shut down the server.

# Verify That Everything Is Set Up Correctly

You can use cURL or a tool like [Postman](https://www.postman.com/) to test the API.

#### Example Curl Commands

You can log in as one of the seeded users with the following curl command:

```bash
curl --location --request POST 'localhost:8080/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "thomas",
    "password": "123456"
}'
```

Then you can use the token that comes back from the /login request to make an authenticated request to create a new blog post

```bash
curl --location --request POST 'localhost:8080/api/posts' \
--header 'x-access-token: your-token-here' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text": "This is some text for the blog post...",
    "tags": ["travel", "hotel"]
}'
```

Adding Something Random

# Helpful Commands

- `yarn lint` : Runs linter.
- `yarn prettier --write .` : Runs autoformatter
- `yarn test` : This repository contains a non-comprehensive set of unit tests used to determine if your code meets the basic requirements of the assignment. **Please do not modify these tests.**
- `yarn seed` : Resets database and populates it with sample data.

# Common Setup Errors

- If you encounter an error related to `secretOrPrivateKey` when attempting to make a request, please ensure you have created a .env file in the root directory as per the _Getting Started_ instructions.
- If you are on M1 mac, you might encounter `ERR_DLOPEN_FAILED` when you try to install dependencies locally then run the server in docker (or vice versa). In case of error, try removing the `node_modules` directory and restart `docker compose up`.
  #   w f - t e s t i n g _ f b 6 3 6 f 6 7 - 0 8 e 2 - 4 d f 5 - a 5 8 d - 7 c d 3 3 b 9 e b a 3 2 
   
   
