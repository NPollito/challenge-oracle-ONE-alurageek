export function hideSections(sections) {
  sections.forEach(section => {
    section.style.display = 'none'
  });
}

export function showSections(sections, displayStyle = 'block') {
  sections.forEach(section => {
    section.style.display = displayStyle
  })
}