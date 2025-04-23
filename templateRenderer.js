let content_style = "content_style2";
let textStyleDropdown = document.getElementById("textStyle");
let loadDataDropdown = document.getElementById("loadData");
const fontFamily = document.getElementById('fontFamily');

let dummyInputData = [
    {
      templateType: "Fact",
      title: "Mind Blown 🤯",
      text1: "Octopuses have three hearts",
      text2: "Two hearts pump blood to the gills",
      text3: "One heart pumps blood to the body",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "When they swim, one heart stops!",
      ctaText: "👉 Follow for more wild facts!",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "Quote",
      title: "",
      text1: "Success is not final, failure is not fatal:",
      text2: "It is the courage to continue that counts.",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "— Winston Churchill",
      ctaText: "",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "List",
      title: "Top 5 Energy Boosters ⚡",
      text1: "1. Morning sunlight",
      text2: "2. 2L water",
      text3: "3. 30 min walk",
      text4: "4. Cold shower",
      text5: "5. Deep breathing",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "Try them for a week and feel the difference!",
      ctaText: "💪 Stay energized!",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "Challenge",
      title: "Brain Teaser 🧠",
      text1: "I speak without a mouth",
      text2: "I echo but have no ears",
      text3: "What am I?",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "Answer: An echo.",
      ctaText: "🧩 Follow for daily riddles!",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "Life Advice",
      title: "Simple Truth 🌱",
      text1: "You can't pour from an empty cup.",
      text2: "Take care of yourself first.",
      text3: "Even 10 minutes a day is enough.",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "Self-care is not selfish.",
      ctaText: "✨ Share this with someone who needs it!",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "Fact",
      title: "Weird But True 😲",
      text1: "Sharks existed before trees!",
      text2: "Trees: 350 million years ago",
      text3: "Sharks: 400 million years ago",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "They’ve been around longer than dinosaurs too!",
      ctaText: "",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "Quote",
      title: "",
      text1: "“Be yourself; everyone else is already taken.”",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "— Oscar Wilde",
      ctaText: "",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "List",
      title: "3 Quick Wins Today 🎯",
      text1: "✅ Make your bed",
      text2: "✅ Drink water",
      text3: "✅ Plan your top 3 tasks",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "Small wins lead to big momentum!",
      ctaText: "",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "Challenge",
      title: "Can You Guess? 🤔",
      text1: "The more you take, the more you leave behind.",
      text2: "What are they?",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "Answer: Footsteps 👣",
      ctaText: "",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    },
    {
      templateType: "Life Advice",
      title: "Gentle Reminder 💛",
      text1: "Slow progress is still progress.",
      text2: "Resting is part of the journey.",
      text3: "You’re doing better than you think.",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
      text10: "",
      subText: "",
      ctaText: "✨ Be kind to yourself.",
      musicFile: "background_music/sample_music.mp3",
      musicVolume: 0.2,
      backgroundVideo: "background_videos/sample_bg.mp4"
    }
  ];
  



function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const mainTexts = [];
    for (let i = 1; i <= 10; i++) {
        const textParam = params.get(`text${i}`);
        if (textParam !== null) {
            mainTexts.push(textParam);
        } else {
            //mainTexts.push(""); // Or you could choose to not push anything, depending on desired behavior
        }
    }

    return {
        templateType: params.get('templateType') || "Fact",
        title: params.get('title') || "",
        mainTexts: mainTexts,
        subText: params.get('subText') || "",
        ctaText: params.get('ctaText') || "",
        musicFile: params.get('musicFile') || "background_music/sample_music.mp3",
        musicVolume: parseFloat(params.get('musicVolume')) || 0.2,
        backgroundVideo: params.get('backgroundVideo') || "background_videos/sample_bg.mp4"
    };
}


function splitTextIntoSpans(element, text, baseDelay = 1.5) {
    element.innerHTML = "";
    const words = text.split(" ");
    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        element.appendChild(span);
    });
}

function showContent(data) {
    const titleEl = document.getElementById('title');
    const mainTextEl = document.getElementById('mainText');
    const subTextEl = document.getElementById('subText');
    const ctaTextEl = document.getElementById('ctaText');
    const subscribeIcon = document.getElementById('subscribeIcon');
    const bgMusic = document.getElementById('bgMusic');
    const bgVideo = document.getElementById('bgVideo').querySelector('source');

    // Set video and music********DND**********
    // bgMusic.src = decodeURIComponent(data.musicFile);
    // bgMusic.volume = data.musicVolume;
    // bgMusic.play().catch(e => console.log('Music autoplay blocked'));

    bgVideo.src = decodeURIComponent(data.backgroundVideo);
    document.getElementById('bgVideo').load();

    // Animate Title
    titleEl.textContent = decodeURIComponent(data.title);

    // Animate MainText blocks sequentially
    let mainTexts = data.mainTexts;
    let currentIndex = 0;

    function displayNextText() {
        if (currentIndex < mainTexts.length) {
            const text = mainTexts[currentIndex];
            const textElement = document.createElement('p');
            textElement.textContent = text;

            // Calculate duration based on text length (you can adjust the multiplier)
            const durationMs = text.length * 100; // Example: 100ms per character

            // Clear previous text element if it exists
            mainTextEl.innerHTML = '';
            mainTextEl.appendChild(textElement);

            if (currentIndex < mainTexts.length - 1) {
                setTimeout(() => {
                    textElement.style.display = 'none';
                    currentIndex++;
                    displayNextText(); // Display the next text
                }, durationMs);
            }
            // currentIndex++;
        }
    }

    displayNextText(); // Start displaying the first text

    subTextEl.textContent = decodeURIComponent(data.subText);

    // CTA and Subscribe
    ctaTextEl.textContent = decodeURIComponent(data.ctaText);
}

function showContent_old(data) {
    const titleEl = document.getElementById('title');

    const mainTextEl = document.getElementById('mainText');
    const subTextEl = document.getElementById('subText');
    const ctaTextEl = document.getElementById('ctaText');
    const subscribeIcon = document.getElementById('subscribeIcon');
    const bgMusic = document.getElementById('bgMusic');
    const bgVideo = document.getElementById('bgVideo').querySelector('source');

    // Set video and music - DND***********
    // bgMusic.src = decodeURIComponent(data.musicFile);
    // bgMusic.volume = data.musicVolume;
    // bgMusic.play().catch(e => console.log('Music autoplay blocked'));

    bgVideo.src = decodeURIComponent(data.backgroundVideo);
    document.getElementById('bgVideo').load();

    // Animate Title
    titleEl.textContent = decodeURIComponent(data.title);

    // Animate MainText blocks
    //if (data.mainText) splitTextIntoSpans(mainTextEl, decodeURIComponent(data.mainText), 1.5);

    // if (data.mainText2) splitTextIntoSpans(mainText2El, decodeURIComponent(data.mainText2), 2.5);
    // if (data.mainText3) splitTextIntoSpans(mainText3El, decodeURIComponent(data.mainText3), 3.5);

    // SubText
    let mainTexts = data.mainTexts;
    mainTexts.forEach(text => {
        const textElement = document.createElement('p');
        textElement.textContent = text;

        // Calculate duration based on text length (you can adjust the multiplier)
        const durationMs = text.length * 100; // Example: 100ms per character

        mainTextEl.appendChild(textElement);

        // You'll likely want to add a delay or animation here to control the display duration.
        // For a simple delay:
        setTimeout(() => {
            textElement.style.display = 'none'; // Hide the element after the calculated duration
        }, durationMs);
    });

    subTextEl.textContent = decodeURIComponent(data.subText);

    // CTA and Subscribe
    ctaTextEl.textContent = decodeURIComponent(data.ctaText);
}


function readFromDummyInputData(selectedOption) {
    const selectedData = dummyInputData[selectedOption];
    if (!selectedData) {
        console.error("Invalid selection");
        return null;
    }

    const mainTexts = [];
    for (let i = 1; i <= 10; i++) {
        const textValue = selectedData[`text${i}`];
        if (textValue !== undefined && textValue !== null && textValue !== "") {
            mainTexts.push(textValue);
        }
    }

    return {
        templateType: selectedData.templateType || "Fact",
        title: selectedData.title || "",
        mainTexts: mainTexts,
        subText: selectedData.subText || "",
        ctaText: selectedData.ctaText || "",
        musicFile: selectedData.musicFile || "background_music/sample_music.mp3",
        musicVolume: parseFloat(selectedData.musicVolume) || 0.2,
        backgroundVideo: selectedData.backgroundVideo || "background_videos/sample_bg.mp4"
    };
}

let data = getQueryParams();
data = readFromDummyInputData("1");
showContent(data);
contentContainer = document.getElementById("contentContainer");
contentContainer.classList.add(content_style);



textStyleDropdown.addEventListener("change", () => {
    content_style = textStyleDropdown.value;
    // Remove old styles
    contentContainer.className = "content";
    // Apply new style
    contentContainer.classList.add(content_style);
    showContent(data);
});

loadDataDropdown.addEventListener("change", () => {
    const selectedOption = loadDataDropdown.value;
    data = readFromDummyInputData(selectedOption);
    showContent(data);
});

fontFamily.addEventListener('change', () => {
    const selectedFont = fontFamily.value;
    document.body.style.fontFamily = selectedFont;
});