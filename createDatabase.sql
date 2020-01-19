create table majors (majorID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(majorID), majorName varchar(255));
create table years (yearID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(yearID), yearName varchar(255));
create table mentors (mentorID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (mentorID), emailAddress varchar(255), username varchar(255), fk_yearID int, FOREIGN KEY (fk_yearID) REFERENCES year(yearID), fk_majorID int, FOREIGN KEY (fk_majorID) REFERENCES majors(majorID), hometown varchar(255));
create table students (studentID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (studentID), emailAddress varchar(255), username varchar(255), fk_yearID int, FOREIGN KEY (fk_yearID) REFERENCES year(yearID), fk_majorID int, FOREIGN KEY (fk_majorID) REFERENCES majors(majorID), hometown varchar(255));
create table classes (classID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(classID), className varchar(255));
create table studentsClassesTaken(studentClassID INT NOT NULL AUTO_INCREMENT, fk_studentID int, FOREIGN KEY (fk_studentID) REFERENCES students(studentID), fk_classID int, FOREIGN KEY (fk_classID) REFERENCES classes(classID));
create table studentsClassesTaking(studentClassID INT NOT NULL AUTO_INCREMENT, fk_studentID int, FOREIGN KEY (fk_studentID) REFERENCES students(studentID), fk_classID int, FOREIGN KEY (fk_classID) REFERENCES classes(classID));
