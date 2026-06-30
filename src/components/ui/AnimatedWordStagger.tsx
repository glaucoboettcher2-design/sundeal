import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedWordStaggerProps extends HTMLMotionProps<"div"> {
  text: string | React.ReactNode;
  as?: React.ElementType;
}

export const AnimatedWordStagger = ({
  text,
  as: Component = "div",
  className,
  ...props
}: AnimatedWordStaggerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Se o texto for string, quebramos em palavras
  if (typeof text === "string") {
    const words = text.split(" ");
    return (
      <motion.div
        as={Component as any}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className={className}
        {...props}
      >
        {words.map((word, index) => (
          <motion.span
            variants={wordVariants}
            key={index}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Se for um nó React complexo, animamos ele inteiro como uma coisa só, ou deixamos para o chamador mapear as palavras
  return (
    <motion.div
      as={Component as any}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
      {...props}
    >
      <motion.span variants={wordVariants} className="inline-block">
        {text}
      </motion.span>
    </motion.div>
  );
};

