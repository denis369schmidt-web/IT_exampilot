import type { CsharpModule } from "./csharpTypes";

/** Intensiver Einstieg von Null – ideal vor Klassenarbeiten */
export const csharpFoundation: CsharpModule[] = [
  {
    id: "cs-zero-program",
    order: 1,
    title: "Was ist ein C#-Programm?",
    level: "Starter",
    path: ["von-null", "klassenarbeit"],
    examFocus: "Klassenarbeit · Verständnis von Grund auf",
    whyItMatters:
      "Bevor du Syntax paukst, musst du verstehen: Computer führt Anweisungen der Reihe nach aus. C# ist die Sprache, in der du diese Anweisungen schreibst.",
    minutes: 20,
    goals: [
      "Programm, Anweisung und Ausgabe erklären",
      "Rolle von Main / Top-Level-Statements grob kennen",
      "Verstehen: Compiler prüft, Runtime führt aus"
    ],
    theory: [
      "Ein Programm ist eine Liste von Anweisungen. Der Computer arbeitet sie von oben nach unten ab — außer Schleifen/Verzweigungen sagen etwas anderes.",
      "C# ist eine von Microsoft entwickelte Sprache für .NET. Du schreibst Quellcode (`.cs`), der Compiler macht daraus ausführbaren Code.",
      "Klassisch startet alles in `static void Main(...)`. In modernen Projekten reichen oft Top-Level-Statements: Code direkt in der Datei.",
      "`Console.WriteLine(...)` schreibt Text in die Konsole und macht einen Zeilenumbruch. `Write` ohne Line bleibt in derselben Zeile.",
      "Geschweifte Klammern `{ }` markieren Blöcke. Semikolons `;` beenden die meisten Anweisungen. Groß-/Kleinschreibung zählt (`WriteLine` ≠ `writeline`)."
    ],
    remember: [
      "Reihenfolge zählt: Zeile 1 vor Zeile 2.",
      "WriteLine = ausgeben + neue Zeile.",
      "Fehler beim Kompilieren ≠ Laufzeitfehler."
    ],
    codeExamples: [
      {
        title: "Erstes Programm",
        code: `using System;

Console.WriteLine("Hallo Klassenarbeit!");
Console.Write("Name: ");
string? name = Console.ReadLine();
Console.WriteLine("Hi " + name);`,
        note: "Lesen → speichern → verarbeiten → ausgeben ist das Grundmuster."
      }
    ],
    walkthrough: {
      title: "Zeile für Zeile verstehen",
      code: `Console.WriteLine("Start");
int x = 2;
x = x + 1;
Console.WriteLine(x);`,
      steps: [
        {
          line: 1,
          title: "Ausgabe",
          explain: "Die Konsole zeigt Start. Noch keine Variable verändert.",
          memory: "Ausgabe: Start"
        },
        {
          line: 2,
          title: "Variable anlegen",
          explain: "Im Speicher entsteht die Box x mit Wert 2.",
          memory: "x = 2"
        },
        {
          line: 3,
          title: "Wert ändern",
          explain: "Rechts wird x+1 berechnet (3), links in x geschrieben.",
          memory: "x = 3"
        },
        {
          line: 4,
          title: "Aktuellen Wert zeigen",
          explain: "WriteLine liest den aktuellen Wert von x und gibt 3 aus.",
          memory: "Ausgabe: 3 · x = 3"
        }
      ]
    },
    pitfalls: [
      "Anweisungen ohne ;",
      "Denken, der Computer 'denkt mit' — er macht nur, was geschrieben steht",
      "Ausgabe mit Logik verwechseln"
    ],
    flashcards: [
      {
        front: "Was macht Console.WriteLine?",
        back: "Gibt Text aus und springt in die nächste Zeile."
      },
      {
        front: "Was ist eine Anweisung?",
        back: "Ein einzelner Befehl, den der Computer ausführt."
      },
      {
        front: "Warum ist die Reihenfolge wichtig?",
        back: "Weil Variablen erst existieren/gesetzt sein müssen, bevor man sie nutzt."
      }
    ],
    exercises: [
      {
        id: "cs-zero-mc-1",
        kind: "multipleChoice",
        prompt: "Was passiert zuerst in einem normalen Programm?",
        options: [
          "Zufällige Zeile irgendwo",
          "Die erste Anweisung von oben",
          "Immer zuerst die letzte Zeile",
          "Nur Methoden ohne Aufruf"
        ],
        correctIndex: 1,
        explanation: "Ohne Sprünge/Schleifen läuft Code strikt von oben nach unten.",
        xp: 10
      },
      {
        id: "cs-zero-pred-1",
        kind: "predictOutput",
        prompt: "Was erscheint auf der Konsole?",
        code: `Console.Write("A");
Console.WriteLine("B");
Console.WriteLine("C");`,
        options: ["A dann B dann C in 3 Zeilen", "AB in Zeile 1, C in Zeile 2", "ABC in einer Zeile", "Nur C"],
        correctIndex: 1,
        explanation: "Write bleibt in der Zeile, WriteLine macht Umbruch → AB / C.",
        xp: 15
      },
      {
        id: "cs-zero-trace-1",
        kind: "traceState",
        prompt: "Denke wie der Computer.",
        code: `int a = 5;
a = a * 2;
Console.WriteLine(a);`,
        question: "Welchen Wert hat a direkt vor dem WriteLine?",
        options: ["5", "10", "2", "0"],
        correctIndex: 1,
        explanation: "5 * 2 wird berechnet und zurück nach a geschrieben → 10.",
        xp: 20
      },
      {
        id: "cs-zero-fill-1",
        kind: "fillBlank",
        prompt: "Vervollständige die Ausgabe.",
        code: `Console.______("Hallo");`,
        blanks: [{ id: "b1", answer: "WriteLine", alternatives: ["writeline"] }],
        explanation: "WriteLine ist der Standardbefehl für Konsolenausgabe.",
        xp: 10
      }
    ],
    badgeHint: "csharp-starter"
  },
  {
    id: "cs-zero-variables",
    order: 2,
    title: "Variablen wirklich verstehen",
    level: "Starter",
    path: ["von-null", "klassenarbeit"],
    examFocus: "Klassenarbeit · Variablen & Zuweisung",
    whyItMatters:
      "Variablen sind benannte Schubladen im Speicher. Wer Zuweisung und Typ verwechselt, scheitert an fast jeder Aufgabe.",
    minutes: 25,
    goals: [
      "Deklaration vs. Initialisierung unterscheiden",
      "Zuweisung von rechts nach links lesen",
      "Typ und erlaubte Werte erklären",
      "var vs. expliziter Typ einordnen"
    ],
    theory: [
      "`int punkte;` deklariert eine Variable (Name + Typ). `int punkte = 0;` initialisiert sie sofort.",
      "Zuweisung `punkte = punkte + 1;` liest man: Nimm den alten Wert, addiere 1, speichere das Ergebnis wieder in punkte.",
      "Der Typ begrenzt, was hinein darf: In `int` keine Texte, in `string` keine nackten Zahlen ohne Anführungszeichen.",
      "`const double Pi = 3.14;` ist konstant — nach dem Setzen nicht mehr änderbar.",
      "`var alter = 18;` ist weiterhin int. var spart Schreibarbeit, entfernt aber nicht den Typ."
    ],
    remember: [
      "Rechts berechnen, links speichern.",
      "Ohne Initialisierung oft nicht lesbar (lokale Variablen).",
      "Name sollte Bedeutung tragen: summe, nicht s."
    ],
    codeExamples: [
      {
        title: "Zuweisung Schritt für Schritt",
        code: `int leben = 3;
leben = leben - 1;   // jetzt 2
leben += 2;          // Kurzform für leben = leben + 2 → 4
string status = "ok";
status = status + "!"; // "ok!"`,
        note: "+=, -=, *=, /= sind Kurzformen."
      }
    ],
    walkthrough: {
      title: "Speicher-Trace",
      code: `int a = 4;
int b = a;
a = 9;
Console.WriteLine(a);
Console.WriteLine(b);`,
      steps: [
        { line: 1, title: "a anlegen", explain: "a bekommt 4.", memory: "a=4" },
        {
          line: 2,
          title: "b kopiert Wert",
          explain: "b erhält eine Kopie von a (bei int). a und b sind unabhängig.",
          memory: "a=4 · b=4"
        },
        {
          line: 3,
          title: "nur a ändern",
          explain: "a wird 9. b bleibt 4, weil Werttypen kopiert werden.",
          memory: "a=9 · b=4"
        },
        { line: 4, title: "a ausgeben", explain: "Ausgabe 9.", memory: "Ausgabe: 9" },
        { line: 5, title: "b ausgeben", explain: "Ausgabe 4.", memory: "Ausgabe: 4" }
      ]
    },
    pitfalls: [
      "Links und rechts der Zuweisung vertauschen mental",
      "Gleichnamige Variablen in inneren Blöcken verwechseln",
      "Uninitialisierte lokale Variable lesen"
    ],
    flashcards: [
      {
        front: "Was bedeutet int x = 5;?",
        back: "Lege eine int-Variable x an und speichere 5 hinein."
      },
      {
        front: "Was passiert bei int b = a; (ints)?",
        back: "Der aktuelle Wert von a wird nach b kopiert."
      },
      { front: "Was ist Initialisierung?", back: "Beim Anlegen sofort einen Startwert setzen." }
    ],
    exercises: [
      {
        id: "cs-var-trace-1",
        kind: "traceState",
        prompt: "Verfolge die Werte.",
        code: `int x = 2;
int y = 5;
x = y;
y = 1;`,
        question: "Werte von x und y am Ende?",
        options: ["x=2 y=1", "x=5 y=1", "x=1 y=1", "x=5 y=5"],
        correctIndex: 1,
        explanation: "x wird auf 5 gesetzt, danach wird nur y auf 1 geändert.",
        xp: 20
      },
      {
        id: "cs-var-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Aussage ist richtig?",
        options: [
          "Der Typ einer Variable kann sich zur Laufzeit frei ändern",
          "Der Typ legt fest, welche Art von Werten erlaubt ist",
          "var bedeutet typelos",
          "Zuweisung geht von links nach rechts"
        ],
        correctIndex: 1,
        explanation: "C# ist statisch typisiert — der Typ sitzt fest.",
        xp: 15
      },
      {
        id: "cs-var-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `int n = 10;
n += 5;
n -= 3;
Console.WriteLine(n);`,
        options: ["10", "15", "12", "8"],
        correctIndex: 2,
        explanation: "10+5=15, 15-3=12.",
        xp: 15
      },
      {
        id: "cs-var-fill-1",
        kind: "fillBlank",
        prompt: "Konstante deklarieren.",
        code: `______ int Max = 100;`,
        blanks: [{ id: "b1", answer: "const" }],
        explanation: "const macht den Wert unveränderlich.",
        xp: 15
      }
    ]
  },
  {
    id: "cs-zero-operators",
    order: 3,
    title: "Operatoren & Ausdrücke",
    level: "Starter",
    path: ["von-null", "klassenarbeit"],
    examFocus: "Klassenarbeit · Rechnen & Vergleichen",
    whyItMatters:
      "Ausdrücke sind die Rechenregeln deines Programms. Priorität, Vergleich und boolsche Logik kommen in jeder Klassenarbeit.",
    minutes: 30,
    goals: [
      "Arithmetik und Modulo anwenden",
      "Vergleiche (==, !=, <, >) als bool verstehen",
      "&&, ||, ! korrekt lesen",
      "Klammern für Klarheit nutzen"
    ],
    theory: [
      "Arithmetik: `+ - * / %`. `%` = Rest. Beispiel: 10 % 3 == 1.",
      "Vergleiche erzeugen `bool`: `alter >= 18` ist true oder false.",
      "`&&` (und): beide Seiten true. `||` (oder): mindestens eine true. `!` verneint.",
      "Kurzschluss: Bei `false && ...` wird rechts oft nicht mehr ausgewertet. Bei `true || ...` ebenfalls.",
      "Vergleiche nie floating-point blind auf exakte Gleichheit in Realwelt-Mathe — in Klassenarbeiten bei ints bist du safe."
    ],
    remember: [
      "`=` weist zu, `==` vergleicht.",
      "Klammern schlagen Operatorrang.",
      "true && false → false; true || false → true."
    ],
    codeExamples: [
      {
        title: "Logik lesen",
        code: `int note = 3;
bool bestanden = note >= 1 && note <= 4;
bool ehren = note == 1 || note == 2;
bool durchgefallen = !bestanden;`,
        note: "Formuliere Bedingungen zuerst auf Deutsch, dann in Code."
      }
    ],
    walkthrough: {
      title: "Bedingung zerlegen",
      code: `int alter = 16;
bool allein = false;
bool darf = alter >= 18 || (alter >= 16 && allein == false);
Console.WriteLine(darf);`,
      steps: [
        { line: 1, title: "alter", explain: "alter = 16.", memory: "alter=16" },
        { line: 2, title: "allein", explain: "allein = false.", memory: "allein=false" },
        {
          line: 3,
          title: "Ausdruck",
          explain:
            "alter>=18 ist false. Rechts: alter>=16 true und allein==false true → true. false || true → true.",
          memory: "darf=true"
        },
        { line: 4, title: "Ausgabe", explain: "True wird ausgegeben (True/true je nach Kontext).", memory: "Ausgabe true" }
      ]
    },
    pitfalls: [
      "`=` statt `==` in Bedingungen",
      "Operatorrang ohne Klammern falsch lesen",
      "`||` und `&&` vertauschen"
    ],
    flashcards: [
      { front: "Unterschied = und ==?", back: "= speichert, == vergleicht." },
      { front: "Was ist 17 % 5?", back: "2" },
      { front: "Was macht &&?", back: "Beide Seiten müssen true sein." }
    ],
    exercises: [
      {
        id: "cs-op-mc-1",
        kind: "multipleChoice",
        prompt: "Welcher Ausdruck ist true?",
        options: ["5 == 2", "5 != 2", "5 < 2", "5 = 2"],
        correctIndex: 1,
        explanation: "5 ist ungleich 2.",
        xp: 10
      },
      {
        id: "cs-op-trace-1",
        kind: "traceState",
        prompt: "Boolsche Logik.",
        code: `bool a = true;
bool b = false;
bool c = a && b;
bool d = a || b;`,
        question: "Werte von c und d?",
        options: ["c=true d=true", "c=false d=true", "c=true d=false", "c=false d=false"],
        correctIndex: 1,
        explanation: "true&&false=false, true||false=true.",
        xp: 20
      },
      {
        id: "cs-op-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `Console.WriteLine(10 % 4);
Console.WriteLine(10 / 4);`,
        options: ["2 und 2", "2.5 und 2", "1 und 2", "2 und 2.5"],
        correctIndex: 0,
        explanation: "Rest 2, Integer-Division 2.",
        xp: 15
      },
      {
        id: "cs-op-bug-1",
        kind: "spotBug",
        prompt: "Welcher Vergleich ist falsch geschrieben?",
        code: `int x = 5;
if (x = 5)
{
    Console.WriteLine("ja");
}`,
        buggyLine: 2,
        fix: "if (x == 5)",
        explanation: "`=` ist Zuweisung, in if brauchst du `==` (bzw. bool-Ausdruck).",
        xp: 25
      }
    ]
  },
  {
    id: "cs-zero-branches",
    order: 4,
    title: "Entscheidungen: if/else wirklich können",
    level: "Starter",
    path: ["von-null", "klassenarbeit"],
    examFocus: "Klassenarbeit · Verzweigungen",
    whyItMatters:
      "Klassenarbeiten lieben Notenstufen, Rabatte, Alterschecks. Du musst Zweige sicher bauen und testen.",
    minutes: 30,
    goals: [
      "if / else if / else korrekt schachteln",
      "Blöcke mit { } bewusst setzen",
      "Verschachtelte Bedingungen lesen",
      "Truth-Tables mental durchspielen"
    ],
    theory: [
      "`if (bedingung) { ... }` führt den Block nur aus, wenn die Bedingung true ist.",
      "`else if` prüft weitere Fälle, `else` fängt den Rest. Reihenfolge der Checks ist entscheidend.",
      "Ohne Klammern gehört nur die nächste Anweisung zum if — in Klassenarbeiten immer Klammern nutzen.",
      "Verschachtelung: ein if im else-Zweig. Lesbarkeit schlägt Cleverness."
    ],
    remember: [
      "Erste passende else-if-Bedingung gewinnt.",
      "Immer { } setzen.",
      "Grenzfälle testen: genau 18, genau 50, 0, negativ."
    ],
    codeExamples: [
      {
        title: "Notenstufen",
        code: `int punkte = 72;
if (punkte >= 90) Console.WriteLine("1");
else if (punkte >= 80) Console.WriteLine("2");
else if (punkte >= 70) Console.WriteLine("3");
else if (punkte >= 60) Console.WriteLine("4");
else Console.WriteLine("5/6");`,
        note: "Bei 72 greift der erste passende Zweig: >=70 → 3."
      }
    ],
    walkthrough: {
      title: "Welcher Zweig?",
      code: `int alter = 18;
if (alter < 16) Console.WriteLine("Kind");
else if (alter < 18) Console.WriteLine("Jugendlich");
else Console.WriteLine("Erwachsener");`,
      steps: [
        { line: 1, title: "alter=18", explain: "Startwert setzen.", memory: "alter=18" },
        {
          line: 2,
          title: "Check <16",
          explain: "18 < 16 ist false → Zweig wird übersprungen.",
          memory: "weiter"
        },
        {
          line: 3,
          title: "Check <18",
          explain: "18 < 18 ist false → weiter zum else.",
          memory: "weiter"
        },
        {
          line: 4,
          title: "else",
          explain: "Ausgabe Erwachsener.",
          memory: "Ausgabe: Erwachsener"
        }
      ]
    },
    pitfalls: [
      "Überlappende Bedingungen in falscher Reihenfolge",
      "Semikolon direkt nach if (...);",
      "else dem falschen if zuordnen"
    ],
    flashcards: [
      {
        front: "Wann läuft else?",
        back: "Wenn keine vorherige if/else-if-Bedingung true war."
      },
      {
        front: "Warum Reihenfolge bei else if wichtig ist?",
        back: "Der erste Treffer gewinnt; spätere Zweige werden nicht geprüft."
      }
    ],
    exercises: [
      {
        id: "cs-if-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe bei punkte=80?",
        code: `int punkte = 80;
if (punkte >= 90) Console.WriteLine("1");
else if (punkte >= 80) Console.WriteLine("2");
else Console.WriteLine("3");`,
        options: ["1", "2", "3", "2 und 3"],
        correctIndex: 1,
        explanation: ">=90 false, >=80 true → 2.",
        xp: 15
      },
      {
        id: "cs-if-trace-1",
        kind: "traceState",
        prompt: "Grenzfall.",
        code: `int a = 18;
string msg;
if (a >= 18) msg = "ok";
else msg = "nein";`,
        question: "Wert von msg?",
        options: ["ok", "nein", "leer", "Compilerfehler"],
        correctIndex: 0,
        explanation: ">= 18 schließt 18 ein.",
        xp: 15
      },
      {
        id: "cs-if-bug-1",
        kind: "spotBug",
        prompt: "Klassischer Anfängerfehler.",
        code: `int x = 10;
if (x > 5);
{
    Console.WriteLine("groß");
}`,
        buggyLine: 2,
        fix: "Semikolon nach if entfernen.",
        explanation: "Das Semikolon beendet das if; der Block läuft immer.",
        xp: 25
      },
      {
        id: "cs-if-order-1",
        kind: "orderCode",
        prompt: "Ordne eine Rabattlogik.",
        lines: [
          "if (betrag >= 100)",
          "    Console.WriteLine(\"20%\");",
          "else if (betrag >= 50)",
          "    Console.WriteLine(\"10%\");",
          "else",
          "    Console.WriteLine(\"0%\");"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        explanation: "Höhere Schwellen zuerst prüfen.",
        xp: 20
      }
    ]
  },
  {
    id: "cs-zero-loops",
    order: 5,
    title: "Schleifen im Kopf ausführen",
    level: "Azubi",
    path: ["von-null", "klassenarbeit"],
    examFocus: "Klassenarbeit · for/while nachvollziehen",
    whyItMatters:
      "In Klassenarbeiten musst du oft sagen, was eine Schleife ausgibt oder wie oft sie läuft. Dafür brauchst du Tracing.",
    minutes: 35,
    goals: [
      "for-Kopf (Start; Bedingung; Update) erklären",
      "Schleifendurchläufe abzählen",
      "while vs for wählen",
      "Endlosschleifen erkennen"
    ],
    theory: [
      "`for (int i = 0; i < 3; i++)` bedeutet: starte bei 0, solange i<3, nach jedem Durchlauf i++.",
      "Tabelle zeichnen: Durchlauf | i vorher | Körper | i nachher. Das ist die beste Lerntechnik.",
      "`while` prüft vor dem Eintritt. Wenn die Bedingung nie false wird → Endlosschleife.",
      "`break` bricht ab, `continue` springt zum nächsten Durchlauf."
    ],
    remember: [
      "i < n bei Start 0 → n Durchläufe.",
      "i <= n bei Start 1 → n Durchläufe.",
      "Update nicht vergessen."
    ],
    codeExamples: [
      {
        title: "Summe mit Trace-Mentalität",
        code: `int summe = 0;
for (int i = 1; i <= 4; i++)
{
    summe += i; // 1, dann 3, dann 6, dann 10
}
Console.WriteLine(summe); // 10`,
        note: "Nach jedem += kurz den neuen summe-Wert flüstern."
      }
    ],
    walkthrough: {
      title: "for-Schleife tracen",
      code: `for (int i = 0; i < 3; i++)
{
    Console.Write(i);
}`,
      steps: [
        {
          line: 1,
          title: "Init i=0",
          explain: "Schleife startet, Bedingung 0<3 true.",
          memory: "i=0"
        },
        {
          line: 3,
          title: "Körper",
          explain: "Gibt 0 aus, danach i++ → 1.",
          memory: "Ausgabe:0 · i=1"
        },
        {
          line: 3,
          title: "2. Durchlauf",
          explain: "1<3 true, gibt 1 aus, i→2.",
          memory: "Ausgabe:01 · i=2"
        },
        {
          line: 3,
          title: "3. Durchlauf",
          explain: "2<3 true, gibt 2 aus, i→3.",
          memory: "Ausgabe:012 · i=3"
        },
        {
          line: 1,
          title: "Ende",
          explain: "3<3 false → Schleife endet.",
          memory: "fertig"
        }
      ]
    },
    pitfalls: [
      "Off-by-one (ein Durchlauf zu viel/wenig)",
      "i++ vergessen",
      "Bedingung mit = statt Vergleich"
    ],
    flashcards: [
      {
        front: "Wie oft läuft for (i=0; i<5; i++)?",
        back: "5-mal (0,1,2,3,4)."
      },
      {
        front: "Unterschied while / do-while?",
        back: "do-while läuft mindestens einmal."
      }
    ],
    exercises: [
      {
        id: "cs-loop-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `for (int i = 1; i <= 3; i++)
{
    Console.Write(i);
}`,
        options: ["012", "123", "1234", "12"],
        correctIndex: 1,
        explanation: "i=1..3.",
        xp: 15
      },
      {
        id: "cs-loop-trace-1",
        kind: "traceState",
        prompt: "Zähle Durchläufe.",
        code: `int c = 0;
for (int i = 0; i <= 4; i++) c++;`,
        question: "Wert von c am Ende?",
        options: ["4", "5", "6", "0"],
        correctIndex: 1,
        explanation: "i=0,1,2,3,4 → 5 Durchläufe.",
        xp: 20
      },
      {
        id: "cs-loop-mc-1",
        kind: "multipleChoice",
        prompt: "Was verursacht oft eine Endlosschleife?",
        options: [
          "i++ im for-Kopf",
          "Vergessene Änderung der Schleifenvariablen in while",
          "WriteLine",
          "break"
        ],
        correctIndex: 1,
        explanation: "Wenn die Bedingung nie false wird, läuft while ewig.",
        xp: 15
      },
      {
        id: "cs-loop-fill-1",
        kind: "fillBlank",
        prompt: "for-Kopf vervollständigen (0..n-1).",
        code: `for (int i = 0; i ____ n; i++)`,
        blanks: [{ id: "b1", answer: "<" }],
        explanation: "i < n ist das Standardmuster für n Durchläufe ab 0.",
        xp: 15
      }
    ]
  },
  {
    id: "cs-zero-arrays",
    order: 6,
    title: "Arrays von Null",
    level: "Azubi",
    path: ["von-null", "klassenarbeit"],
    examFocus: "Klassenarbeit · Arrays & Index",
    whyItMatters:
      "Arrays sind die erste Datenstruktur in der Schule. Indexfehler und Length-Verwechslung sind Klassiker.",
    minutes: 30,
    goals: [
      "Index ab 0 verstehen",
      "Length vs letzter Index",
      "Array mit for/foreach durchlaufen",
      "Summe/Max im Array berechnen"
    ],
    theory: [
      "`int[] zahlen = new int[3];` legt 3 Plätze an: Index 0,1,2.",
      "Letzter Index ist immer `Length - 1`. Length selbst ist kein gültiger Index.",
      "Initializer: `int[] n = { 4, 8, 1 };`",
      "foreach liest Werte, for mit Index brauchst du zum Schreiben/Tauschen."
    ],
    remember: [
      "Index startet bei 0.",
      "Length 5 → Indizes 0..4.",
      "IndexOutOfRange = oft off-by-one."
    ],
    codeExamples: [
      {
        title: "Summe & Max",
        code: `int[] w = { 3, 9, 2 };
int summe = 0;
int max = w[0];
for (int i = 0; i < w.Length; i++)
{
    summe += w[i];
    if (w[i] > max) max = w[i];
}`,
        note: "max mit w[0] starten, nicht mit 0."
      }
    ],
    walkthrough: {
      title: "Index-Tour",
      code: `int[] a = { 10, 20, 30 };
Console.WriteLine(a[0]);
Console.WriteLine(a.Length);
Console.WriteLine(a[a.Length - 1]);`,
      steps: [
        { line: 1, title: "Array", explain: "Drei Werte, Indizes 0..2.", memory: "[10,20,30]" },
        { line: 2, title: "Erstes Element", explain: "a[0] → 10.", memory: "Ausgabe 10" },
        { line: 3, title: "Länge", explain: "Length ist 3.", memory: "Ausgabe 3" },
        {
          line: 4,
          title: "Letztes Element",
          explain: "a[3-1] = a[2] → 30.",
          memory: "Ausgabe 30"
        }
      ]
    },
    pitfalls: [
      "a[a.Length] statt a[a.Length-1]",
      "Schleife bis <= Length",
      "Leeres Array und max=a[0] ohne Check"
    ],
    flashcards: [
      { front: "Erster Index?", back: "0" },
      { front: "Letzter Index bei Length 7?", back: "6" },
      { front: "Was ist Length?", back: "Anzahl der Elemente." }
    ],
    exercises: [
      {
        id: "cs-arr-mc-1",
        kind: "multipleChoice",
        prompt: "int[] a = new int[4]; gültige Indizes?",
        options: ["1..4", "0..4", "0..3", "0..5"],
        correctIndex: 2,
        explanation: "4 Elemente → 0,1,2,3.",
        xp: 15
      },
      {
        id: "cs-arr-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `int[] a = { 2, 4, 6 };
Console.WriteLine(a[1]);`,
        options: ["2", "4", "6", "1"],
        correctIndex: 1,
        explanation: "Index 1 ist das zweite Element.",
        xp: 10
      },
      {
        id: "cs-arr-trace-1",
        kind: "traceState",
        prompt: "Nach der Schleife.",
        code: `int[] a = { 1, 2, 3 };
int s = 0;
for (int i = 0; i < a.Length; i++) s += a[i];`,
        question: "Wert von s?",
        options: ["3", "6", "5", "0"],
        correctIndex: 1,
        explanation: "1+2+3=6.",
        xp: 15
      },
      {
        id: "cs-arr-bug-1",
        kind: "spotBug",
        prompt: "Finde den Index-Bug.",
        code: `int[] a = { 1, 2, 3 };
for (int i = 0; i <= a.Length; i++)
{
    Console.WriteLine(a[i]);
}`,
        buggyLine: 2,
        fix: "i < a.Length",
        explanation: "i darf nicht bis Length inklusive laufen.",
        xp: 25
      }
    ]
  },
  {
    id: "cs-zero-methods-school",
    order: 7,
    title: "Methoden verstehen (Schule)",
    level: "Azubi",
    path: ["von-null", "klassenarbeit"],
    examFocus: "Klassenarbeit · Methodenaufruf & return",
    whyItMatters:
      "Methoden zerlegen Probleme. In der KA musst du Signaturen lesen, Parameter füllen und Rückgaben nutzen.",
    minutes: 30,
    goals: [
      "Aufruf vs. Definition unterscheiden",
      "Parameter als Eingabe verstehen",
      "return als Ergebnis zurückgeben",
      "void-Methoden einordnen"
    ],
    theory: [
      "Definition beschreibt die Methode. Aufruf führt sie aus: `int y = Doppelt(4);`",
      "Parameter sind Platzhalter. Argumente sind die konkreten Werte beim Aufruf.",
      "`return` beendet die Methode und liefert den Wert an den Aufrufer.",
      "`void` bedeutet: Seiteneffekt (z. B. ausgeben), kein nutzbares Ergebnis."
    ],
    remember: [
      "Name(argumente) = Aufruf.",
      "return wert; braucht passenden Rückgabetyp.",
      "Nach return kommt in dem Zweig nichts mehr."
    ],
    codeExamples: [
      {
        title: "Aufrufkette",
        code: `static int Add(int a, int b)
{
    return a + b;
}

int ergebnis = Add(2, 3); // 5
Console.WriteLine(Add(ergebnis, 1)); // 6`,
        note: "Das Ergebnis einer Methode kann sofort weiterverwendet werden."
      }
    ],
    walkthrough: {
      title: "Was passiert beim Aufruf?",
      code: `static int Quadrat(int n)
{
    return n * n;
}
int x = Quadrat(5);
Console.WriteLine(x);`,
      steps: [
        {
          line: 5,
          title: "Aufruf",
          explain: "Springe in Quadrat mit n=5.",
          memory: "n=5"
        },
        {
          line: 3,
          title: "return",
          explain: "5*5=25 wird zurückgegeben.",
          memory: "return 25"
        },
        {
          line: 5,
          title: "Speichern",
          explain: "x erhält 25.",
          memory: "x=25"
        },
        {
          line: 6,
          title: "Ausgabe",
          explain: "WriteLine gibt 25 aus.",
          memory: "Ausgabe 25"
        }
      ]
    },
    pitfalls: [
      "Methode definieren aber nie aufrufen",
      "Rückgabewert ignorieren, obwohl gebraucht",
      "Falsche Argumentanzahl/-typen"
    ],
    flashcards: [
      { front: "Parameter vs Argument?", back: "Parameter in der Definition, Argumente beim Aufruf." },
      { front: "Was macht return?", back: "Beendet die Methode und liefert einen Wert." }
    ],
    exercises: [
      {
        id: "cs-meths-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `static int F(int n) => n + 1;
Console.WriteLine(F(F(2)));`,
        options: ["2", "3", "4", "1"],
        correctIndex: 2,
        explanation: "F(2)=3, F(3)=4.",
        xp: 20
      },
      {
        id: "cs-meths-trace-1",
        kind: "traceState",
        prompt: "Nach dem Aufruf.",
        code: `static int Max(int a, int b)
{
    if (a > b) return a;
    return b;
}
int m = Max(4, 9);`,
        question: "Wert von m?",
        options: ["4", "9", "13", "0"],
        correctIndex: 1,
        explanation: "9 ist größer.",
        xp: 15
      },
      {
        id: "cs-meths-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Signatur passt zu 'Mittelwert zweier ints'?",
        options: [
          "void Mittel(int a, int b)",
          "double Mittel(int a, int b)",
          "int Mittel()",
          "string Mittel(double a)"
        ],
        correctIndex: 1,
        explanation: "Zwei Eingaben, typischerweise double als Ergebnis.",
        xp: 15
      },
      {
        id: "cs-meths-fill-1",
        kind: "fillBlank",
        prompt: "Rückgabe setzen.",
        code: `static int Doppelt(int x)
{
    ______ x * 2;
}`,
        blanks: [{ id: "b1", answer: "return" }],
        explanation: "Ohne return fehlt das Ergebnis.",
        xp: 10
      }
    ]
  },
  {
    id: "cs-ka-training",
    order: 8,
    title: "Klassenarbeit Intensiv: Mixed Set",
    level: "Prüfungsnah",
    path: ["klassenarbeit"],
    examFocus: "Klassenarbeit Simulation",
    whyItMatters:
      "Hier trainierst du gemischt wie in einer echten KA: lesen, tracen, Fehler finden, kleine Algorithmen.",
    minutes: 40,
    goals: [
      "Gemischte Aufgaben unter Zeitdruck üben",
      "Typische KA-Muster erkennen",
      "Eigene Schwachstellen finden"
    ],
    theory: [
      "KA-Strategie: 1) Aufgabe lesen und Beispiele abklopfen 2) Randfälle 3) Code/Antwort schreiben 4) mental tracen.",
      "Wenn du steckst: auf Deutsch aufschreiben, was passieren soll — dann in C# übersetzen.",
      "Punkte holen mit Teillösungen: korrekte Schleife ohne Perfektion ist besser als leere Seite."
    ],
    remember: [
      "Erst verstehen, dann tippen/schreiben.",
      "Grenzwerte testen.",
      "Ausgabe und Variablenzustand trennen."
    ],
    codeExamples: [
      {
        title: "Mini-KA Aufgabe",
        code: `// Aufgabe: Zähle, wie viele Zahlen im Array > grenze sind.
static int ZaehleGroesser(int[] werte, int grenze)
{
    int c = 0;
    foreach (int w in werte)
    {
        if (w > grenze) c++;
    }
    return c;
}`,
        note: "Erkläre in einem Satz, was die Methode macht — das sichert Verständnis."
      }
    ],
    walkthrough: {
      title: "ZaehleGroesser tracen",
      code: `int[] w = { 1, 7, 3, 9 };
int c = 0;
// grenze = 5
// prüfe 1,7,3,9 → c wird 2`,
      steps: [
        { line: 1, title: "Daten", explain: "Array mit 4 Werten.", memory: "[1,7,3,9]" },
        { line: 2, title: "Zähler", explain: "c startet bei 0.", memory: "c=0" },
        {
          line: 4,
          title: "Filter",
          explain: "Nur 7 und 9 sind >5 → c=2.",
          memory: "c=2"
        }
      ]
    },
    pitfalls: [
      "Aufgabe nur überfliegen",
      "Kein Trace bei fertigem Code",
      "Bei Teilfehlern alles löschen"
    ],
    flashcards: [
      {
        front: "KA-Strategie in 4 Schritten?",
        back: "Lesen → Randfälle → Lösung → Trace."
      },
      {
        front: "Was tun bei Blockade?",
        back: "Auf Deutsch beschreiben, dann übersetzen."
      }
    ],
    exercises: [
      {
        id: "cs-ka-pred-1",
        kind: "predictOutput",
        prompt: "Was wird ausgegeben?",
        code: `int[] a = { 2, 5, 5, 8 };
int c = 0;
foreach (int x in a) if (x == 5) c++;
Console.WriteLine(c);`,
        options: ["1", "2", "3", "5"],
        correctIndex: 1,
        explanation: "Zwei Fünfen.",
        xp: 15
      },
      {
        id: "cs-ka-trace-1",
        kind: "traceState",
        prompt: "Nach allen Durchläufen.",
        code: `int s = 0;
for (int i = 1; i <= 5; i++)
{
    if (i % 2 == 0) s += i;
}`,
        question: "Wert von s?",
        options: ["6", "9", "15", "4"],
        correctIndex: 0,
        explanation: "Gerade: 2+4=6.",
        xp: 20
      },
      {
        id: "cs-ka-bug-1",
        kind: "spotBug",
        prompt: "Warum ist das Ergebnis falsch?",
        code: `int[] a = { -1, -4, -2 };
int max = 0;
for (int i = 0; i < a.Length; i++)
{
    if (a[i] > max) max = a[i];
}`,
        buggyLine: 2,
        fix: "int max = a[0];",
        explanation: "Bei nur negativen Zahlen bleibt max fälschlich 0.",
        xp: 30
      },
      {
        id: "cs-ka-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Methode-Beschreibung passt zu ZaehleGroesser?",
        options: [
          "Sortiert das Array",
          "Zählt Elemente streng größer als eine Grenze",
          "Berechnet den Durchschnitt",
          "Löscht Elemente"
        ],
        correctIndex: 1,
        explanation: "Der Name und die if-Bedingung sagen genau das.",
        xp: 15
      },
      {
        id: "cs-ka-order-1",
        kind: "orderCode",
        prompt: "Ordne die KA-Checkliste.",
        lines: [
          "Beispiele der Aufgabe durchspielen",
          "Randfälle wählen (leer, 0, negativ, Grenze)",
          "Lösung schreiben",
          "Mental tracen / gegen Beispiele prüfen"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Verstehen → Randfälle → Code → Kontrolle.",
        xp: 20
      }
    ],
    badgeHint: "csharp-algo"
  }
];
