import { motion } from "framer-motion";

export default function WinkFace() {
  return (
    <div className="inline-block">
      <motion.span
        className="mr-0.5 text-yellow-400 text-[#063064]"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
      >
        :)
      </motion.span>
      <span></span>
    </div>
  );
}
