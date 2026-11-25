import type { CsharpModule } from "./csharpTypes";

export const csharpCatalogPart3: CsharpModule[] = [
  {
    id: "cs-strings-parse",
    order: 11,
    title: "Strings, Eingaben & Konvertierung",
    level: "Azubi",
    examFocus: "AP2 · Console-Eingaben & Textverarbeitung",
    whyItMatters:
      "Fast jede Algorithmus-Aufgabe liest Eingaben. String-Methoden und sicheres Parsen entscheiden über stabile Lösungen.",
    minutes: 25,
    goals: [
      "ReadLine + Parse/TryParse kombinieren",
      "Length, Contains, Split, Trim nutzen",
      "String-Interpolation verstehen",
      "Leere/ungültige Eingaben abfangen"
    ],
    theory: [
      "`Console.ReadLine()` liefert `string?`. In modernen Projekten oft mit `!` oder Null-Check.",
      "Wichtige Methoden: `Trim()`, `ToLower()`, `Contains`, `StartsWith`, `Split`, `Replace`, `Length`.",
      "Interpolation: `$\"Hallo {name}\"` ist prüfungsfreundlich und lesbar.",
      "Mehrere Werte aus einer Zeile: `Split(' ')` oder `Split(';')`, danach jedes Teil parsen."
    ],
    remember: [
      "Trim vor Vergleichen gegen Leerzeichen.",
      "TryParse bei Benutzereingaben bevorzugen.",
      "Split erzeugt ein Array — Länge prüfen."
    ],
    codeExamples: [
      {
        title: "Eingabe zerlegen",
        code: `Console.Write("a b: ");
string? line = Console.ReadLine();
if (string.IsNullOrWhiteSpace(line)) return;

string[] parts = line.Trim().Split(' ');
if (parts.Length >= 2 &&
    int.TryParse(parts[0], out int a) &&
    int.TryParse(parts[1], out int b))
{
    Console.WriteLine(a + b);
}`,
        note: "Robust gegen Leerzeichen und Müll-Eingaben."
      }
    ],
    pitfalls: [
      "Null von ReadLine ignorieren",
      "Split ohne Längenprüfung",
      "Culture-Themen bei Komma/Punkt (in DE-Prüfungen oft Punkt ok)"
    ],
    flashcards: [
      { front: "Was liefert ReadLine?", back: "Einen String (oder null am Stream-Ende)." },
      { front: "Trim()?", back: "Entfernt führende/trailing Whitespaces." },
      { front: "Split(';', StringSplitOptions)?", back: "Zerlegt einen String in Teile." }
    ],
    exercises: [
      {
        id: "cs-str-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Variante ist am robustesten für Konsoleneingaben?",
        options: ["int.Parse(ReadLine())", "int.TryParse(...)", "Convert ohne Check", "(int)text"],
        correctIndex: 1,
        explanation: "TryParse crasht nicht bei Müll-Eingaben.",
        xp: 15
      },
      {
        id: "cs-str-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `string s = "  C# Dojo  ";
Console.WriteLine(s.Trim().Length);`,
        options: ["11", "7", "9", "8"],
        correctIndex: 1,
        explanation: "\"C# Dojo\" hat 7 Zeichen.",
        xp: 15
      },
      {
        id: "cs-str-fill-1",
        kind: "fillBlank",
        prompt: "Interpolation.",
        code: `string name = "Ada";
Console.WriteLine(______\"Hi {name}\");`,
        blanks: [{ id: "b1", answer: "$" }],
        explanation: "$ aktiviert String-Interpolation.",
        xp: 15
      },
      {
        id: "cs-str-bug-1",
        kind: "spotBug",
        prompt: "Finde den Eingabe-Bug.",
        code: `string line = Console.ReadLine();
string[] p = line.Split(' ');
int a = int.Parse(p[0]);
int b = int.Parse(p[1]);`,
        buggyLine: 1,
        fix: "Null/Leer prüfen und TryParse + Length prüfen.",
        explanation: "ReadLine kann null sein, Split kann zu kurz sein.",
        xp: 25
      }
    ]
  },
  {
    id: "cs-cheatsheet-exam",
    order: 12,
    title: "Prüfungs-Cheatsheet & Rapid Fire",
    level: "Boss",
    examFocus: "AP2 Rapid Review",
    whyItMatters:
      "Kurz vor der Prüfung brauchst du eine dichte Wiederholung der Punktefresser und Kernmuster.",
    minutes: 20,
    goals: [
      "Die 3 häufigsten Punktefresser abrufen",
      "Kernmuster Artikelverwaltung skizzieren",
      "Schnell entscheiden: Array/List/Dictionary"
    ],
    theory: [
      "Priorität vor der Prüfung: Grundlagen + Schleifen + List + Klasse/Property + lineare Suche + try/catch.",
      "Punktefresser: 1) switch ohne break 2) Integer-Division 3) catch(Exception) vor speziellem catch.",
      "Frameworks (ASP.NET, EF, WPF) sind für die schriftliche Algorithmus-Prüfung Nebensache.",
      "Übe handschriftlich: 45–90 Minuten, dann abtippen und Compilerfehler auswerten."
    ],
    remember: [
      "Logik > perfekte Syntax.",
      "Immer 'nicht gefunden' und ungültige Eingabe vorsehen.",
      "List + foreach ist dein Safe Default."
    ],
    codeExamples: [
      {
        title: "30-Sekunden-Skelett",
        code: `// 1 Klasse
// 2 List<T> füllen
// 3 Input parsen (try)
// 4 foreach suchen (+ break)
// 5 Output / not found / catch`,
        note: "Auf Bibliothek, Tickets, Mitglieder 1:1 übertragbar."
      }
    ],
    pitfalls: [
      "Zu lange an Syntax feilen",
      "Keine Testdaten hinschreiben",
      "Randfälle weglassen"
    ],
    flashcards: [
      {
        front: "Nenne die 3 Punktefresser.",
        back: "switch ohne break, Integer-Division, falsche catch-Reihenfolge."
      },
      {
        front: "Welche Collections sind Pflicht?",
        back: "Array, List, Dictionary — Queue/Stack konzeptionell."
      },
      {
        front: "Was prüft IHK bei C# vor allem?",
        back: "Kernsprache, OOP, Collections, Algorithmen, Exceptions — nicht Frameworks."
      }
    ],
    exercises: [
      {
        id: "cs-cheat-mc-1",
        kind: "multipleChoice",
        prompt: "Was ist in der Algorithmus-Prüfung am wichtigsten?",
        options: [
          "Entity Framework Mastery",
          "Klare Schleifen-/OOP-Logik auf Papier",
          "Blazor Components",
          "Docker Compose"
        ],
        correctIndex: 1,
        explanation: "IHK prüft Kernkompetenzen der Sprache und Algorithmik.",
        xp: 20
      },
      {
        id: "cs-cheat-mc-2",
        kind: "multipleChoice",
        prompt: "Welcher Ausdruck ist korrekt für 2.5?",
        options: ["5 / 2", "5 / 2.0", "(int)(5 / 2.0)", "5 % 2"],
        correctIndex: 1,
        explanation: "Mindestens ein Operand muss double/decimal sein.",
        xp: 15
      },
      {
        id: "cs-cheat-order-1",
        kind: "orderCode",
        prompt: "Ordne die mentale Checkliste vor Abgabe.",
        lines: [
          "Randfälle notiert? (leer / nicht gefunden)",
          "Division wirklich double?",
          "switch mit break?",
          "catch speziell vor allgemein?"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Eine kurze Checkliste rettet Punkte.",
        xp: 20
      },
      {
        id: "cs-cheat-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `Console.WriteLine(5 / 2);
Console.WriteLine(5 / 2.0);`,
        options: ["2 und 2.5", "2.5 und 2.5", "2 und 2", "2.5 und 2"],
        correctIndex: 0,
        explanation: "Integer-Division vs Gleitkomma-Division.",
        xp: 20
      }
    ],
    badgeHint: "csharp-algo"
  }
];
