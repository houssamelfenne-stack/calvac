const SOURCE_URL = "https://www.sante.gov.ma/Documents/2026/09/Calendrier%20National%20de%20Vaccination%202025.pdf";

const milestones = [
  { fr: "À la naissance", ar: "عند الولادة", doses: [["Hépatite B (HBn)", "التهاب الكبد ب (جرعة الولادة)"]], offset: ["birth", 0] },
  { fr: "Pendant les 4 premières semaines", ar: "خلال الأسابيع الأربعة الأولى", doses: [["HB1 si HBn non administré à la naissance", "جرعة التهاب الكبد ب 1 إذا لم تُعطَ جرعة الولادة"], ["BCG", "بي سي جي"], ["Polio orale (VPO0)", "شلل الأطفال الفموي (VPO0)"]], offset: ["window", 0] },
  { fr: "8 semaines", ar: "8 أسابيع", doses: [["Pentavalent 1 (DTC-Hib-HB)", "الخماسي 1"], ["Rotavirus 1", "فيروس الروتا 1"], ["Polio orale (VPO1)", "شلل الأطفال الفموي (VPO1)"]], offset: ["weeks", 8] },
  { fr: "10 semaines", ar: "10 أسابيع", doses: [["Pneumocoque 1 (PCV1)", "المكورات الرئوية 1"]], offset: ["weeks", 10] },
  { fr: "12 semaines", ar: "12 أسبوعًا", doses: [["Pentavalent 2", "الخماسي 2"], ["Rotavirus 2", "فيروس الروتا 2"], ["Polio orale (VPO2)", "شلل الأطفال الفموي (VPO2)"]], offset: ["weeks", 12] },
  { fr: "16 semaines", ar: "16 أسبوعًا", doses: [["Pentavalent 3", "الخماسي 3"], ["Rotavirus 3", "فيروس الروتا 3"], ["Polio orale (VPO3)", "شلل الأطفال الفموي (VPO3)"], ["Polio inactivé (VPI1)", "شلل الأطفال المعطل (VPI1)"]], offset: ["weeks", 16] },
  { fr: "18 semaines", ar: "18 أسبوعًا", doses: [["Pneumocoque 2 (PCV2)", "المكورات الرئوية 2"]], offset: ["weeks", 18] },
  { fr: "6 mois", ar: "6 أشهر", doses: [["Pneumocoque 3 (PCV3)", "المكورات الرئوية 3"]], offset: ["months", 6] },
  { fr: "9 mois", ar: "9 أشهر", doses: [["Polio inactivé (VPI2)", "شلل الأطفال المعطل (VPI2)"], ["Rougeole-Rubéole (RR1)", "الحصبة والحصبة الألمانية (RR1)"]], offset: ["months", 9] },
  { fr: "12 mois", ar: "12 شهرًا", doses: [["Pneumocoque 4 (PCV4)", "المكورات الرئوية 4"]], offset: ["months", 12] },
  { fr: "18 mois", ar: "18 شهرًا", doses: [["Polio orale (VPO4)", "شلل الأطفال الفموي (VPO4)"], ["Rougeole-Rubéole (RR2)", "الحصبة والحصبة الألمانية (RR2)"], ["DTC1", "الدفتيريا والكزاز والسعال الديكي 1"]], offset: ["months", 18] },
  { fr: "5 ans", ar: "5 سنوات", doses: [["Polio orale (VPO5)", "شلل الأطفال الفموي (VPO5)"], ["DTC2", "الدفتيريا والكزاز والسعال الديكي 2"]], offset: ["years", 5] },
  { fr: "11 ans", ar: "11 سنة", doses: [["Papillomavirus (HPV)", "فيروس الورم الحليمي البشري"]], offset: ["years", 11] }
];

const text = {
  fr: {
    eyebrow: "Calendrier national · Maroc",
    title: "Les rendez-vous vaccinaux, en toute clarté.",
    subtitle: "Calculez les dates indicatives de vaccination à partir de la date de naissance de votre enfant.",
    privacy: "Vos données restent sur cet appareil.",
    step: "VOTRE SIMULATION",
    formTitle: "Informations de l’enfant",
    birthLabel: "Date de naissance",
    catchupTitle: "L’enfant a des doses en retard",
    catchupDescription: "Afficher un plan indicatif de rattrapage",
    catchupHelp: "Choisissez le dernier groupe de routine reçu. Les groupes précédents sont considérés comme complets ; indiquez les doses reçues dans ce dernier groupe.",
    lastGroupLabel: "Dernier groupe reçu",
    noDoses: "Aucune dose reçue",
    lastGroupDateLabel: "Date du dernier groupe reçu",
    firstVisitLabel: "Date de la première visite de rattrapage",
    calculate: "Calculer les rendez-vous",
    calculateCatchup: "Calculer le rattrapage",
    referenceTitle: "Référence et informations importantes",
    referenceBody: "Calendrier National de Vaccination 2025, Ministère de la Santé et de la Protection Sociale. Les dates sont calculées à partir des âges indiqués dans ce document.",
    sourceLink: "Consulter le document officiel ↗",
    disclaimerRoutine: "Ce calendrier indicatif ne remplace pas le carnet de santé ni l’avis d’un professionnel. Pour une dose manquée, contactez un centre de santé.",
    disclaimerCatchup: "Ce calcul indicatif suit les tableaux de rattrapage fournis et ne remplace pas le carnet de santé ni l’avis d’un professionnel. Faites confirmer les doses et les dates par un centre de santé.",
    footer: "Un outil indicatif pour accompagner le suivi vaccinal",
    chooseBirth: "Choisissez d’abord une date de naissance.",
    chooseVisit: "Choisissez aujourd’hui ou une date future pour la première visite de rattrapage.",
    lastGroupAfterVisit: "La première visite de rattrapage ne peut pas précéder la date du dernier groupe reçu.",
    outOfRange: "Les tableaux fournis couvrent les enfants jusqu’à 6 ans. Contactez un centre de santé pour choisir la conduite adaptée.",
    routineHeading: "Calendrier indicatif",
    catchupHeading: "Plan indicatif de rattrapage",
    noMissing: "Aucune dose manquante n’a été calculée à partir des groupes indiqués. Faites vérifier le carnet de santé.",
    past: "Date passée : ne pas appliquer de rattrapage automatiquement. Demandez conseil au centre de santé.",
    windowNote: "À réaliser pendant cette période.",
    visit: "Visite",
    source: SOURCE_URL
  },
  ar: {
    eyebrow: "البرنامج الوطني · المغرب",
    title: "مواعيد التلقيح، بكل وضوح.",
    subtitle: "احسب المواعيد الاسترشادية للتلقيح انطلاقًا من تاريخ ميلاد طفلك.",
    privacy: "تبقى بياناتك على هذا الجهاز.",
    step: "حساب المواعيد",
    formTitle: "معلومات الطفل",
    birthLabel: "تاريخ الميلاد",
    catchupTitle: "لدى الطفل جرعات متأخرة",
    catchupDescription: "عرض خطة استدراك استرشادية",
    catchupHelp: "اختر آخر مجموعة من الجدول الروتيني تلقاها الطفل. تُعتبر المجموعات السابقة مكتملة؛ وحدد الجرعات التي تلقاها فعلًا من المجموعة الأخيرة.",
    lastGroupLabel: "آخر مجموعة تلقاها الطفل",
    noDoses: "لم يتلق أي جرعة",
    lastGroupDateLabel: "تاريخ آخر مجموعة تلقاها الطفل",
    firstVisitLabel: "تاريخ الزيارة الأولى للاستدراك",
    calculate: "احسب المواعيد",
    calculateCatchup: "احسب مواعيد الاستدراك",
    referenceTitle: "المرجع ومعلومات مهمة",
    referenceBody: "البرنامج الوطني للتلقيح 2025، وزارة الصحة والحماية الاجتماعية. تُحسب المواعيد انطلاقًا من الأعمار الواردة في الوثيقة.",
    sourceLink: "اطّلع على الوثيقة الرسمية ↗",
    disclaimerRoutine: "هذا الجدول الاسترشادي لا يعوض دفتر الصحة أو استشارة مهني صحي. إذا فات موعد جرعة، تواصل مع مركز صحي.",
    disclaimerCatchup: "هذا الحساب استرشادي وفق جداول الاستدراك المرفقة، ولا يعوض دفتر الصحة أو استشارة مهني صحي. يجب تأكيد الجرعات والمواعيد لدى مركز صحي.",
    footer: "أداة استرشادية لمتابعة التلقيح",
    chooseBirth: "يرجى اختيار تاريخ الميلاد أولًا.",
    chooseVisit: "اختر اليوم أو تاريخًا مستقبليًا للزيارة الأولى للاستدراك.",
    lastGroupAfterVisit: "لا يمكن أن يسبق تاريخ الزيارة الأولى تاريخ آخر مجموعة تلقاها الطفل.",
    outOfRange: "الجداول المرفقة تشمل الأطفال حتى سن 6 سنوات. يرجى التواصل مع مركز صحي لتحديد الخطة المناسبة.",
    routineHeading: "الجدول الاسترشادي",
    catchupHeading: "خطة الاستدراك الاسترشادية",
    noMissing: "لم تُحسب جرعات ناقصة استنادًا إلى المجموعات المحددة. يرجى التحقق من دفتر الصحة.",
    past: "الموعد مضى: لا تُطبّق الاستدراك تلقائيًا. استشر المركز الصحي.",
    windowNote: "تُجرى الجرعات خلال هذه الفترة.",
    visit: "الزيارة",
    source: SOURCE_URL
  }
};

const dateInput = document.querySelector("#birth-date");
const catchupToggle = document.querySelector("#catch-up");
const catchupFields = document.querySelector("#catch-up-fields");
const groupSelect = document.querySelector("#last-group");
const doseOptions = document.querySelector("#dose-options");
const lastGroupDateField = document.querySelector("#last-group-date-field");
const firstVisitInput = document.querySelector("#first-visit-date");
const results = document.querySelector("#results");
let language = "fr";
const selectedDosesByGroup = new Map();

function todayString() {
  return toInputDate(new Date());
}

function parseDate(value) {
  if (!value) return null;
  const isDisplayFormat = value.includes("/");
  const parts = value.split(isDisplayFormat ? "/" : "-").map(Number);
  const [year, month, day] = isDisplayFormat ? [parts[2], parts[1], parts[0]] : parts;
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

function toInputDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDate(date) {
  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function addMonths(date, months) {
  const next = new Date(date);
  const day = next.getDate();
  next.setDate(1);
  next.setMonth(next.getMonth() + months);
  const lastDay = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
  next.setDate(Math.min(day, lastDay));
  return next;
}

function addYears(date, years) {
  return addMonths(date, years * 12);
}

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  const lang = text[language];
  document.documentElement.lang = language === "fr" ? "fr-FR" : "ar-MA";
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", language === "fr" ? "Choisir une date" : "اختر التاريخ");
  });
  document.querySelectorAll(".date-field input[type='text']").forEach((input) => {
    input.placeholder = language === "fr" ? "jj/mm/aaaa" : "يوم/شهر/سنة";
  });
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (lang[key]) element.textContent = lang[key];
  });
  document.querySelector("#language-button").textContent = language === "fr" ? "العربية" : "Français";
  document.querySelector(".reference a").href = lang.source;
  document.querySelector(".reference .disclaimer").textContent = catchupToggle.checked ? lang.disclaimerCatchup : lang.disclaimerRoutine;
  document.querySelector(".primary-button").textContent = catchupToggle.checked ? lang.calculateCatchup : lang.calculate;
  fillGroupOptions();
  showDoseOptions();
  if (results.dataset.mode) renderExistingResultLanguage();
}

function fillGroupOptions() {
  const previous = Number(groupSelect.value || 0);
  groupSelect.replaceChildren();
  const none = document.createElement("option");
  none.value = "0";
  none.textContent = text[language].noDoses;
  groupSelect.append(none);
  milestones.forEach((milestone, index) => {
    const option = document.createElement("option");
    option.value = String(index + 1);
    option.textContent = milestone[language === "fr" ? "fr" : "ar"];
    groupSelect.append(option);
  });
  groupSelect.value = String(Math.min(previous, milestones.length));
  updateSelectedGroup();
}

function showDoseOptions() {
  doseOptions.replaceChildren();
  const index = Number(groupSelect.value) - 1;
  if (index < 0) {
    const empty = document.createElement("span");
    empty.className = "empty-option";
    empty.textContent = text[language].noDoses;
    doseOptions.append(empty);
    return;
  }
  const milestone = milestones[index];
  if (!selectedDosesByGroup.has(index)) {
    selectedDosesByGroup.set(index, new Set(milestone.doses.map(([name]) => name)));
  }
  milestone.doses.forEach(([frenchName, arabicName]) => {
    const label = document.createElement("label");
    label.className = "dose-option";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selectedDosesByGroup.get(index).has(frenchName);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) selectedDosesByGroup.get(index).add(frenchName);
      else selectedDosesByGroup.get(index).delete(frenchName);
      results.replaceChildren();
      delete results.dataset.mode;
    });
    const name = document.createElement("span");
    name.textContent = language === "fr" ? frenchName : arabicName;
    label.append(checkbox, name);
    doseOptions.append(label);
  });
}

function updateSelectedGroup() {
  const hasGroup = Number(groupSelect.value) > 0;
  lastGroupDateField.hidden = !hasGroup;
  if (hasGroup && !document.querySelector("#last-group-date").value) {
    document.querySelector("#last-group-date").value = formatDate(parseDate(todayString()));
    document.querySelector("#last-group-date-picker").value = todayString();
  }
  showDoseOptions();
}

function clearResults() {
  results.replaceChildren();
  delete results.dataset.mode;
}

function el(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value) node.textContent = value;
  return node;
}

function addMessage(message) {
  clearResults();
  results.append(el("p", "result-message", message));
}

function renderRoutine(birthDate) {
  clearResults();
  results.dataset.mode = "routine";
  const lang = text[language];
  results.append(el("h3", "results-title", lang.routineHeading));
  const today = parseDate(todayString());
  milestones.forEach((milestone) => {
    const [unit, amount] = milestone.offset;
    const start = unit === "weeks" ? addDays(birthDate, amount * 7) :
      unit === "months" ? addMonths(birthDate, amount) :
      unit === "years" ? addYears(birthDate, amount) : birthDate;
    const end = unit === "window" ? addDays(birthDate, 28) : start;
    const card = el("article", "result-card");
    card.append(el("p", "result-date", unit === "window"
      ? (language === "fr" ? `Du ${formatDate(start)} au ${formatDate(end)}` : `من ${formatDate(start)} إلى ${formatDate(end)}`)
      : formatDate(start)));
    card.append(el("p", "result-age", milestone[language]));
    milestone.doses.forEach((dose) => card.append(el("p", "result-dose", `• ${dose[language === "fr" ? 0 : 1]}`)));
    if (end < today) card.append(el("p", "result-note", lang.past));
    else if (unit === "window") card.append(el("p", "result-age", lang.windowNote));
    results.append(card);
  });
}

function countCompletedDoses(lastIndex) {
  const counts = {};
  const received = milestones.slice(0, lastIndex).flatMap((milestone) => milestone.doses);
  if (lastIndex >= 0) {
    const selected = selectedDosesByGroup.get(lastIndex) || new Set();
    received.push(...milestones[lastIndex].doses.filter(([name]) => selected.has(name)));
  }
  received.forEach(([name]) => {
    const families = name === "BCG" ? ["BCG"] :
      name.startsWith("Pentavalent") ? ["DTC", "HB"] :
      name.startsWith("Hépatite B") ? ["HB"] :
      name.startsWith("Polio orale") ? ["VPO"] :
      name.startsWith("Polio inactivé") ? ["VPI"] :
      name.startsWith("Rougeole-Rubéole") ? ["RR"] :
      name.startsWith("Pneumocoque") ? ["PNEUMO"] :
      name.startsWith("Rotavirus") ? ["ROTAVIRUS"] :
      name.startsWith("DTC") ? ["DTC"] : [];
    families.forEach((family) => { counts[family] = (counts[family] || 0) + 1; });
  });
  return counts;
}

function calculateCatchup(birthDate, firstVisit, counts) {
  let band;
  if (firstVisit <= addYears(birthDate, 1)) band = "one";
  else if (firstVisit <= addYears(birthDate, 3)) band = "three";
  else if (firstVisit <= addYears(birthDate, 6)) band = "six";
  else return null;

  const visits = band === "one"
    ? { 1: firstVisit, 2: addDays(firstVisit, 15), 3: addMonths(firstVisit, 1), 4: addMonths(firstVisit, 2), 5: addDays(addMonths(firstVisit, 2), 15), 6: addMonths(addDays(addMonths(firstVisit, 2), 15), 2) }
    : band === "three"
      ? { 1: firstVisit, 2: addDays(firstVisit, 15), 3: addMonths(firstVisit, 1), 4: addMonths(addMonths(firstVisit, 1), 3), 5: addMonths(addMonths(addMonths(firstVisit, 1), 3), 2), 6: addMonths(addMonths(firstVisit, 1), 6) }
      : { 1: firstVisit, 2: addDays(firstVisit, 15), 3: addMonths(firstVisit, 1), 4: addMonths(addMonths(firstVisit, 1), 1), 5: addMonths(addMonths(firstVisit, 1), 6) };
  const items = [];
  const notes = [];
  const note = (fr, ar) => notes.push([fr, ar]);
  function series(family, target, slots, name, alsoCounts = []) {
    const already = counts[family] || 0;
    for (let number = already + 1; number <= target; number += 1) {
      const visit = slots[number - 1];
      if (!visit) continue;
      const names = name(number);
      items.push({ date: visits[visit], visit, names });
      counts[family] = (counts[family] || 0) + 1;
      alsoCounts.forEach((related) => { counts[related] = (counts[related] || 0) + 1; });
    }
  }
  function rotavirus() {
    const slots = [1, 3, 4];
    for (let number = (counts.ROTAVIRUS || 0) + 1; number <= 3; number += 1) {
      const date = visits[slots[number - 1]];
      if (date >= addMonths(birthDate, 24)) continue;
      items.push({ date, visit: slots[number - 1], names: [`Rotavirus : ${number}e dose`, `فيروس الروتا: الجرعة ${number}`] });
      counts.ROTAVIRUS = (counts.ROTAVIRUS || 0) + 1;
    }
    if ((counts.ROTAVIRUS || 0) < 3) note(
      "Si le vaccin utilisé est ROTASIL, l’âge limite est 24 mois. Aucune dose n’est proposée à partir de 24 mois ; confirmer auprès du centre de santé.",
      "إذا كان اللقاح المستعمل هو ROTASIL، فالحد الأقصى للعمر 24 شهرًا. لا تُقترح جرعة ابتداءً من 24 شهرًا؛ يرجى التأكد لدى المركز الصحي."
    );
  }
  function rr() {
    const given = counts.RR || 0;
    const firstDate = firstVisit > addMonths(birthDate, 9) ? firstVisit : addMonths(birthDate, 9);
    if (given < 1) {
      items.push({ date: firstDate, visit: sameDay(firstDate, firstVisit) ? 1 : null, names: ["RR : 1ère dose", "الحصبة والحصبة الألمانية: الجرعة الأولى"] });
      counts.RR = given + 1;
    }
    if (given < 2) {
      const secondDate = band === "three" && firstVisit > addMonths(birthDate, 18) && given === 0
        ? addMonths(firstDate, 1)
        : [visits[3] || firstVisit, addMonths(birthDate, 18), addMonths(firstDate, 1)].reduce((a, b) => a > b ? a : b);
      items.push({ date: secondDate, visit: null, names: ["RR : 2ème dose", "الحصبة والحصبة الألمانية: الجرعة الثانية"] });
      counts.RR = (counts.RR || 0) + 1;
    }
    if (band === "one") note("Ne pas administrer la RR avant 9 mois ; 2ème dose à 18 mois.", "لا تُعطى الحصبة والحصبة الألمانية قبل 9 أشهر؛ الجرعة الثانية في 18 شهرًا.");
    else if (band === "three") note("2ème dose à partir de 18 mois. Au-delà de 18 mois sans vaccination antérieure : 2 doses à 1 mois d’intervalle.", "الجرعة الثانية ابتداءً من 18 شهرًا. إذا تجاوز العمر 18 شهرًا ولم يسبق التلقيح: جرعتان بفاصل شهر واحد.");
  }
  function pneumo() {
    const ageMonths = (firstVisit.getFullYear() - birthDate.getFullYear()) * 12 + firstVisit.getMonth() - birthDate.getMonth() - (firstVisit.getDate() < birthDate.getDate() ? 1 : 0);
    const target = band === "one" ? (ageMonths < 7 ? 4 : 3) : band === "three" ? (firstVisit < addYears(birthDate, 2) ? 2 : 1) : (firstVisit < addYears(birthDate, 5) ? 1 : 0);
    const slots = band === "one" ? [2, 5, 6] : band === "three" ? (target === 2 ? [2, 5] : [2]) : [1];
    for (let number = (counts.PNEUMO || 0) + 1; number <= target; number += 1) {
      const visit = slots[number - 1];
      if (!visit) continue;
      items.push({ date: visits[visit], visit, names: [`Pneumocoque : ${number}ème dose`, `المكورات الرئوية: الجرعة ${number}`] });
      counts.PNEUMO = (counts.PNEUMO || 0) + 1;
    }
    if (band === "one") {
      note("Âge < 7 mois : 4 doses de PCV13. Entre 7 et 11 mois : 3 doses avec un intervalle minimum de 2 mois. Décaler de 15 jours par rapport au Penta.", "العمر أقل من 7 أشهر: 4 جرعات من PCV13. بين 7 و11 شهرًا: 3 جرعات بفاصل لا يقل عن شهرين. تُفصل 15 يومًا عن الخماسي.");
      if (target === 4 && (counts.PNEUMO || 0) < 4) note("Le tableau indique 4 doses avant 7 mois, mais ne place que 3 doses dans les visites : confirmer le calendrier de la dose restante au centre de santé.", "يشير الجدول إلى 4 جرعات قبل 7 أشهر، لكنه يحدد 3 جرعات فقط ضمن الزيارات؛ يجب تأكيد موعد الجرعة المتبقية مع المركز الصحي.");
    } else if (band === "three") note("Entre 12 et 23 mois : 2 doses avec un intervalle minimum de 2 mois. Entre 2 et 5 ans : 1 dose. Décaler de 15 jours par rapport au Penta.", "بين 12 و23 شهرًا: جرعتان بفاصل لا يقل عن شهرين. بين سنتين و5 سنوات: جرعة واحدة. تُفصل 15 يومًا عن الخماسي.");
    else note("Une seule dose si l’âge est inférieur à 5 ans.", "جرعة واحدة فقط إذا كان العمر أقل من 5 سنوات.");
  }

  series("BCG", 1, [1], () => ["BCG : 1 dose", "بي سي جي: جرعة واحدة"]);
  if (band === "one") {
    series("DTC", 3, [1, 3, 4], (n) => [`Pentavalent ${n}e dose (DTC-Hib-HB)`, `الخماسي، الجرعة ${n} (الدفتيريا والكزاز والسعال الديكي والمستدمية والتهاب الكبد ب)`], ["HB"]);
    series("VPO", 3, [1, 3, 4], (n) => [`VPO : ${n}e dose`, `شلل الأطفال الفموي: الجرعة ${n}`]);
    series("VPI", 2, [1, 3], (n) => [`VPI : ${n}ème dose`, `شلل الأطفال المعطل: الجرعة ${n}`]);
    rr(); pneumo(); rotavirus();
    note("Administrer 2 doses de rappel par le DTC à 18 mois et à 5 ans.", "تُعطى جرعتا تذكير من الدفتيريا والكزاز والسعال الديكي في 18 شهرًا و5 سنوات.");
    note("Administrer 2 doses du VPO à 18 mois et à 5 ans.", "تُعطى جرعتان من شلل الأطفال الفموي في 18 شهرًا و5 سنوات.");
    [[18, "18 mois"], [60, "5 ans"]].forEach(([months, age]) => {
      const date = addMonths(birthDate, months);
      if (date > firstVisit) items.push({ date, visit: null, names: [`Rappel DTC et dose de rappel VPO (${age}).`, `جرعة تذكير للدفتيريا والكزاز والسعال الديكي وجرعة تذكير لشلل الأطفال الفموي (${months === 18 ? "18 شهرًا" : "5 سنوات"}).`] });
    });
  } else if (band === "three") {
    const previousDtc = counts.DTC || 0;
    series("DTC", 2, [1, 3], (n) => n === 1 ? ["Pentavalent : 1ère dose", "الخماسي: الجرعة الأولى"] : ["DTC : 2ème dose", "الدفتيريا والكزاز والسعال الديكي: الجرعة الثانية"]);
    if (!previousDtc && (counts.DTC || 0) > 0) counts.HB = (counts.HB || 0) + 1;
    series("HB", 3, [1, 3, 6], (n) => [`Hépatite B monovalent : ${n}e dose`, `التهاب الكبد ب أحادي التكافؤ: الجرعة ${n}`]);
    series("VPO", 3, [1, 3, 4], (n) => [`VPO : ${n}e dose`, `شلل الأطفال الفموي: الجرعة ${n}`]);
    series("VPI", 2, [1, 3], (n) => [`VPI : ${n}ème dose`, `شلل الأطفال المعطل: الجرعة ${n}`]);
    rr(); pneumo(); rotavirus();
    const booster = addMonths(visits[3], 6);
    items.push({ date: booster, visit: null, names: ["1er rappel DTC : 6 mois après la 3ème visite ; rappel VPO à faire avec le DTC.", "التذكير الأول للدفتيريا والكزاز والسعال الديكي: بعد 6 أشهر من الزيارة الثالثة؛ ويُعطى تذكير شلل الأطفال الفموي معه."] });
    items.push({ date: addYears(booster, 4), visit: null, names: ["2ème rappel DTC : 4 ans après le 1er rappel ; rappel VPO à faire avec le DTC.", "التذكير الثاني للدفتيريا والكزاز والسعال الديكي: بعد 4 سنوات من التذكير الأول؛ ويُعطى تذكير شلل الأطفال الفموي معه."] });
    note("Toujours comptabiliser les doses incluses dans le Penta, si l’enfant en a déjà reçu.", "يجب دائمًا احتساب الجرعات الموجودة ضمن الخماسي إذا سبق للطفل تلقي جرعات منه.");
    note("1 dose du HB monovalent au moins 1 mois après la dose incluse dans le Penta ; une 2ème dose au moins 6 mois après.", "جرعة واحدة من التهاب الكبد ب أحادي التكافؤ بعد شهر على الأقل من الجرعة الموجودة ضمن الخماسي؛ ثم جرعة ثانية بعد 6 أشهر على الأقل.");
    note("1er rappel : 6 mois après la 3ème visite. 2ème rappel : 4 ans après le 1er rappel. Administrer 2 doses du VPO avec les rappels du DTC.", "التذكير الأول: بعد 6 أشهر من الزيارة الثالثة. التذكير الثاني: بعد 4 سنوات من التذكير الأول. تُعطى جرعتان من شلل الأطفال الفموي مع جرعتي تذكير الدفتيريا والكزاز والسعال الديكي.");
  } else {
    series("DTC", 3, [1, 3, 5], (n) => [`DTC : ${n}ème dose (pas de Penta après 3 ans)`, `الدفتيريا والكزاز والسعال الديكي: الجرعة ${n} (لا يُعطى الخماسي بعد 3 سنوات)`]);
    series("HB", 3, [1, 3, 5], (n) => [`Hépatite B : ${n}ème dose`, `التهاب الكبد ب: الجرعة ${n}`]);
    series("VPO", 4, [1, 3, 4, 5], (n) => [`VPO : ${n}ème dose`, `شلل الأطفال الفموي: الجرعة ${n}`]);
    series("VPI", 2, [1, 3], (n) => [`VPI : ${n}ème dose`, `شلل الأطفال المعطل: الجرعة ${n}`]);
    rr();
    if (firstVisit < addYears(birthDate, 5)) series("PNEUMO", 1, [1], () => ["Pneumocoque : 1 dose", "المكورات الرئوية: جرعة واحدة"]);
    note("Si l’enfant est âgé de 3 à 5 ans : administrer une dose de rappel du DTC ou du Td (selon l’âge) après 4 ans. Administrer une dose du VPO avec le rappel.", "إذا كان عمر الطفل من 3 إلى 5 سنوات: تُعطى جرعة تذكير من الدفتيريا والكزاز والسعال الديكي أو Td (حسب العمر) بعد 4 سنوات، مع جرعة من شلل الأطفال الفموي.");
  }
  note("BCG : rechercher la cicatrice ; 0,1 ml en intradermique.", "بي سي جي: تحرّي وجود الندبة؛ 0.1 مل داخل الأدمة.");
  note("N’administrer que les doses manquantes ; poursuivre le Calendrier National de Vaccination jusqu’à vaccination complète.", "لا تُعطى إلا الجرعات الناقصة؛ ويُستكمل البرنامج الوطني للتلقيح حتى اكتمال التلقيح.");
  items.sort((a, b) => a.date - b.date || (a.visit || 99) - (b.visit || 99));
  return { band, items, notes };
}

function renderCatchup(plan) {
  clearResults();
  results.dataset.mode = "catchup";
  const lang = text[language];
  const bandLabel = plan.band === "one" ? (language === "fr" ? "Âge ≤ 1 an" : "العمر ≤ سنة واحدة")
    : plan.band === "three" ? (language === "fr" ? "Âge > 1 an et ≤ 3 ans" : "العمر > 1 سنة و≤ 3 سنوات")
      : (language === "fr" ? "Âge > 3 ans et ≤ 6 ans" : "العمر > 3 سنوات و≤ 6 سنوات");
  results.append(el("h3", "results-title", `${lang.catchupHeading} — ${bandLabel}`));
  if (!plan.items.length) results.append(el("p", "catchup-note", lang.noMissing));
  const groups = new Map();
  plan.items.forEach((item) => {
    const key = toInputDate(item.date);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  groups.forEach((items) => {
    const card = el("article", "result-card");
    card.append(el("p", "result-date", formatDate(items[0].date)));
    const visits = [...new Set(items.map((item) => item.visit).filter(Boolean))];
    if (visits.length) card.append(el("p", "result-visit", visits.map((visit) => `${lang.visit} ${visit}`).join(" / ")));
    items.forEach((item) => card.append(el("p", "result-dose", `• ${item.names[language === "fr" ? 0 : 1]}`)));
    results.append(card);
  });
  [...new Map(plan.notes.map((item) => [item[language === "fr" ? 0 : 1], item])).keys()].forEach((noteText) => {
    results.append(el("p", "catchup-note", `• ${noteText}`));
  });
}

function renderExistingResultLanguage() {
  const birthDate = parseDate(dateInput.value);
  if (!birthDate) return;
  if (results.dataset.mode === "routine") renderRoutine(birthDate);
  else if (results.dataset.mode === "catchup") {
    const firstVisit = parseDate(firstVisitInput.value);
    const lastIndex = Number(groupSelect.value) - 1;
    renderCatchup(calculateCatchup(birthDate, firstVisit, countCompletedDoses(lastIndex)));
  }
}

document.querySelector("#language-button").addEventListener("click", () => setLanguage(language === "fr" ? "ar" : "fr"));
document.querySelectorAll(".calendar-button").forEach((button) => {
  const picker = document.getElementById(button.dataset.picker);
  const input = button.closest(".date-field").querySelector('input[type="text"]');
  button.addEventListener("click", () => {
    const date = parseDate(input.value);
    picker.value = date ? toInputDate(date) : todayString();
    if (typeof picker.showPicker === "function") picker.showPicker();
    else picker.click();
  });
  picker.addEventListener("change", () => {
    input.value = picker.value ? formatDate(parseDate(picker.value)) : "";
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
  input.addEventListener("input", () => {
    const date = parseDate(input.value);
    picker.value = date ? toInputDate(date) : "";
  });
});
groupSelect.addEventListener("change", () => {
  updateSelectedGroup();
  clearResults();
});
catchupToggle.addEventListener("change", () => {
  catchupFields.hidden = !catchupToggle.checked;
  document.querySelector(".primary-button").textContent = catchupToggle.checked ? text[language].calculateCatchup : text[language].calculate;
  document.querySelector(".reference .disclaimer").textContent = catchupToggle.checked ? text[language].disclaimerCatchup : text[language].disclaimerRoutine;
  clearResults();
});

document.querySelector("#schedule-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const lang = text[language];
  const birthDate = parseDate(dateInput.value);
  if (!birthDate) return addMessage(lang.chooseBirth);
  if (!catchupToggle.checked) return renderRoutine(birthDate);
  const firstVisit = parseDate(firstVisitInput.value);
  const today = parseDate(todayString());
  if (!firstVisit || firstVisit < today) return addMessage(lang.chooseVisit);
  const lastIndex = Number(groupSelect.value) - 1;
  const lastGroupDate = parseDate(document.querySelector("#last-group-date").value);
  if (lastIndex >= 0 && lastGroupDate && lastGroupDate > firstVisit) return addMessage(lang.lastGroupAfterVisit);
  const plan = calculateCatchup(birthDate, firstVisit, countCompletedDoses(lastIndex));
  if (!plan) return addMessage(lang.outOfRange);
  renderCatchup(plan);
});

document.querySelector("#birth-date-picker").max = todayString();
document.querySelector("#last-group-date-picker").max = todayString();
document.querySelector("#first-visit-date-picker").min = todayString();
firstVisitInput.value = formatDate(parseDate(todayString()));
document.querySelector("#first-visit-date-picker").value = todayString();
document.querySelector(".reference a").href = SOURCE_URL;
setLanguage("fr");
