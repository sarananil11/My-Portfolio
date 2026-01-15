import { motion as Motion } from "framer-motion";
import Card from "../components/Card";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";
import useSectionObserver from "../hooks/useSectionObserver";

const About = () => {
  const sectionRef = useSectionObserver("about");

  return (
    <section
      id="about"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32"
    >
      <div className="space-y-12">
        <SectionHeading
          eyebrow="About"
          title="Building thoughtful experiences with code & design"
          description="I’m a BCA student at Calicut University with a strong enthusiasm for programming, UI, and turning ideas into polished products."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full space-y-4">
              <h3 className="font-display text-2xl text-white">Background</h3>
              <p className="text-slate-300">
                Aspiring Junior Web developer and MERN Stack Developer with
                a strong foundation in HTML, CSS, Bootstrap, and JavaScript.
                Skilled in building responsive, user-friendly web interfaces and
                integrating APIs to enhance functionality. Passionate about
                clean code, problem-solving, and continuous learning in modern
                web technologies like React, Node.js, Express, and MongoDB.
                Eager to contribute to impactful projects and grow within a
                collaborative development team.
              </p>
              <p className="text-slate-300">
                My goal is to keep improving as a full stack developer, contribute
                to impactful product teams, and create interfaces that feel
                effortless to use.
              </p>
            </Card>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="h-full space-y-4">
              <h3 className="font-display text-2xl text-white">
                Skills & Tools
              </h3>
              <p className="text-sm text-slate-400">
                Always growing, always learning.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
