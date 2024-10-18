import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      id="home"
    >
      <Navbar />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Fullstack Web & Mobile App Developer
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Hi, I&apos;m Miracle Chris-Ibeawuchi I create seamless, innovative web and
              mobile experiences. With expertise in both frontend and backend
              technologies, I bring ideas to life from concept to deployment.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href={"#projects"}>
                  <Button className="bg-primary hover:bg-primary/90">
                    View Projects
                  </Button>
              </Link>
              <Link target="_blank" href={"https://wa.me/2348146536786"}>
                <Button
                  variant="outline"
                  className="text-black border-white hover:bg-white/10 hover:text-white"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="relative lg:row-start-1 lg:col-start-2">
            <Image
              src="/images/work.png"
              alt="Developer workspace illustration"
              width={600}
              height={600}
              className="rounded-2xl"
            />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {["React", "Node.js", "TypeScript", "Flutter", "Dart", "MongoDB"].map(
            (skill) => (
              <div
                key={skill}
                className="col-span-1 flex justify-center items-center py-2 px-4 bg-white/5 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-300">
                  {skill}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
