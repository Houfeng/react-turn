// 取浏览器的 CSS 前缀
export const CSS_PREFIX = (() => {
  const styles: any = window.getComputedStyle(document.documentElement, "");
  return (Array.prototype.slice
    .call(styles)
    .join("")
    .match(/-(moz|webkit|ms)-/) ||
    (styles.OLink === "" && ["", "o"]))[1];
})();

// css 动画解束时的事件
export const ANIMATION_END_EVENT = `${CSS_PREFIX}AnimationEnd`;

export function addClass(element: HTMLElement, className: string) {
  if (!element || !className) return;
  const classNames = className.split(" ");
  classNames.forEach(name => name && element.classList.add(name));
}

export function removeClass(element: HTMLElement, className: string) {
  if (!element || !className) return;
  const classNames = className.split(" ");
  classNames.forEach(name => name && element.classList.remove(name));
}

export function addEvent(
  element: HTMLElement,
  name: string,
  handler: EventListenerOrEventListenerObject
) {
  element.addEventListener(name, handler, false);
}

export function removeEvent(
  element: HTMLElement,
  name: string,
  handler: EventListenerOrEventListenerObject
) {
  element.removeEventListener(name, handler, false);
}

export function addEndEvent(
  element: HTMLElement,
  handler: EventListenerOrEventListenerObject
) {
  return addEvent(element, ANIMATION_END_EVENT, handler);
}

export function removeEndEvent(
  element: HTMLElement,
  handler: EventListenerOrEventListenerObject
) {
  return removeEvent(element, ANIMATION_END_EVENT, handler);
}
