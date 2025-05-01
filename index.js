const truths = [
  "Kindness looks good on you 💗",
  "You bloom softly, and that’s still blooming 🌸",
  "Magic exists in quiet moments 🎀"
];

const affirmationText = document.getElementById('affirmationText');
const mirror = document.getElementById('mirror');
const addButton = document.getElementById('addAffirmationBtn');

// 🌸 Show a random affirmation on mirror click
mirror.addEventListener('click', () => {
  const randomAffirmation = truths[Math.floor(Math.random() * truths.length)];
  affirmationText.textContent = randomAffirmation;
});

// 💌 Add custom affirmation on button click
addButton.addEventListener('click', () => {
  const affirm = document.createElement('textarea');
  affirm.placeholder = "Write your cute lil affirmation 💫";
  affirm.classList.add('affirm-popup');
  document.body.appendChild(affirm);
  affirm.focus();

  // ✅ Save on Enter key
  affirm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const userAffirmation = affirm.value.trim();
      if (userAffirmation !== '') {
        truths.push(userAffirmation); // ✅ add only if not blank
        console.log('Saved to truths:', userAffirmation)

      } else {
        console.log('Blank affirmation not added.');
      }
      affirm.remove();
    }
  });
localStorage.setItem('text',JSON.stringify(truths))
const value = JSON.parse(localStorage.getItem('text'))
  // 🕰 Optional: auto-remove after 30s
setTimeout(()=>{
affirm.remove()
}, 60000)
});
const toggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
body.classList.add('light-theme');

toggleBtn.addEventListener('click', () => {
  // Toggle classes
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');

  // Change button icon
  if (body.classList.contains('dark-theme')) {
    toggleBtn.textContent = 'bloomie🌸';
  } else {
    toggleBtn.textContent = 'Lavender💜';
  }
});
