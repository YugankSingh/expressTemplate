# Express Template

## Let's Keep short simple and direct

### To Import it

- Fork It
- Download it from your own repo
- Then copy paste the src wherever you need
- Change the name from src to whatever is your need let's suppose myFolder here

**To Use It**

Change these Fields in package.json

- name
- description
- repository
  : add the name of your repository at the place of "YOUR_REPOSITORY_URL_HERE" without .git in the end in repository.url, bugs.url, homepage.

- keywords : example-
  ```JSON
  "keywords": ["keyword1","keyword2"]
  ```
- author
- license - if change is required

Then run these commands
(you must me be in root(myFolder))

- run these if you want to initialize git

```shell
git init
git remote add origin YOUR_REPOSITORY_URL_HERE.git
git branch -M main
git add .
git commit -m 'initialize project'
git push -u origin main
```
- and you have to run this one

```shell
npm i
```

And Done,
You Did a greate job
