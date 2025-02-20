import { stagger } from "motion";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    new SplitType(scope.current, {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  const entranceAnimation = () => {
    return animate(
      scope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duraction: 0.5,
        delay: stagger(0.2),
      }
    );
  };

  return {
    scope,
    entranceAnimation
  };
};

export default useTextRevealAnimation;
