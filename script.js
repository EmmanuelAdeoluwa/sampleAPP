//Git is just where you put your coding projects especiallly when you are working with a team 
//and you need to track changes of team members
//Github is a website to host your repositories online where you host your projects online

//Repository: simply just means projects/place where your projects is kept


//Git Commands
//all the commands used in Git are in lowercase
// 1) Clone: This brings a repository that is hosted somewhere like Github into a folder on your local machine
// 2) add: This tracks your files and changes in Git
// 3) commit: This is used to save your files in Git
// 4) push: Upload git commits(i.e projects wey you don save) to a remote repo, like Github
// 5) pulL; This downloads changes from remote repo to your local machine. opposite of push

//$git innit initialize local git repo
//git add<file>
// git status - check status of working tree
//git commit - commit changes in index
//git add 
//git rm
//git push - will push to remote repo(github) SSH keys can be done with
//git add. will add all your files
//git pull - will pull from remote repo
//git clone - clone repo into a new directory
//git-scm.com/download/win for installing

//if you want to commit you press git commit then you press i and uncomment initial save
//then you press :wq
//You can initialize your git in your vscode terminal. git innit
//then add your username and password
// git config --global user.name "EmmanuelAdeoluwa"
// git config --global user.email "emmanueladeoluwa16@gmail.com"
//git.commit -m "any name"
//if you want to ignore a file you use the .ignore folder

//branches to create a branch command which is where you can work and do your thjng without it affecting
//the main repo
//to create a branch - git branch <name>
//to switch to another place or branch - git checkout login

//The README.md file in a GitHub repository is used to provide an overview and instructions on how to use the project. It is the first file that visitors to your repository will see, so it's important to make sure it's informative and well-written.
echo "# sampleAPP" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/EmmanuelAdeoluwa/sampleAPP.git
git push -u origin main