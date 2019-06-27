## Journal

## Purpose
**To compile information** as it is given to me throughout the course of this class, both for reinstruction or recap as needed for assignments, as well as to reference in my future long after this class.
### git
*git* is a DVCS, which stands for Distributed Version Control Systems. What that basically means is that DVCS is a program or set of tools designed for version control, in a distributed manner. *git* is one such version, or tool, which is used to *snapshot* previous versions of edits, before the file is made "live."

Now, you may be wondering why this is so important. "I can do that just the same without any fancy tools, by creating copies of files, with the *SaveAs* option.

- You are correct! However, the "SaveAs.." option within programs actually creates an entirely **new** version of the file, even though it copied all of its information from the origin work. So although it will serve to save different saves of the same peice of work, this becomes tedious, and will luse up a lot of storage, especially since a program may have thousands of lines of code, which would start to get messy. 
- *git* automatically saves with a custom user-entered message displaying what changes were made, and can then be witheld until the user (or organization, for that matter) is ready to apply those changes to the "Head" file, which is a fancy term for the file version which is visible to the user. 

    - Think of it like this: Microsoft is always working on the next security update for their operating systems. These updates can range anywhere from just a few minutes' worth of download, or hours of install overnight. All of these updates are written and tested long before they are released to the user. However, Windows tends to keep itself up-to-date whenever possible, so how would users react if their computer updated to the most recently released update and then crashed suddenly? 

    Microsoft would be quick to load back a *previous* edit of the system updates, and "pull" the broken update from their servers. This is done simply with git, due to its backups being located in the same location as the main file, which removes time that would be spent looking through different save-as files.

    Using git also allows coders to test the program before release, so such an event *shouldn't* occur.

### Using git

*git* is used within the terminal, and it used to *clone* current head files to anyone who has access to the file's local device. 

    -Note that anyone can pull any file- but it is up to the administerator or absolute authority holder of the head file wether or not to accept any changes made to the file.
        -An example: if you wanted to pull the head file of Facebook, Youtube, or Wikipedia, you could! But your changes would not be applied to Facebook.com, Youtube.com, or Wikipedia.com unless the appropriate personnel accepted your changes to their code and applied them.

So, understanding that you can do whatever you want to any file you can access, without any risk of getting in trouble for breaking or changing things, let's get into exactly what that process looks like.

### git Commands

- **git clone** followed by the file's extension or location, such as a URL or filepath, is the first order of business. This is the command which clone's an exact copy of the head file onto your personal computer or device.
    - *note:* Following the git clone command, you should verify the location you cloned the file to, and then use the *cd* command to access that directory.
    - After cloning the file to your computer, you can begin editing the file as you see fit, or begin to impiment whatever changes you believe are necessary.

- **git status** This is a command which should be done after *every* git command, to confirm that what you did was a success. This command shows you any changes that have not been "saved" as far as the intial clone vs the current file version on your device.

- **git add** followed by the particular file name, or **.** for all files in the specified directory.
    - *git add* is a required prepatory command, which signals to the git structure that you have made changes, and are ready to commit them to stone, listed in the next step.

- **git commit**, usually written as **_git commit -m_**, and then followed by a message, written in ""
    -Commit requires that the file first be staged for commit using the *git add* command. 
    -This command saves, or commits, all changes made by the user. This is how you save a file in git format, which again- is used to keep backups. So you can *git commit* repeatedly while working on the file type, to keep backups should you run into an issue, or **_accidentally_** **delete the whole thing**

- **git push** If you are writing your own code, the command you should write should be *git push origin master*, which signals that the code should go back to its place of origin (cloud directory, or file directory), and that you authorize this to replace the head file in that directory location.

- If you are submitting the file to the master admin, this is how you would submit your changes to them, for their consideration.


**Recap**
    - **Clone** the file to your computer, to make changes to it.
    - **Add** the changes you've made into a staging process.
    - **Commit** those changes into stone, creating a backup reference.
    - **Push** The edited version back to its location of origin, so that it can become the new head file (version).

**_Remember:_** After every step, verify that everything is going the way it should be with a **_git status_** command. Usually if something has gone wrong, it simply needs to be redone.