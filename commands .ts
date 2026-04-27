a. File and Directory Related Commands
These commands help you manage files and directories in the Linux file system.
1.	ls - List directory contents
o	Example: ls → lists files and directories in the current directory.
o	Example: ls -l → lists files in long format (permissions, size, date, etc.).
o	Example: ls -a → shows hidden files (files starting with a dot).
2.	cd - Change directory
o	Example: cd /home/user/Documents → navigates to the Documents folder.
o	Example: cd .. → moves up one level in the directory hierarchy.
3.	pwd - Print working directory
o	Example: pwd → shows the full path of your current directory.
4.	mkdir - Make a directory
o	Example: mkdir new_folder → creates a new folder named new_folder.
5.	rmdir - Remove an empty directory
o	Example: rmdir empty_folder → removes empty_folder if it's empty.
6.	rm - Remove files or directories
o	Example: rm file.txt → deletes file.txt.
o	Example: rm -r folder → deletes a directory and its contents recursively.
o	Warning: Be careful with rm -r!
7.	cp - Copy files or directories
o	Example: cp file.txt /home/user/backup/ → copies file.txt to the backup directory.
8.	mv - Move or rename files or directories
o	Example: mv file.txt newfile.txt → renames file.txt to newfile.txt.
o	Example: mv file.txt /home/user/Documents/ → moves file.txt to the Documents directory.
9.	touch - Create an empty file or update the timestamp of an existing file
o	Example: touch newfile.txt → creates an empty file named newfile.txt.

b. Process and Status Information Commands
These commands provide information about running processes, system status, and resources.
1.	ps - Display current processes
o	Example: ps → shows processes running under your current user.
o	Example: ps aux → shows all running processes on the system (with detailed information).
2.	top - Task manager (real-time view of system processes)
o	Example: top → shows a real-time list of processes, CPU usage, memory usage, etc.
3.	htop - An interactive version of top (requires installation)
o	Example: htop → shows a colorful, interactive process viewer.
4.	kill - Kill a process by PID
o	Example: kill 1234 → terminates process with PID 1234.
o	Example: kill -9 1234 → forcefully kills the process (use cautiously).
5.	df - Disk space usage
o	Example: df -h → shows disk space usage in human-readable format (e.g., GB, MB).
6.	free - Memory usage
o	Example: free -h → shows memory usage in human-readable format.
7.	uptime - Shows how long the system has been running
o	Example: uptime → shows system uptime, load average, and number of users.
8.	who - Shows who is logged into the system
o	Example: who → lists users currently logged in.

c. Text Related Commands
These commands help you work with text files and output in Linux.
1.	cat - Concatenate and display files
o	Example: cat file.txt → displays the content of file.txt.
2.	more - View the content of files page-by-page
o	Example: more file.txt → views the content of file.txt one page at a time.
3.	less - View the content of files with scrolling options
o	Example: less file.txt → similar to more but with more advanced navigation.
4.	grep - Search for text within files
o	Example: grep "error" log.txt → searches for the string "error" in log.txt.
5.	wc - Word count
o	Example: wc file.txt → shows the number of lines, words, and characters in file.txt.
6.	head - View the first few lines of a file
o	Example: head -n 10 file.txt → shows the first 10 lines of file.txt.
7.	tail - View the last few lines of a file
o	Example: tail -n 10 file.txt → shows the last 10 lines of file.txt.
o	Example: tail -f file.txt → shows new lines as they are added to file.txt (useful for log files).
8.	sed - Stream editor for text manipulation
o	Example: sed 's/old/new/g' file.txt → replaces "old" with "new" in file.txt.
9.	awk - Pattern scanning and processing language
o	Example: awk '{print $1}' file.txt → prints the first column of each line in file.txt.
d. File Permission Commands
These commands are used to manage file and directory permissions in Linux.
1.	chmod - Change file permissions
o	Example: chmod 755 file.txt → sets the file permissions to rwxr-xr-x (read, write, and execute for the owner, read and execute for group and others).
o	Example: chmod +x script.sh → makes a script executable.
2.	chown - Change file ownership
o	Example: chown user:group file.txt → changes the owner of file.txt to user and group to group.
3.	chgrp - Change group ownership
5.	stat - Display file or filesystem status
o	Example: stat file.txt → shows detailed information about file.txt, including permissions, size, and last access time.
