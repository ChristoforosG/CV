export const personalInfo = {
  name: "Gavalas Christoforos",
  email: "christoforos.gavalas@gmail.com",
  mobile: "+30 6976718913",
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
          "Developed features for an intranet Web application of Hellenic Army, used by approximately 500 permanent military staff.",
          "Back End Developement using Spring Boot - Java.",
          "Front End Developement using JSF and PrimeFaces.",
          "Database Management for Oracle Database using PL-SQL, containing all of greek reserve privates and permanent military staff.",
          "All tasks were performed with compliance to ISO 27001:2013 protocols.",
        ],
      },
      {
        title: "Cyber Security Threat Monitoring",
        details: ["NAGIOS Monitoring System.", "SOPHOS Security Software."],
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
          "Design, Developement, Testing, Deployment and Operation/Maintainance of 8 Kafka Streams Applications and 1 Kafka Producer using Java. Depending on the application, the amount of processed data varied from 500 KByte to 60 MByte per hour.",
          "Design, Developement, Testing, Deployment and Operation/Maintainance of 4 Spark-Streaming Applications using Java. These applications processed data from Kafka Topics as well as files (about 1 MByte each), transferred every two minutes.",
          "Deployment of applications in a Cloudera Big Data Platform containing a Kafka Cluster, a Hadoop Cluster and Kerberos Authentication Cluster.",
          "Design, Developement, Testing, Deployment and Operation/Maintainance of native Java applications and Bash Scripts for file management on HDFS.",
        ],
      },
      {
        title: "Vodafone Group Geolocation Analytics Product",
        details: [
          "Involved in a geolocation analytics framework developed from Vodafone Group using Python and pySpark, which generated about 100 GByte of parquet files every day.",
          "Testing, Deployment and Execution of the framework on Google Cloud Platform using Apache Airflow, applied to Vodafone Greece Data.",
          "Developement of Apache Airflow workflows on GCP for the execution of the Geolocation Framework tasks.",
          "Developement and Testing of jobs using Dataproc Clusters for each pySpark task of the Geolocation Framework, which then where scheduled through Apache Airflow.",
        ],
      },
      {
        title: "Data Warehouse Pipelines",
        details: [
          "Developement and Deployment of Data Warehouse pipelines, using Oracle Data Integrator (ODI). I specifically, created and scheduled pipelines for the daily and monthly customer usage of approximately 2.5M Prepay Vodafone users.",
          "Investigation and Testing of Vodafone Greece Customer Data using PL-SQL.",
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
