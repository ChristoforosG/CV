import { Typography } from "@mui/material";
import { detail } from "./Styles";

export const personalInfo = {
  name: "XXXXX XXXXXXXX",
  email: "XXXXXXXXX@gmail.com",
  mobile: "+30 69XXXXXXXX",
  dateOfBirth: "XX/XX/XXXX",
  github: { link: "https://github.com/ChristoforosG", name: "XXXXXXX" },
  linkedIn: {
    link: "https://www.linkedin.com/in/christoforos-gavalas-b0b984186/",
    name: "XXXXXXX",
  },
  stackOverflow: {
    link: "https://stackoverflow.com/users/12619221/chrisgav",
    name: "XXXXXXX",
  },
};

export const experiences = [
  {
    company: "HAISC - Hellenic Army",
    role: "Full Stack Developer (Full Time)",
    location: "Athens, Greece",
    timePeriod: "Nov 2021 - Present",
    projects: [
      {
        title: "HR Management system for reserve soldiers",
        details: [
          <Typography sx={detail}>
            Developed features for an intranet Web application of Hellenic Army,
            used by approximately 500 permanent military staff.
          </Typography>,
          <Typography sx={detail}>
            Back End Developement using <strong>Spring Boot - Java</strong>.
          </Typography>,
          <Typography sx={detail}>
            Front End Developement using <strong>JSF</strong> and{" "}
            <strong>PrimeFaces</strong>.
          </Typography>,
          <Typography sx={detail}>
            Database Management for <strong>Oracle Database</strong> using{" "}
            <strong>PL-SQL</strong>, containing all of greek reserve privates
            and permanent military staff.
          </Typography>,
          <Typography sx={detail}>
            All tasks were performed with compliance to{" "}
            <strong>ISO 27001:2012</strong> protocols.
          </Typography>,
        ],
      },
      {
        title: "Cyber Security Threat Monitoring",
        details: [
          <Typography sx={detail}>NAGIOS Monitoring System.</Typography>,
          <Typography sx={detail}>SOPHOS Security Software.</Typography>,
        ],
      },
    ],
  },
  {
    company: "Vodafone Greece - Contructor From Neurocom S.A.",
    role: "Data Software Engineer (Full Time)",
    location: "Athens, Greece",
    timePeriod: "Nov 2019 - Aug 2021",
    projects: [
      {
        title:
          "Real Time Streaming Pipelines for CRM, Billing and Customer Orders Data",
        details: [
          <Typography sx={detail}>
            Design, Developement, Testing, Deployment and Operation/Maintainance
            of 8 <strong>Kafka Streams</strong> Applications and 1{" "}
            <strong>Kafka Producer</strong> using <strong>Java</strong>.
            Depending on the application, the amount of processed data varied
            from 500 KByte to 60 MByte per hour.
          </Typography>,
          <Typography sx={detail}>
            Design, Developement, Testing, Deployment and Operation/Maintainance
            of 4 <strong>Spark-Streaming</strong> Applications using{" "}
            <strong>Java</strong>. These applications processed data from Kafka
            Topics as well as from files. (About 1 MByte every two miunutes)
          </Typography>,
          <Typography sx={detail}>
            Deployment of applications in a{" "}
            <strong>Cloudera Big Data Platform</strong> containing a{" "}
            <strong>Kafka Cluster</strong>, a <strong>Hadoop Cluster</strong>{" "}
            and <strong>Kerberos Authentication Cluster</strong>.
          </Typography>,
          <Typography sx={detail}>
            Design, Developement, Testing, Deployment and Operation/Maintainance
            of <strong>native Java</strong> applications and{" "}
            <strong>Bash Scripts</strong> for file management on
            <strong>HDFS</strong>.
          </Typography>,
        ],
      },
      {
        title: "Vodafone Group Geolocation Analytics Product",
        details: [
          <Typography sx={detail}>
            Involved in a geolocation analytics framework developed from
            Vodafone Group using <strong>Python</strong> and{" "}
            <strong>pySpark</strong>, which generated about 100 GByte of parquet
            files every day.
          </Typography>,
          <Typography sx={detail}>
            Testing, Deployment and Execution of the framework on{" "}
            <strong>Google Cloud Platform</strong> using{" "}
            <strong>Apache Airflow</strong>, applied to Vodafone Greece Data.
          </Typography>,
          <Typography sx={detail}>
            Developement of <strong>Apache Airflow</strong> workflows on GCP for
            the execution of the Geolocation Framework tasks.
          </Typography>,
          <Typography sx={detail}>
            Developement and Testing of jobs using{" "}
            <strong>Dataproc Clusters</strong> for each <strong>pySpark</strong>{" "}
            task of the Geolocation Framework, which then where scheduled
            through <strong>Apache Airflow</strong>.
          </Typography>,
        ],
      },
      {
        title: "Data Warehouse Pipelines",
        details: [
          <Typography sx={detail}>
            Developement and Deployment of Data Warehouse pipelines, using{" "}
            <strong>Oracle Data Integrator (ODI)</strong>. I specifically,
            created and scheduled pipelines for the daily and monthly customer
            usage of approximately 2.5M Prepay Vodafone users.
          </Typography>,
          <Typography sx={detail}>
            Investigation and Testing of Vodafone Greece Customer Data using{" "}
            <strong>PL-SQL</strong>.
          </Typography>,
        ],
      },
    ],
  },
  {
    company: "Vodafone Greece",
    role: "Big Data Trainee (Internship)",
    location: "Athens, Greece",
    timePeriod: "Jun 2019 - Sep 2021",
    projects: [],
  },
];

export const education = [
  {
    university: "National Technical University of Athens",
    degree: "Master’s Degree in Data Science and Machine Learning ",
    location: "Athens, Greece",
    GPA: "9/10",
    timePeriod: "2012 - 2019",
    thesisTitle:
      "Mobile Application for Type 2 Diabetes Mellitus self management.",
    thesisGPA: "10/10",
    thesisDetails: [
      <Typography sx={detail}>
        I developed a mobile app using <strong>React Native</strong> and{" "}
        <strong>Django</strong> in collaboration with "Hippocratio" General
        Hospital Of Athens, that is going to be used from Diabetes Mellitus Type
        2 patients.
      </Typography>,
    ],
  },
  {
    university: "National Technical University of Athens",
    degree:
      "BSc & Integrated Master’s Degree in Electrical And Computer Engineering",
    location: "Athens, Greece",
    GPA: "8/10",
    timePeriod: "2019 - 2021",
    thesisTitle:
      "Autonomous navigation, using deep reinforcement learning algorithms.",
    thesisGPA: "10/10",
    thesisDetails: [],
  },
];

export const programmingSkills = [
  {
    header: "Languages",
    data: "Python, Java, Javascript, SQL",
  },
  {
    header: "Frameworks",
    data: "Kafka, Spark, Django, Spring, Flask, React Native, JSF, PrimeFaces, HBase",
  },
  {
    header: "Tools",
    data: "mySQL, PL-SQL, SQLite, Git",
  },
  {
    header: "Platforms",
    data: "Google Cloud Platform, Cloudera Cloud, Linux, Windows",
  },
  {
    header: "Libraries",
    data: "numpy, scipy, pandas, scikit-learn, keras, tensorflow, pyTorch, django rest framework, django rest framework-simplejwt, ntlk, soup, react-navigation, axios, react-query, redux",
  },
];

export const communicationSkills = [
  {
    header: "Greek",
    data: "Native Language",
  },
  {
    header: "English",
    data: "Certificate of Proficiency, University of Michigan",
  },
];

export const activities = [
  <Typography sx={detail}>
    <strong>Mar 2022 - Present:</strong> I am currently part of the machine
    learning team of Perfinity, which is located in Athens. Currently, the
    team's goal is to find customers for customer behaviour projects.
  </Typography>,
  <Typography sx={detail}>
    <strong>Jan 2021 - Jun 2021:</strong> Involved in an amateur software team
    with four other software developers. Our goal was to create a web
    application which will scrape google news and twitter, in order to provide a
    list with all the latest and more relevant information regarding a specific
    field, company, or product. In addition, a NLP classification procedure
    would be applied to determine the intention of the article.
  </Typography>,
  <Typography sx={detail}>
    <strong>Sep 2013 - Jun 2017:</strong> Played for AO Kallitechnoupolis
    Semi-Proffesional Basketball team.
  </Typography>,
];
