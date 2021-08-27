# test_bibit

### 1. Simple Database Querying

To get parent data from USER table, must be joining table between the same USER table using Parent as foreign key to USER, it must be done using LEFT JOIN to include Null data.

### 2. Movies Server
1. Run npm install on the directory 2_movies_server and create file .env with env details sent via email
2. Run Application by entering command “npm start” on terminal, then application will run on http://localhost:7000
3. To run test cases, enter command “npm test” on terminal.


Routes:
1. SEARCH
example route: http://localhost:7000/search?s=batman&page=7

- Search:
  to get movie list, You can pass parameters below:
    - s pass search word (required) string
    - type movie type option(series, movie, episode) string
    - y year published integer
    - page number of page integer

it will returns payload data & meta data for pagination

2. DETAIL example route example route: http://localhost:7000/detail?t=suicide

- Detail:
  to get movie detail, You can pass parameters below:
    - t pass movie title string
    - i pass imdb id string(9)
    - type movie type option(series, movie, episode) string
    - y year published integer
    - plot movie plot returned (short, long)

it will returns payload data

### 3. Refactoring function
As the function name stated, it should find first word in a bracket, but if there are multiple opening or closing bracket, the function will not return expected value (first word in the bracket), so the first step to make sure is:

  1. parameter passed must be string, to return early if parameters passed not as expected
  2. initiate variable result to be modified & retuned and,
    - check if there is opening bracket '(' and closing bracket ')' if not,
      - return empty string '' as previous function else go to next step
  3. iterate through string and find opening and closing bracket
    - for the opening bracket, find last bracket found before there were found closing bracket, if closing bracket found after opening bracket
    - stop the iteration and return result, else if closing bracket found before opening bracket
    - continue iteration until the condition (find first word in a bracket) found
  4. return result


### 4. Logic Test

  1. Make sure parameters passed is array
  2. initiate result with empty object
  3. iterate through array and sort word character to create array of object, create sorted word as key and,
    - if there were sorted word found as a key, push the iterated word to the array, if not,
    - create new object key with sorted word, with value of array consisting iterated word.

  example: {
    "aikt": ['kita', 'tika', 'atik'],
    "aku": ['aku', 'kua']
  }
  4. return object value without the keys.
 
