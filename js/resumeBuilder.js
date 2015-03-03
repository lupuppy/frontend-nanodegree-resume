var formattedName = HTMLheaderName.replace("%data%","Luna Yao");
var formattedRole = HTMLheaderRole.replace("%data%","Front-end Web Developer");

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);

var work = {
	"jobs": [
	{
		"employer": "HINTS (Human Interaction with Nature and Technology System) laboratory",
		"title": "Research Asistant",
		"dates": "September 2012-June 2014",
		"description": "I worked on the NSF funded Project 'Augmenting creativity through Human-Robot Interaction'.In our project, participants interacted with a robot to learn to design a Japanese Zen rock garden.Our Human-Robot Interaction (HRI) team carefully constructed interactions with the goal of facilitating creativity and engagement in learning. ",
		"location": "1414 NE 42nd St, Suite 201 Seattle, WA 98105"
	},
	{
		"employer": "First Year Program, University of Washington",
		"title":"FIG (Freshman Interesting Group) peer instructor",
		"dates": "Mar. 2012-Jan. 2014",
		"description": "I was a peer instructor at University of Washington, teaching two weekly seminars to help freshmen adjust to college. To better assist my students, I created formative assessment tools and utilized them in class, and I Initiated mentor programs and major panels for freshmen to connect to seniors.",
		"location": "120 Mary Gates Hall, Box 352825, Seattle, WA 98195-2825"
	},
	{
		"employer": "FIUTS (Foundation for International Understanding Through Students)",
		"title": "Event Chair & Lead Facilitator",
		"dates": "Jun. 2012-present",
		"description":"I served as a student board member (as the event chair), led facilitator and voting trustee with Foundation for FIUTS, a non-profit organization, for three years. It builds cross-cultural communication among international students and local communities. Specifically, I organized events that cultivate mutual understanding among people of diverse cultural backgrounds; served as an international student representative to impact policy changes on-campus and managed a diverse team of facilitators. ",
		"location":"University of Washington, HUB 206, Box 352233, Seattle, WA 98195-2233 USA"
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Udacity mock-up page",
		"dates": "2014-future",
		"description": "In the first project of my Nano-degree at Udacity, I built a page using HTML, CSS and bootstrap from the design I received from the instructor",
		"images": ["images/page-mock.png"]
	},
	{
		"title": "Augmenting creativity through Human-Robot Interaction",
		"dates": "September 2012-June 2014",
		"description": "My role in the HINTS lab gave me first-hand experience in understanding the necessity of combining design and research. I actively engaged in the NSF project from experimental design, human/robot interaction design, to data collecting and analysis. We used a human-sized robot named Robovie. An important part of our project was to improve the social interaction between the robot and the user, in a way that would enhance human creativity. As a result, our team created a series of speech and locomotion patterns, or interaction patterns, so the robot could interact with the users.",
		"images": ["images/robovie.jpg"]	
	}
	]
}

var bio = {
	"name": "Luna Yao",
	"role": "Explorer",
	"welcome message": "Hello.",
	"contacts": {
		"mobile": "206-xxx-xxxx",
		"email": "xxx@hotmail.com",
		"location": "3701 NE 45th St, Seattle, WA 98105"
	},
	"skills": ["create", "build", "research"]
}

var education = {
	"schools": [
	{
		"name": "University of Washington",
		"location": "University of Washington, Seattle, WA, United States",
		"degree": "Master of Science",
		"majors": "Human-computer Interaction and Design",
		"dates": "September 2015-September 2016",
		"url": "http://mhcid.washington.edu/"
	},
	{
		"name": "University of Washington",
		"location": "University of Washington, Seattle, WA, United States",
		"degree": "Bachelor of Science",
		"majors": "Psychology",
		"dates": "September 2010-June 2014",
		"url":"http://web.psych.washington.edu/"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-end Web development Nano-degree",
		"School": "Udacity",
		"dates": "Feburary 2014-present",
		"url": "https://www.udacity.com/"
	}
	]
}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	
	var formattedbioPic = HTMLbioPic.replace("%data%", "images/puppy.jpg");
	$("#skillsH3").append(formattedbioPic);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedworkTitle;

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);	
}

$("#main").append(internationalizeButton);
function inName(name){
	name = name.trim().split(" ");
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];

}

projects.display = function() {

	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedprojectTitle);

		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedprojectDates);

		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedprojectDescription);

		for(var i = 0; i < projects.projects[project].images.length; i++){
			var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
			$(".project-entry:last").append(formattedprojectImage);
		}

	}
}

projects.display();
$("#mapDiv").append(googleMap);


psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};



