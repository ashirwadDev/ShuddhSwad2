import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-16 bg-green-400"
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="w-80 h-80 md:w-[400px] md:h-[400px] bg-gray-300 rounded-2xl shadow-lg overflow-hidden">
          {/* Yahan apna image lagana (example: /about.jpg) */}
          <img
            src="/about.png"
            alt="About Shuddh Swad"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
          About <span className="text-amber-600">Shuddh Swad</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-red-700">Shuddh Swad</span>, we
          bring you the authentic taste of{" "}
          <span className="text-green-700 font-medium">Bihar’s traditional dishes</span>. 
          From <span className="font-semibold">Litti Chokha</span> to{" "}
          <span className="font-semibold">Thekua</span>, every recipe is crafted 
          with <span className="text-amber-700">pure ingredients</span> and{" "}
          <span className="text-amber-700">authentic flavors</span>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our mission is simple – to deliver{" "}
          <span className="font-bold">ghar jaisa swad</span> straight to your plate,
          keeping alive the <span className="text-green-700">heritage and culture</span> 
          of Bihar’s food traditions.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold shadow-lg"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
}
