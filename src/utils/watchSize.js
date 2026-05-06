export function watchSize($el, listener) {
  const resizeObserver = new ResizeObserver(() => {
    listener();
  });
  resizeObserver.observe($el);

  return () => resizeObserver.unobserve($el);
}
