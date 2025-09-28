import { motion } from "framer-motion";

const dishes = [
  {
    name: "Litti Chokha",
    desc: "Traditional baked wheat balls with spiced mashed veggies.",
    price: "₹150",
    img: "/littichokha3.png", // placeholder, replace with your image
  },
  {
    name: "Thekua",
    desc: "Crispy sweet biscuit made from wheat flour & jaggery.",
    price: "₹50",
    img: "/thekua.png",
  },
  {
    name: "Sattu Paratha",
    desc: "Stuffed paratha with spiced roasted gram flour.",
    price: "₹100",
    img: "/sattu.png",
  },
  {
    name: "Dal Pitha",
    desc: "Steamed dumplings with spicy lentil filling.",
    price: "₹120",
    img: "/dal.png",
  },
  // Add more dishes as needed
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="min-h-screen px-6 md:px-16 py-16 bg-green-500"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-red-700 text-center mb-12">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Dish Image */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Dish Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-red-700 mb-2">{dish.name}</h3>
              <p className="text-gray-700 mb-4">{dish.desc}</p>
              <p className="text-lg font-semibold text-green-700">{dish.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
