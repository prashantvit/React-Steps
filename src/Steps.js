const Step = ({ step, children }) =>
  children.filter((child, index) => index + 1 === step);
export default Step;
