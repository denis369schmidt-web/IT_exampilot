export interface StudyPlanDay {
  day: number;
  title: string;
  focus: string;
  moduleIds: string[];
  checklist: string[];
  minutes: number;
}

/** 7-Tage Intensivplan: 1. Klassenarbeit .NET Framework */
export const klassenarbeitPlan: StudyPlanDay[] = [
  {
    day: 1,
    title: "Visual Studio + Main-Gerüst",
    focus: ".NET Framework Projekt & klassische Program/Main-Struktur verstehen",
    moduleIds: ["netfx-vs-project", "netfx-program-main", "cs-zero-program"],
    checklist: [
      "Unterschied Solution/Projekt erklären können",
      "Main-Gerüst auswendig skizzieren",
      "Walkthrough „Gerüst von außen nach innen“ durchklicken"
    ],
    minutes: 50
  },
  {
    day: 2,
    title: "Variablen, Operatoren, Console-IO",
    focus: "Zuweisen, rechnen, ReadLine/Parse unter Framework",
    moduleIds: ["cs-zero-variables", "cs-zero-operators", "netfx-console-io"],
    checklist: [
      "`=` vs `==` sicher",
      "ReadLine → Parse nachspielen",
      "Fallstrick \"Summe: \" + a + b erklären"
    ],
    minutes: 55
  },
  {
    day: 3,
    title: "if/else & Schleifen tracen",
    focus: "Verzweigungen und for/while im Kopf ausführen",
    moduleIds: ["cs-zero-branches", "cs-zero-loops"],
    checklist: [
      "Noten-/Rabatt-if selbst schreiben",
      "Schleifen-Tabelle: Durchlauf | i | Ausgabe",
      "Grenzfälle 0 und genau Grenze testen"
    ],
    minutes: 55
  },
  {
    day: 4,
    title: "Arrays & Methoden",
    focus: "Index, Length, return — auch in Main aufrufen",
    moduleIds: ["cs-zero-arrays", "cs-zero-methods-school"],
    checklist: [
      "Summe/Max im Array von Hand",
      "Methode + Aufruf aus Main skizzieren",
      "3 Trace-/Predict-Übungen ohne Spicken"
    ],
    minutes: 60
  },
  {
    day: 5,
    title: "Windows Forms Basics",
    focus: "Button, TextBox, Label, Click-Handler, MessageBox",
    moduleIds: ["netfx-winforms-basics", "netfx-winforms-logic"],
    checklist: [
      "Click-Signatur erklären können",
      "TextBox.Text → Parse → Label.Text üben",
      "Validierung mit TryParse + return"
    ],
    minutes: 60
  },
  {
    day: 6,
    title: "UI trifft Algorithmus",
    focus: "Dieselbe Logik in Console und WinForms",
    moduleIds: ["cs-algorithms", "cs-basics-types", "netfx-winforms-logic"],
    checklist: [
      "Summe 1..n in Console UND als Button-Logik",
      "Integer-Division und Verkettung wiederholen",
      "ListBox Items.Add einmal bauen"
    ],
    minutes: 60
  },
  {
    day: 7,
    title: "KA-Simulation .NET Framework",
    focus: "Mixed Set unter Zeit — Abgabe-Checkliste",
    moduleIds: ["netfx-ka1-boss", "cs-ka-training"],
    checklist: [
      "Boss-Modul komplett",
      "Main static? Controls benannt? Parse geprüft?",
      "40 Min Pause, dann Fehlerkarteikarten"
    ],
    minutes: 70
  }
];

export const pathLabels: Record<string, string> = {
  all: "Alle Module",
  netfx: ".NET Framework",
  "von-null": "Von Null",
  klassenarbeit: "Klassenarbeit",
  pruefung: "AP2 / Prüfung"
};
