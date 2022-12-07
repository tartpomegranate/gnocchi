export const disableButtons = (buttonRefs) => {
  buttonRefs.forEach((ref) => {
    ref.current.disabled = true;
  });
};
