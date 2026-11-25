export interface StudyPlanDay {
  day: number;
  title: string;
  focus: string;
  moduleIds: string[];
  checklist: string[];
  minutes: number;
}

/** 7-Tage Intensivplan für die Klassenarbeit – von Null zu sicher */
export const klassenarbeitPlan: StudyPlanDay[] = [
  {
    day: 1,
    title: "Programm & Variablen",
    focus: "Verstehen, was der Computer Zeile für Zeile macht",
    moduleIds: ["cs-zero-program", "cs-zero-variables"],
    checklist: [
      "Walkthroughs vollständig durchklicken",
      "Alle Trace-Übungen lösen",
      "Eigene 5 Zuweisungsbeispiele auf Papier tracen"
    ],
    minutes: 45
  },
  {
    day: 2,
    title: "Operatoren & if/else",
    focus: "Bedingungen auf Deutsch formulieren, dann coden",
    moduleIds: ["cs-zero-operators", "cs-zero-branches"],
    checklist: [
      "`=` vs `==` sicher unterscheiden",
      "Noten-/Rabattaufgabe selbst aufschreiben",
      "Grenzfälle 0, genau Grenze, negativ testen"
    ],
    minutes: 50
  },
  {
    day: 3,
    title: "Schleifen tracen",
    focus: "Durchläufe zählen und Ausgaben vorhersagen",
    moduleIds: ["cs-zero-loops", "cs-control-flow"],
    checklist: [
      "for-Kopf in Start/Bedingung/Update zerlegen",
      "Tabelle: Durchlauf | i | Ausgabe",
      "Eine while-Endlosschleife absichtlich bauen und reparieren"
    ],
    minutes: 55
  },
  {
    day: 4,
    title: "Arrays & Methoden",
    focus: "Index, Length, Aufruf/return",
    moduleIds: ["cs-zero-arrays", "cs-zero-methods-school", "cs-methods"],
    checklist: [
      "Summe und Max im Array von Hand rechnen",
      "Methode ZaehleGroesser erklären können",
      "3 Predict-Output-Aufgaben ohne Spicken"
    ],
    minutes: 60
  },
  {
    day: 5,
    title: "Datentypen & typische Fallen",
    focus: "Parse, Integer-Division, bool",
    moduleIds: ["cs-basics-types", "cs-strings-parse"],
    checklist: [
      "5/2 vs 5/2.0 erklären",
      "TryParse vs Parse gegenüberstellen",
      "Bug-Hunt-Übungen wiederholen"
    ],
    minutes: 50
  },
  {
    day: 6,
    title: "Collections & kleine Algorithmen",
    focus: "List, suchen, zählen, filtern",
    moduleIds: ["cs-arrays-collections", "cs-algorithms"],
    checklist: [
      "Lineare Suche auf Papier schreiben",
      "Min mit a[0] initialisieren begründen",
      "Eine Zähl-Aufgabe mit foreach lösen"
    ],
    minutes: 60
  },
  {
    day: 7,
    title: "Klassenarbeit Simulation",
    focus: "Gemischtes Set unter Zeit",
    moduleIds: ["cs-ka-training", "cs-cheatsheet-exam"],
    checklist: [
      "Mixed Set einmal durchspielen",
      "Schwache Module nochmals öffnen",
      "40 Minuten Pause, dann Fehlerkarteikarten"
    ],
    minutes: 70
  }
];

export const pathLabels: Record<string, string> = {
  all: "Alle Module",
  "von-null": "Von Null",
  klassenarbeit: "Klassenarbeit",
  pruefung: "AP2 / Prüfung"
};
