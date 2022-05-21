import { Typography } from "@mui/material";

export const personalInfo = {
  name: "Gavalas Christoforos",
  email: "christoforos.gavalas@gmail.com",
  mobile: "+30 6976718912",
  github: "https://github.com/ChristoforosG",
  linkedIn: "https://www.linkedin.com/in/christoforos-gavalas-b0b984186/",
  stackOverflow: "https://stackoverflow.com/users/12619221/chrisgav",
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
          <Typography sx={{ fontSize: 12 }}>
            Developed features for an intranet Web application of Hellenic Army,
            used by approximately 500 permanent military staff.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            Back End Developement using <strong>Spring Boot - Java</strong>.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            Front End Developement using <strong>JSF</strong> and{" "}
            <strong>PrimeFaces</strong>.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            Database Management for <strong>Oracle Database</strong> using{" "}
            <strong>PL-SQL</strong>, containing all of greek reserve privates
            and permanent military staff.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            All tasks were performed with compliance to{" "}
            <strong>ISO 27001:2012</strong> protocols.
          </Typography>,
        ],
      },
      {
        title: "Cyber Security Threat Monitoring",
        details: [
          <Typography sx={{ fontSize: 12 }}>
            NAGIOS Monitoring System.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            SOPHOS Security Software.
          </Typography>,
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
          <Typography sx={{ fontSize: 12 }}>
            Design, Developement, Testing, Deployment and Operation/Maintainance
            of 8 <strong>Kafka Streams</strong> Applications and 1{" "}
            <strong>Kafka Producer</strong> using <strong>Java</strong>.
            Depending on the application, the amount of processed data varied
            from 500 KByte to 60 MByte per hour.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            Design, Developement, Testing, Deployment and Operation/Maintainance
            of 4 <strong>Spark-Streaming</strong> Applications using{" "}
            <strong>Java</strong>. These applications processed data from Kafka
            Topics as well as files (about 1 MByte each), transferred every two
            minutes.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            Deployment of applications in a{" "}
            <strong>Cloudera Big Data Platform</strong>
            containing a <strong>Kafka Cluster</strong>, a{" "}
            <strong>Hadoop Cluster</strong> and{" "}
            <strong>Kerberos Authentication Cluster</strong>.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
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
          <Typography sx={{ fontSize: 12 }}>
            Involved in a geolocation analytics framework developed from
            Vodafone Group using <strong>Python</strong> and{" "}
            <strong>pySpark</strong>, which generated about 100 GByte of parquet
            files every day.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            Testing, Deployment and Execution of the framework on{" "}
            <strong>Google Cloud Platform</strong> using{" "}
            <strong>Apache Airflow</strong>, applied to Vodafone Greece Data.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
            Developement of <strong>Apache Airflow</strong> workflows on GCP for
            the execution of the Geolocation Framework tasks.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
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
          <Typography sx={{ fontSize: 12 }}>
            Developement and Deployment of Data Warehouse pipelines, using{" "}
            <strong>Oracle Data Integrator (ODI)</strong>. I specifically,
            created and scheduled pipelines for the daily and monthly customer
            usage of approximately 2.5M Prepay Vodafone users.
          </Typography>,
          <Typography sx={{ fontSize: 12 }}>
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
    degree:
      "BSc & Integrated Master’s Degree in Electrical And Computer Engineering",
    location: "Athens, Greece",
    GPA: "9/10",
    timePeriod: "2012 - 2019",
    thesisTitle:
      "Mobile Application for Type 2 Diabetes Mellitus self management.",
    thesisGPA: "10/10",
    thesisDetails: [
      <Typography sx={{ fontSize: 12 }}>
        I developed a mobile app using <strong>React Native</strong> and{" "}
        <strong>Django</strong> in collaboration with "Hippocratio" General
        Hospital Of Athens, that is going to be used from Diabetes Mellitus Type
        2 patients.
      </Typography>,
    ],
  },
  {
    university: "National Technical University of Athens",
    degree: "Master’s Degree in Data Science and Machine Learning ",
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
    data: "numpy, scipy, pandas, scikit-learn, keras, tensorflow, pyTorch, django rest framework, django rest framework-simplejwt, react-navigation, axios, react-query, redux",
  },
];
