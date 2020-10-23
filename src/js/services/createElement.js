export default function createElement({ type = 'div', className }) {
    const el = document.createElement(type)
    el.classList.add(className)
  
    return el
  }