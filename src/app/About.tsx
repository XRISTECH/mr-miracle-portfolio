import Image from 'next/image'
import { Check } from 'lucide-react'

export default function AboutSection() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Flutter'
  ]

  return (
    <section className="py-16 bg-white" id='about'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
            <Image
              src="/images/monitor.avif"
              alt="Developer portrait"
              width={400}
              height={400}
              className="rounded-lg w-full aspect-[4/3] shadow-[0_0_30px_#00000044]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-6">
              I&apos;m a passionate fullstack developer specializing in creating responsive websites and powerful mobile applications. With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean, efficient, and user-friendly solutions.
            </p>
            <h3 className="text-xl font-semibold mb-3">My Skills</h3>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <Check className="text-gray-800 mr-2" size={20} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  )
}