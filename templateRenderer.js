// Simulating a row from Excel
const sampleData = {
    templateType: "Fact",
    title: "Did You Know? 🤯",
    mainText: "Bananas are berries, strawberries are not!",
    subText: "Crazy, right?!"
  };
  
  function applyTemplate(data) {
    const titleElement = document.getElementById('title');
    const mainTextElement = document.getElementById('mainText');
    const subTextElement = document.getElementById('subText');
    const container = document.getElementById('shortsContainer');
  
    // Set texts
    titleElement.textContent = data.title;
    mainTextElement.textContent = data.mainText;
    subTextElement.textContent = data.subText;
  
    // Apply animations
    titleElement.classList.add('animate__fadeInDown');
    mainTextElement.classList.add('animate__zoomIn');
    subTextElement.classList.add('animate__fadeInUp');
  
    // Apply styles based on template
    if (data.templateType === "Fact") {
      container.style.backgroundColor = "#FFEB3B"; // bright yellow
      titleElement.style.color = "#D84315"; // deep orange
      mainTextElement.style.color = "#1B5E20"; // dark green
      subTextElement.style.color = "#004D40"; // teal
    }
    console.log("Template applied:", data.templateType);
    // Later we can add "Quote", "Top 3 List", "Challenge", etc.
  }
  
  // On page load
  applyTemplate(sampleData);
  document.querySelector('.content').classList.add('show');

  