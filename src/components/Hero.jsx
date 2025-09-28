import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/image.png')", // <-- yahan apna bg image daal dena
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg tracking-wide text-yellow-400">
          Taste of Bihar
        </h1>
        <p className="mt-6 text-lg md:text-2xl font-medium drop-shadow-md">
          Pure • Authentic • Delicious
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-red-700 hover:bg-red-800 transition rounded-full text-lg font-semibold shadow-lg"
        >
          Order Now
        </motion.button>
      </motion.div>
    </section>
  );
}
