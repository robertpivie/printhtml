window.printhtml = (id, filename) => {
  alert(`printing ${id} as ${filename}`);

  //https://ekoopmans.github.io/html2pdf.js/?utm_campaign=cdnjs_library&utm_medium=cdnjs_link&utm_source=cdnjs
  html2pdf(document.getElementById(id), {
    margin: 1,
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  });
};
