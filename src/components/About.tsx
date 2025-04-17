import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline';

const About = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stony Brook University",
      gpa: "GPA: 3.74",
      period: "Aug 2022 - May 2024",
      location: "Stony Brook, NY"
    },
    {
      degree: "Bachelor's in Computer Science and Engineering",
      school: "Nitte Meenakshi Institute of Technology",
      gpa: "GPA: 3.84",
      period: "Aug 2016 - Aug 2020",
      location: "Karnataka, India"
    }
  ];

  return (
    <section id="about" className="section flex items-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={`space-y-2 ${index === 0 ? 'mt-8 mb-14' : ''}`}>
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.school}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-accent">{edu.gpa}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                className="card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-xl font-semibold">Professional Summary</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  I'm a Software Engineer with a Master's in Computer Science and hands-on experience building scalable backend systems and data tools at startups and research labs. 
                  I specialize in Python, Ruby on Rails, SQL, and cloud technologies like AWS and GCP, with a strong focus on designing efficient data models and automation pipelines. 
                </p>
          
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <UserIcon className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <a 
                      href="https://www.credly.com/badges/a6499e72-161b-41a4-b003-e50bdcecf9c7/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      AWS Cloud Practitioner
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.coursera.org/account/accomplishments/specialization/certificate/QCRSSJTRJXXL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      Data Engineering, Big Data, and Machine Learning on GCP
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 