import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

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
            <div className="card">
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-6 w-6 text-accent mr-2" />
                <h3 className="subheading">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.school}</p>
                    <p className="text-gray-400">{edu.gpa}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="h-6 w-6 text-accent mr-2" />
                <h3 className="subheading">Professional Summary</h3>
              </div>
              <p className="text-gray-300 mb-4">
                I am a dedicated software engineer with a strong foundation in computer science
                and extensive experience in developing scalable applications. My expertise spans
                across full-stack development, data engineering, and cloud technologies.
              </p>
              <p className="text-gray-300 mb-4">
                I combine academic knowledge with practical experience to deliver innovative solutions.
                I am passionate about creating efficient, user-friendly applications and
                continuously expanding my technical skills.
              </p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Certifications</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li><a href="https://www.credly.com/badges/a6499e72-161b-41a4-b003-e50bdcecf9c7/public_url">AWS Cloud Practitioner</a></li>
                  <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/QCRSSJTRJXXL">Data Engineering, Big Data, and Machine Learning on GCP</a></li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 