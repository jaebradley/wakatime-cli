export default function shouldGenerateSection({
  data,
  showAllSections,
  showSpecificSection,
}) {
  return data && Object.keys(data).length && (showAllSections || showSpecificSection);
}
