// this array is used in bio object
var skills = ["Programming", "Quality Assurance", "Documentation", "Debugging", "Database", "HTML/CSS", "JavaScript"];

// setup bio object with display function
var bio = {
    "name": "M McDevitt",
    "role": "Aspiring Web Developer",
    "contacts": {
        "mobile": "999-888-7777",
        "email": "myemail@gmail.com",
        "github": "github.com",
        "location": "Collegeville, PA"
    },
    "welcomeMessage": "Welcome to my resume!",
    "skills": skills,
    "bioPic": "images/DSC_0186 cartoon.jpg"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(index) {
        var formattedSkill = HTMLskills.replace("%data%", index);
        $("#header").append(formattedSkill);
    });

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
}
// display bio object
bio.display();

// set up education object with display function
var education = {
    "schools": [{
        "name": "LaSalle University",
        "location": "Philadelphia, PA",
        "degree": "BA",
        "majors": ["Computer Science", "Math"],
        "dates": "1982-1986",
        "url": "www.lasalle.edu/"
    }, {
        "name": "Penn State University",
        "location": "Malvern, PA",
        "degree": "N/A",
        "majors": ["Business Administration", "Management"],
        "dates": "1990-1991",
        "url": "www.greatvalley.psu.edu/"
    }],
    "onlineCourses": [{
        "name": "Front-End Development",
        "title": "Front-End Development",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "www.udacity.com/"
    }, {
        "name": "Python Fundamentals",
        "title": "Python Fundamentals",
        "school": "Pluralsight",
        "dates": "2013-2014",
        "url": "www.pluralsight.com/"
    }, {
        "name": "HTML5 Fundamentals",
        "title": "HTML5 Fundamentals",
        "school": "Pluralsight",
        "dates": "2013-2014",
        "url": "www.pluralsight.com/"
    }]
};
education.display = function() {
    education.schools.forEach(function(index) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", index.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", index.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", index.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", index.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", index.majors);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);

    })

    $(".education-entry:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(index) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", index.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", index.school);
        var formattedDates = HTMLonlineDates.replace("%data%", index.dates);
        var formattedURL = HTMLonlineURL.replace("%data%", index.url);
        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedURL);
    })
}
//display education
education.display();

// set up work object with display function
var work = {
    "jobs": [{
            "employer": "DDD Information Systems",
            "title": "Software Engineer",
            "location": "Collegeville, PA",
            "dates": "2016-present",
            "description": "Program and support conversion applications utilizing all development tools."
        },
        {
            "employer": "CCC Financial Systems",
            "title": "Development Contractor",
            "location": "Wayne, PA",
            "dates": "1998-2016",
            "description": "Enhance/maintain/support various applications utilizing all development tools."
        },
        {
            "employer": "CCC Financial Systems",
            "title": "Development Specialist",
            "location": "Wayne, PA",
            "dates": "1996-1998",
            "description": "Enhance/maintain/support various application utilizing all development tools."
        },
        {
            "employer": "BBB National Systems",
            "title": "Team Leader",
            "location": "King of Prussia, PA",
            "dates": "1989-1996",
            "description": "Supervise Programmers and QA analysts in team environment."
        },
        {
            "employer": "AAA Systems",
            "title": "Programmer Analyst",
            "location": "Devon, PA",
            "dates": "1986-1988",
            "description": "Enhance/maintain/support bond application utilizing all development tools."
        }
    ],
    display: function() {
       work.jobs.forEach(function(index) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", index.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", index.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", index.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", index.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", index.description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        })
    }
};
// display work
work.display();


// set up projects object with display  function
var projects = {
    "Online": [{
        "title": "Front-End Development Project 0",
        "dates": "January 2016",
        "description": "HTML, CSS",
        "images": ["images/FE Project 0.png"]
    }, {
        "title": "Front-End Development Project 1",
        "dates": "February 2016",
        "description": "GITHub, Bootstrap",
        "images": ["images/FE Project 1.png", "http://placekitten.com/350/150"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        projects.Online.forEach(function(index) {
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", index.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", index.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", index.description));

            index.images.forEach(function(index2) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", index2));
            })
        })
    }
};
// display projects
projects.display();


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#mapDiv").append(googleMap);