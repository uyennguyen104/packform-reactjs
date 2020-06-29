export function getSiblings(el) {
  return Array.prototype.filter.call(el.parentNode.children, function(child) {
    return child !== el;
  });
}
