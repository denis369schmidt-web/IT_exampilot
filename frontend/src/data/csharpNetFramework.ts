import type { CsharpModule } from "./csharpTypes";

/**
 * .NET Framework – erklärt wie vom Lehrer, geschärft wie vom Profi.
 * Ziel: Du verstehst nicht nur WAS, sondern WARUM.
 */
export const csharpNetFramework: CsharpModule[] = [
  {
    id: "netfx-vs-project",
    order: 1,
    title: ".NET Framework: Visual Studio & Projekt verstehen",
    level: "Starter",
    path: ["netfx", "klassenarbeit", "von-null"],
    examFocus: "1. Klassenarbeit · .NET Framework",
    whyItMatters:
      "Bevor Code zählt, musst du die Werkstatt kennen. In der KA verlierst du sonst Minuten nur beim Anlegen/Öffnen des Projekts.",
    minutes: 30,
    analogy:
      "Stell dir Visual Studio als Werkstatt vor: Die Solution ist das Gebäude, das Projekt ist ein Raum, Program.cs ist die Werkbank, auf der du arbeitest.",
    goals: [
      "Solution (.sln) und Projekt (.csproj) sicher unterscheiden",
      "Die richtige Vorlage „(.NET Framework)“ wählen",
      "Program.cs / Form1.cs finden",
      "Build vs Start (F5) erklären"
    ],
    teacherTalk: [
      "Hallo — wir starten ganz langsam. Du musst nicht alles auf einmal können. Heute nur: Wo liegt mein Code, und wie starte ich ihn?",
      "Wenn du in Visual Studio „Neues Projekt“ wählst, suchst du bewusst den Zusatz (.NET Framework). Das ist wie die richtige Schulbuch-Ausgabe — nicht die moderne Parallel-Ausgabe.",
      "Solution = Mappe. Projekt = Heft in der Mappe. Datei Program.cs = eine Seite mit dem Startcode. Wenn jemand sagt „öffne dein Projekt“, meint er meist den Ordner mit dem Code, nicht die .sln allein.",
      "F5 heißt: Bitte bauen UND ausführen. Wenn es kracht, schaust du zuerst in die Fehlerliste — Zeile und Datei stehen dort. Das ist dein Freund, kein Feind."
    ],
    proTips: [
      "Profi-Angewohnheit: Projektmappe immer so benennen, dass du in 3 Monaten noch weißt, worum es ging (KA1_Console, KA1_WinForms).",
      "Ein Projekt, ein Startpunkt. Wenn mehrere Projekte in einer Solution sind, prüfe „Startprojekt“ (rechtsklick → Als Startprojekt festlegen).",
      "Bevor du wild änderst: einmal Strg+Umschalt+B (nur Build). So siehst du Compilerfehler ohne das Konsolenfenster-Chaos."
    ],
    checkUnderstanding: [
      "Was ist der Unterschied zwischen Solution und Projekt?",
      "Woran erkennst du die .NET-Framework-Vorlage?",
      "Was passiert genau, wenn du F5 drückst?"
    ],
    theory: [
      "Eine Solution (`.sln`) ist der äußere Rahmen. Darin können ein oder mehrere Projekte liegen.",
      "Ein Projekt enthält Quellcode und Einstellungen — unter .NET Framework oft TargetFrameworkVersion 4.7.2/4.8.",
      "Schul-Vorlagen: „Konsolen-App (.NET Framework)“ und „Windows Forms-App (.NET Framework)“.",
      "F5 = Build + Start mit Debugger. Fehlerliste zeigt Datei, Zeile, Meldung.",
      "Console gibt Text in ein schwarzes Fenster aus; WinForms öffnet ein Formular-Fenster."
    ],
    remember: [
      "Framework-Vorlage = oft „(.NET Framework)“ im Namen.",
      "Solution enthält Projekte → Projekt enthält .cs-Dateien.",
      "Erst Fehlerliste lesen, dann raten."
    ],
    codeExamples: [
      {
        title: "Landkarte im Solution Explorer",
        code: `MeineSolution.sln                 ← die Mappe
 └─ MeinProjekt                  ← das Heft
     ├─ Program.cs               ← Start bei Console
     ├─ Form1.cs                 ← Logik bei WinForms
     ├─ Form1.Designer.cs        ← vom Designer erzeugt
     └─ References               ← Bibliotheken (System, ...)`,
        note: "Lehrer: Wenn du eine Datei nicht findest, klappe im Solution Explorer alles auf — oft ist Form1 zugeklappt."
      }
    ],
    walkthrough: {
      title: "Vom Doppelklick bis zur Ausgabe",
      code: `// 1 Visual Studio starten
// 2 Neues Projekt: Konsolen-App (.NET Framework)
// 3 In Main: Console.WriteLine("Hallo");
// 4 F5
// 5 Konsole zeigt: Hallo`,
      steps: [
        {
          line: 1,
          title: "Werkstatt öffnen",
          explain:
            "Lehrer: Ohne geöffnete IDE hast du keinen Compiler zur Hand. Profi: Gleiche IDE wie in der Prüfungsumgebung nutzen, wenn möglich.",
          memory: "IDE bereit"
        },
        {
          line: 2,
          title: "Richtige Vorlage",
          explain:
            "Lehrer: Lies den Vorlagennamen laut. Steht Framework drin? Gut. Profi: Falsches Target kostet später Referenzen/APIs.",
          memory: "Projekt = Console .NET Framework"
        },
        {
          line: 3,
          title: "Erste Anweisung",
          explain:
            "Lehrer: Alles, was beim Start passieren soll, liegt (am Anfang) in Main. Eine Zeile reicht zum Beweis.",
          memory: "WriteLine bereit"
        },
        {
          line: 4,
          title: "Start",
          explain:
            "Lehrer: Jetzt übersetzt der Compiler und startet. Wenn rot in der Fehlerliste: stopp, lesen, fixen.",
          memory: "Build + Run"
        },
        {
          line: 5,
          title: "Beweis",
          explain: "Lehrer: Siehst du „Hallo“, hast du den kompletten Weg verstanden.",
          memory: "Ausgabe ok"
        }
      ]
    },
    pitfalls: [
      "Moderne .NET-Vorlage statt .NET Framework",
      "Falsches Startprojekt",
      "Fehlerliste ignorieren"
    ],
    flashcards: [
      {
        front: "Solution vs Projekt?",
        back: "Solution = Mappe (.sln). Projekt = Heft mit Code (.csproj + .cs)."
      },
      {
        front: "Woran erkenne ich Framework-Vorlagen?",
        back: "Am Zusatz „(.NET Framework)“."
      },
      {
        front: "Was macht F5?",
        back: "Baut und startet mit Debugger."
      }
    ],
    exercises: [
      {
        id: "netfx-vs-mc-1",
        kind: "multipleChoice",
        prompt: "Lehrer fragt: Welche Vorlage passt zur Framework-KA?",
        options: [
          "Nur dateibasierte Top-Level-App",
          "Konsolen-App oder WinForms (.NET Framework)",
          "Nur Blazor",
          "Nur Python"
        ],
        correctIndex: 1,
        explanation:
          "Lehrer: Genau. Profi: Die Vorlage bestimmt Runtime und verfügbare Assemblies.",
        xp: 15
      },
      {
        id: "netfx-vs-mc-2",
        kind: "multipleChoice",
        prompt: "Was ist richtig?",
        options: [
          "Solution und Projekt sind dasselbe",
          "Solution kann Projekte enthalten; Projekte enthalten Code",
          "Projekte enthalten Solutions",
          "Solution ist die .exe"
        ],
        correctIndex: 1,
        explanation: "Mappe → Hefte → Seiten.",
        xp: 15
      },
      {
        id: "netfx-vs-order-1",
        kind: "orderCode",
        prompt: "Ordne den Weg wie in der Stunde.",
        lines: [
          "Visual Studio öffnen",
          "Neues Projekt (.NET Framework) anlegen",
          "Code in Main / Event-Handler schreiben",
          "F5 starten und Ergebnis prüfen"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Werkstatt → Projekt → Code → Test.",
        xp: 20
      },
      {
        id: "netfx-vs-fill-1",
        kind: "fillBlank",
        prompt: "Dateiendung der Solution?",
        code: `MeineApp.____`,
        blanks: [{ id: "b1", answer: "sln" }],
        explanation: ".sln = Solution.",
        xp: 10
      }
    ],
    badgeHint: "csharp-starter"
  },
  {
    id: "netfx-program-main",
    order: 2,
    title: "Klassisches C#-Gerüst: using, namespace, Main",
    level: "Starter",
    path: ["netfx", "klassenarbeit", "von-null"],
    examFocus: "1. Klassenarbeit · Programmstruktur",
    whyItMatters:
      "Unter .NET Framework ist dieses Gerüst Pflicht. Verstehst du jede Klammer, kannst du jede Aufgabe „einhängen“.",
    minutes: 35,
    analogy:
      "Stell dir ein Theaterstück vor: `using` bringt Requisiten auf die Bühne, `namespace` ist das Stück, `class Program` die Bühne, `Main` ist die erste Szene, die der Regisseur (Runtime) startet.",
    goals: [
      "using, namespace, class, Main Zeile für Zeile erklären",
      "Warum Main der Einstieg ist",
      "static und void in eigenen Worten sagen",
      "Ein Minimalprogramm selbst aufbauen"
    ],
    teacherTalk: [
      "Lies mit mir laut: using System — „Ich möchte Werkzeuge aus dem Kasten System benutzen, vor allem Console.“",
      "namespace ist die Adresse deines Codes. class Program ist das Gebäude. Main ist die Haustür, durch die das Programm betritt.",
      "static void Main bedeutet: Die Runtime darf Main starten, ohne vorher `new Program()` zu machen. static = gehört zur Klasse selbst.",
      "void heißt: Main gibt keinen Wert zurück — es *tut* etwas (ausgeben, rechnen), statt ein Ergebnis wie eine Mathefunktion zu liefern.",
      "Wenn in der KA Code „nirgends hingehört“, fehlt meist die Main-Methode oder eine geschweifte Klammer. Zähle deine `{` und `}`."
    ],
    proTips: [
      "Profi: Ein Einstiegspunkt pro App. Zusätzliche Logik → eigene Methoden, die Main aufruft.",
      "Profi: `string[] args` erst nutzen, wenn du Kommandozeile brauchst — für die 1. KA oft ignorierbar, aber stehen lassen.",
      "Profi: Nie `void Main` ohne static — der Compiler sucht genau die static-Signatur als Einstieg."
    ],
    checkUnderstanding: [
      "Warum braucht Main das Wort static?",
      "Was passiert, wenn du Console ohne using System schreibst?",
      "Wo darf ausführbarer Startcode in der Framework-KA stehen?"
    ],
    theory: [
      "`using System;` importiert Namensräume, damit `Console` kurz geschrieben werden kann.",
      "`namespace ... { }` gruppiert Klassen.",
      "`class Program` enthält den Einstieg.",
      "`static void Main(string[] args)` ist der Einstiegspunkt der Anwendung.",
      "Beim Start springt die Runtime in Main und führt Anweisungen der Reihe nach aus."
    ],
    remember: [
      "Framework-KA: immer klassisches Main.",
      "using = Abkürzung für Namensräume.",
      "Main ohne static startet nicht."
    ],
    codeExamples: [
      {
        title: "Das Gerüst — mit Lehrerkommentar",
        code: `using System;                    // Requisiten: Console usw.

namespace Klassenarbeit1         // Adresse / Ordner im Code
{
    class Program                // Bühne
    {
        static void Main(string[] args)  // erste Szene / Haustür
        {
            Console.WriteLine("Hallo .NET Framework");
            Console.Write("Name: ");
            string name = Console.ReadLine();
            Console.WriteLine("Hi " + name);
        }
    }
}`,
        note: "Lehrer: Decke die Kommentare später weg — aber behalte das Bild Bühne/Tür im Kopf."
      }
    ],
    walkthrough: {
      title: "Gerüst von außen nach innen",
      code: `using System;
namespace Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Go");
        }
    }
}`,
      steps: [
        {
          line: 1,
          title: "using",
          explain: "Lehrer: Wir holen Console in Reichweite. Profi: Unbenutzte usings später aufräumen.",
          memory: "Import System"
        },
        {
          line: 2,
          title: "namespace",
          explain: "Lehrer: Das ist die Postadresse deiner Klassen.",
          memory: "Namespace Demo"
        },
        {
          line: 4,
          title: "class",
          explain: "Lehrer: C# steckt Verhalten in Klassen — auch bei Console-Apps.",
          memory: "Klasse Program"
        },
        {
          line: 6,
          title: "Main",
          explain: "Lehrer: Hier klingelt die Runtime. Profi: Halte Main schlank.",
          memory: "Einstieg"
        },
        {
          line: 8,
          title: "Anweisung",
          explain: "Lehrer: Erste sichtbare Tat — Text ausgeben.",
          memory: "Ausgabe Go"
        }
      ]
    },
    pitfalls: [
      "main klein geschrieben",
      "static vergessen",
      "Code außerhalb von Methoden"
    ],
    flashcards: [
      { front: "Was ist Main?", back: "Der Einstiegspunkt — die Haustür des Programms." },
      { front: "Wozu using System?", back: "Damit Console & Co. kurz nutzbar sind." },
      { front: "Warum static?", back: "Damit Main ohne Objekt gestartet werden kann." }
    ],
    exercises: [
      {
        id: "netfx-main-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Signatur ist der klassische Einstieg?",
        options: [
          "void Start()",
          "static void Main(string[] args)",
          "public Program()",
          "async Task Run()"
        ],
        correctIndex: 1,
        explanation: "Lehrer: Auswendig können. Profi: Das erwartet Host/Runtime.",
        xp: 15
      },
      {
        id: "netfx-main-order-1",
        kind: "orderCode",
        prompt: "Ordne das Gerüst.",
        lines: [
          "using System;",
          "namespace Demo",
          "{",
          "    class Program",
          "    {",
          "        static void Main(string[] args)",
          "        {",
          "            Console.WriteLine(\"Hi\");",
          "        }",
          "    }",
          "}"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        explanation: "using → namespace → class → Main → Anweisungen.",
        xp: 25
      },
      {
        id: "netfx-main-fill-1",
        kind: "fillBlank",
        prompt: "Einstiegsmethode.",
        code: `static void ____(string[] args)
{
    Console.WriteLine("Start");
}`,
        blanks: [{ id: "b1", answer: "Main" }],
        explanation: "Main heißt der Einstieg.",
        xp: 15
      },
      {
        id: "netfx-main-bug-1",
        kind: "spotBug",
        prompt: "Lehrer: Warum startet das nicht?",
        code: `class Program
{
    void Main(string[] args)
    {
        Console.WriteLine("Hi");
    }
}`,
        buggyLine: 3,
        fix: "static void Main(string[] args)",
        explanation: "Ohne static kein Einstiegspunkt.",
        xp: 25
      },
      {
        id: "netfx-main-trace-1",
        kind: "traceState",
        prompt: "Was kommt raus?",
        code: `static void Main(string[] args)
{
    int x = 1;
    x = x + 2;
    Console.WriteLine(x);
}`,
        question: "Ausgabe?",
        options: ["1", "2", "3", "x"],
        correctIndex: 2,
        explanation: "1+2=3. Lehrer: Sag den Speicher laut: x war 1, jetzt 3.",
        xp: 15
      }
    ]
  },
  {
    id: "netfx-console-io",
    order: 3,
    title: "Konsole: Ein- und Ausgabe wirklich verstehen",
    level: "Starter",
    path: ["netfx", "klassenarbeit"],
    examFocus: "1. Klassenarbeit · Console",
    whyItMatters:
      "Fast jede erste Aufgabe: etwas fragen, Zahl machen, rechnen, antworten. Wer ReadLine/Parse nicht versteht, scheitert früh.",
    minutes: 35,
    analogy:
      "Die Konsole ist ein Briefwechsel: Write/WriteLine = du schreibst einen Zettel, ReadLine = du liest die Antwort des Users — immer als Text, nie „automatisch als Zahl“.",
    goals: [
      "Write vs WriteLine erklären",
      "ReadLine → string → Parse nachvollziehen",
      "TryParse als Sicherheitsnetz nutzen",
      "Verkettungsfalle \"Summe: \" + a + b vermeiden"
    ],
    teacherTalk: [
      "Ganz wichtig: Der Computer sieht Tastatureingaben zuerst als Text. Auch wenn du 42 tippst, kommt `ReadLine` den Text \"42\".",
      "Parse heißt übersetzen: Aus Text \"42\" wird die Zahl 42. Wenn jemand \"hallo\" tippt, kann Parse nicht übersetzen → Fehler.",
      "TryParse ist höflich: Es fragt „Geht das?“ und antwortet true/false, statt das Programm umzuwerfen.",
      "Schreibe Aufforderungen mit Write (Cursor bleibt in der Zeile). Ergebnisse mit WriteLine.",
      "Merksatz: \"Summe: \" + a + b ist Textbaukasten. \"Summe: \" + (a + b) rechnet zuerst."
    ],
    proTips: [
      "Profi: Für Schule oft Parse ok, wenn die Aufgabe gültige Zahlen garantiert — trotzdem TryParse können.",
      "Profi: Klammern um Rechnungen in Strings setzen: immer `(a + b)`.",
      "Profi: Eingaben trimmen (`eingabe.Trim()`), wenn Leerzeichen stören."
    ],
    checkUnderstanding: [
      "Warum ist ReadLine immer string?",
      "Wann wirft int.Parse eine Exception?",
      "Warum schreibt man (a + b) in die Ausgabe?"
    ],
    theory: [
      "`Console.WriteLine` gibt aus und macht Zeilenumbruch; `Write` nicht.",
      "`Console.ReadLine()` liefert string.",
      "`int.Parse` / `int.TryParse` wandeln Text in Zahlen.",
      "Operator `+` zwischen string und Zahl verkettet, statt zu addieren — außer die Rechnung steht in Klammern."
    ],
    remember: [
      "ReadLine = Text.",
      "Parse übersetzt; TryParse prüft zuerst.",
      "Rechnung in Klammern: (a + b)."
    ],
    codeExamples: [
      {
        title: "Klassiker — Lehrer führt dich durch",
        code: `using System;

namespace Klassenarbeit1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Zahl 1: ");              // Aufforderung
            int a = int.Parse(Console.ReadLine()); // Text → Zahl
            Console.Write("Zahl 2: ");
            int b = int.Parse(Console.ReadLine());
            Console.WriteLine("Summe: " + (a + b)); // erst rechnen!
        }
    }
}`,
        note: "Lehrer: Führe das mit 3 und 4 aus. Erwarte 7 — nicht 34."
      },
      {
        title: "Sicherheitsnetz TryParse",
        code: `Console.Write("Alter: ");
string eingabe = Console.ReadLine();
int alter;
if (int.TryParse(eingabe, out alter))
{
    Console.WriteLine("Alter: " + alter);
}
else
{
    Console.WriteLine("Keine gültige Zahl");
}`,
        note: "Profi: out alter bekommt den Wert nur bei Erfolg."
      }
    ],
    walkthrough: {
      title: "Eingabe bis Summe",
      code: `Console.Write("a: ");
int a = int.Parse(Console.ReadLine());
Console.Write("b: ");
int b = int.Parse(Console.ReadLine());
Console.WriteLine(a + b);`,
      steps: [
        {
          line: 1,
          title: "Fragen",
          explain: "Lehrer: Wir sagen dem Menschen, was wir brauchen.",
          memory: "Prompt a"
        },
        {
          line: 2,
          title: "Lesen + Übersetzen",
          explain: "Lehrer: Text kommt rein, Parse macht die Zahl. Profi: Hier knallt's bei Müll-Input.",
          memory: "a = Zahl"
        },
        {
          line: 3,
          title: "Zweite Frage",
          explain: "Gleicher Dialog für b.",
          memory: "Prompt b"
        },
        {
          line: 4,
          title: "b setzen",
          explain: "Jetzt hast du zwei Zahlen im Speicher.",
          memory: "a,b gesetzt"
        },
        {
          line: 5,
          title: "Antworten",
          explain: "Lehrer: Jetzt rechnen wir und zeigen das Ergebnis.",
          memory: "Ausgabe a+b"
        }
      ]
    },
    pitfalls: [
      "\"Summe: \" + a + b ohne Klammern",
      "Parse auf leere Eingabe",
      "WriteLine für Prompts (unübersichtlich)"
    ],
    flashcards: [
      { front: "Was liefert ReadLine?", back: "Immer einen string." },
      { front: "Parse vs TryParse?", back: "Parse wirft bei Fehler; TryParse gibt false." },
      { front: "Warum (a + b)?", back: "Damit zuerst addiert, dann verkettet wird." }
    ],
    exercises: [
      {
        id: "netfx-io-pred-1",
        kind: "predictOutput",
        prompt: "Lehrer: a=3, b=4 — was erscheint?",
        code: `int a = 3;
int b = 4;
Console.WriteLine("Summe: " + a + b);
Console.WriteLine("Summe: " + (a + b));`,
        options: [
          "Beide Male Summe: 7",
          "Summe: 34 und Summe: 7",
          "Summe: 7 und Summe: 34",
          "Compilerfehler"
        ],
        correctIndex: 1,
        explanation: "Ohne Klammern Bauklötze aus Text; mit Klammern Mathematik.",
        xp: 25
      },
      {
        id: "netfx-io-fill-1",
        kind: "fillBlank",
        prompt: "Eingabe lesen.",
        code: `Console.Write("Name: ");
string name = Console.______();`,
        blanks: [{ id: "b1", answer: "ReadLine" }],
        explanation: "ReadLine liest die Zeile.",
        xp: 10
      },
      {
        id: "netfx-io-mc-1",
        kind: "multipleChoice",
        prompt: "Warum TryParse oft besser?",
        options: [
          "Weil es immer schneller ist",
          "Weil ungültige Eingaben keinen Absturz erzeugen",
          "Weil ReadLine sonst fehlt",
          "Weil Main sonst fehlt"
        ],
        correctIndex: 1,
        explanation: "Robustheit > blinder Parse.",
        xp: 15
      },
      {
        id: "netfx-io-bug-1",
        kind: "spotBug",
        prompt: "Welche Zeile ist die Verkettungsfalle?",
        code: `int a = 2;
int b = 5;
Console.WriteLine("Produkt: " + a * b);
Console.WriteLine("Summe: " + a + b);`,
        buggyLine: 4,
        fix: "Console.WriteLine(\"Summe: \" + (a + b));",
        explanation: "* hat Vorrang (Produkt ok). + verkettet ohne Klammern.",
        xp: 25
      }
    ]
  },
  {
    id: "netfx-winforms-basics",
    order: 4,
    title: "Windows Forms: Fenster, Controls, Klick verstehen",
    level: "Azubi",
    path: ["netfx", "klassenarbeit"],
    examFocus: "1. Klassenarbeit · WinForms",
    whyItMatters:
      "Wenn deine KA WinForms ist, musst du Designer und Code als ein Team sehen: Controls oben, Logik im Click.",
    minutes: 45,
    analogy:
      "Das Formular ist ein Bedienpult. TextBoxen sind Schiebefächer für Text, Buttons sind Klingelknöpfe, Labels sind Anzeigen. Der Click-Handler ist das, was passiert, wenn jemand klingelt.",
    goals: [
      "Form und Controls erklären",
      "Name vs Text unterscheiden",
      "Click-Handler lesen und schreiben",
      "MessageBox gezielt einsetzen"
    ],
    teacherTalk: [
      "Zwei Welten: Designer (du ziehst Controls) und Code (du programmierst Reaktion). Beides gehört zusammen.",
      "`Text` ist das, was der User sieht (Beschriftung). `Name` ist der Variablenname im Code (`btnBerechnen`). Benenne sauber — dein zukünftiges Ich sagt danke.",
      "Doppelklick auf den Button erzeugt `btn_Click(object sender, EventArgs e)`. sender = wer hat geklingelt, e = Extra-Infos zum Event.",
      "`txtEingabe.Text` ist string — genau wie `Console.ReadLine()`. Zahlen brauchst du weiterhin per Parse.",
      "`MessageBox.Show(\"...\")` ist wie ein Lehrer, der kurz die Tafel hochhält: Hinweis, Warnung, Ergebnis."
    ],
    proTips: [
      "Profi: Naming-Konvention btn..., txt..., lbl..., lst... — sofort erkennbar.",
      "Profi: Keine Fachlogik in Form1.Designer.cs — nur in Form1.cs.",
      "Profi: Nach dem Lesen aus TextBoxen sofort validieren, dann rechnen."
    ],
    checkUnderstanding: [
      "Unterschied Name und Text bei einem Button?",
      "Was passiert beim Doppelklick auf einen Button im Designer?",
      "Warum ist TextBox.Text ein string?"
    ],
    theory: [
      "Form = Fenster. Controls = Bedienlemente darauf.",
      "Properties steuern Aussehen/Verhalten; Events steuern Reaktionen.",
      "Click-Handler: `private void btn_Click(object sender, EventArgs e)`.",
      "Datenfluss: Control.Text lesen → verarbeiten → Control.Text/MessageBox schreiben."
    ],
    remember: [
      "Name = Code-Bezeichner, Text = sichtbarer Text.",
      "Click = Klingeln → Handler reagiert.",
      "TextBox.Text ist string."
    ],
    codeExamples: [
      {
        title: "Klick: Name in Liste",
        code: `private void btnAdd_Click(object sender, EventArgs e)
{
    string name = txtName.Text;
    if (name.Trim() == "")
    {
        MessageBox.Show("Bitte Name eingeben");
        return; // Lehrer: Hier ist Schluss, nicht weiterwursten
    }
    lstNames.Items.Add(name);
    txtName.Text = "";
}`,
        note: "Lehrer: Lies → prüfe → tu etwas → räume auf."
      },
      {
        title: "Klick: Summe anzeigen",
        code: `private void btnSumme_Click(object sender, EventArgs e)
{
    int a = int.Parse(txtA.Text);
    int b = int.Parse(txtB.Text);
    lblErgebnis.Text = "Summe: " + (a + b);
}`,
        note: "Profi: Später TryParse statt Parse — gleiche Idee wie in Console."
      }
    ],
    walkthrough: {
      title: "Was passiert beim Klick?",
      code: `// User tippt Zahlen in txtA/txtB
// User klickt btnSumme
private void btnSumme_Click(object sender, EventArgs e)
{
    int a = int.Parse(txtA.Text);
    int b = int.Parse(txtB.Text);
    lblErgebnis.Text = "Summe: " + (a + b);
}`,
      steps: [
        {
          line: 1,
          title: "Daten liegen bereit",
          explain: "Lehrer: Noch passiert nichts — nur Text in den Fächern.",
          memory: "UI-Text vorhanden"
        },
        {
          line: 2,
          title: "Klingeln",
          explain: "Lehrer: Click startet den Handler. Profi: UI-Thread führt das aus.",
          memory: "Handler start"
        },
        {
          line: 5,
          title: "Übersetzen",
          explain: "Lehrer: Aus Text wird Zahl — wie bei Console.",
          memory: "a,b ints"
        },
        {
          line: 7,
          title: "Anzeigen",
          explain: "Lehrer: Label ist die Anzeige am Pult.",
          memory: "lbl gesetzt"
        }
      ]
    },
    pitfalls: [
      "Controls heißen noch button1/textBox1",
      "Parse ohne Prüfung",
      "Code in Designer-Datei"
    ],
    flashcards: [
      {
        front: "Was ist ein Event-Handler?",
        back: "Methode, die auf ein Ereignis (z. B. Click) reagiert."
      },
      { front: "TextBox-Inhalt?", back: "Property Text (string)." },
      { front: "MessageBox.Show?", back: "Zeigt einen Dialog." }
    ],
    exercises: [
      {
        id: "netfx-win-mc-1",
        kind: "multipleChoice",
        prompt: "Typische Click-Signatur?",
        options: [
          "void Click()",
          "private void btn_Click(object sender, EventArgs e)",
          "static void Main()",
          "string TextBox()"
        ],
        correctIndex: 1,
        explanation: "sender + EventArgs ist WinForms-Standard.",
        xp: 15
      },
      {
        id: "netfx-win-fill-1",
        kind: "fillBlank",
        prompt: "Text lesen.",
        code: `string eingabe = txtWert.____;`,
        blanks: [{ id: "b1", answer: "Text" }],
        explanation: "Text = Inhalt.",
        xp: 10
      },
      {
        id: "netfx-win-order-1",
        kind: "orderCode",
        prompt: "Ordne den Datenfluss.",
        lines: [
          "string s = txtA.Text;",
          "int zahl = int.Parse(s);",
          "zahl = zahl * 2;",
          "lblOut.Text = zahl.ToString();"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Lesen → Parsen → Rechnen → Anzeigen.",
        xp: 20
      },
      {
        id: "netfx-win-bug-1",
        kind: "spotBug",
        prompt: "Was stimmt hier nicht?",
        code: `private void btn_Click(object sender, EventArgs e)
{
    int x = int.Parse(txtA.Text);
    lblOut.Text = x;
}`,
        buggyLine: 4,
        fix: "lblOut.Text = x.ToString();",
        explanation: "Text erwartet string.",
        xp: 25
      },
      {
        id: "netfx-win-mc-2",
        kind: "multipleChoice",
        prompt: "Wozu Name-Property?",
        options: [
          "Nur sichtbare Beschriftung",
          "Bezeichner im Code (btnStart)",
          "Nur Farbe",
          "Ersetzt Main"
        ],
        correctIndex: 1,
        explanation: "Text sichtbar, Name im Code.",
        xp: 15
      }
    ],
    badgeHint: "csharp-starter"
  },
  {
    id: "netfx-winforms-logic",
    order: 5,
    title: "WinForms + Logik: prüfen, rechnen, entscheiden",
    level: "Azubi",
    path: ["netfx", "klassenarbeit"],
    examFocus: "1. Klassenarbeit · UI trifft Algorithmus",
    whyItMatters:
      "Punkte gibt’s für Denken hinter dem Button: Validieren, if/else, Schleifen — nicht fürs schöne Formular allein.",
    minutes: 40,
    analogy:
      "Der Button ist nur der Türklingel-Knopf. Die Wohnung dahinter (deine ifs und Schleifen) entscheidet, was wirklich passiert.",
    goals: [
      "Muster UI → Logik → UI anwenden",
      "Validierung vor dem Rechnen",
      "ListBox.Items.Add nutzen",
      "return nach Fehlern bewusst einsetzen"
    ],
    teacherTalk: [
      "Immer dieselbe Choreografie: 1) Werte holen 2) prüfen 3) rechnen/entscheiden 4) anzeigen. Wenn du das kannst, bist du für 80% der KA-Aufgaben gerüstet.",
      "Validierung heißt: Darf ich überhaupt weiterrechnen? Leere TextBox? Keine Zahl? Division durch 0?",
      "`return;` im Handler ist erlaubt und klug: „Ich breche hier ab.“ Du musst nicht alles in verschachtelte else packen.",
      "ListBox ist eine Anzeigetafel für Einträge. `Items.Add` hängt an, `Clear` wischte weg."
    ],
    proTips: [
      "Profi: Frühe returns halten Code flach und lesbar.",
      "Profi: Fehlermeldungen konkret machen („Bitte ganze Zahl“ statt nur „Fehler“).",
      "Profi: Dieselbe Fachmethode (z. B. Summe1BisN) von Console und WinForms wiederverwenden — zeigt echtes Verständnis."
    ],
    checkUnderstanding: [
      "Nenne die 4 Schritte jeder WinForms-Aufgabe.",
      "Wann ist return im Click-Handler sinnvoll?",
      "Was macht Items.Add?"
    ],
    theory: [
      "Datenfluss: lesen → prüfen → verarbeiten → schreiben.",
      "TryParse + return verhindert Abstürze.",
      "if/else im Handler = Fachentscheidung.",
      "ListBox.Items verwaltet Einträge."
    ],
    remember: [
      "UI → Logik → UI.",
      "Erst prüfen, dann rechnen.",
      "Items.Add für ListBox."
    ],
    codeExamples: [
      {
        title: "Bestanden? — mit Lehrerstruktur",
        code: `private void btnBewerten_Click(object sender, EventArgs e)
{
    int punkte;
    if (!int.TryParse(txtPunkte.Text, out punkte))
    {
        MessageBox.Show("Bitte ganze Zahl eingeben");
        return;
    }

    if (punkte >= 50)
        lblStatus.Text = "bestanden";
    else
        lblStatus.Text = "nicht bestanden";
}`,
        note: "Lehrer: Zwei ifs — erst Technik (Parse), dann Fach (Bestanden)."
      }
    ],
    walkthrough: {
      title: "Validieren dann entscheiden",
      code: `int punkte;
if (!int.TryParse(txtPunkte.Text, out punkte))
{
    MessageBox.Show("ungueltig");
    return;
}
if (punkte >= 50) lblStatus.Text = "ok";
else lblStatus.Text = "nein";`,
      steps: [
        {
          line: 2,
          title: "Technik-Check",
          explain: "Lehrer: Ist der Text überhaupt eine Zahl?",
          memory: "TryParse"
        },
        {
          line: 4,
          title: "Abbruch",
          explain: "Lehrer: Wenn nein, klar sagen und stoppen.",
          memory: "return"
        },
        {
          line: 7,
          title: "Fach-Check",
          explain: "Lehrer: Jetzt darfst du fachlich entscheiden.",
          memory: "punkte gültig"
        }
      ]
    },
    pitfalls: [
      "Rechnen vor Validierung",
      "Riesige else-Ketten statt return",
      "ListBox mit Array verwechseln"
    ],
    flashcards: [
      {
        front: "4 Schritte?",
        back: "Lesen → Prüfen → Rechnen/Entscheiden → Anzeigen."
      },
      { front: "Items.Add?", back: "Fügt einen ListBox-Eintrag hinzu." }
    ],
    exercises: [
      {
        id: "netfx-logic-mc-1",
        kind: "multipleChoice",
        prompt: "Wann return im Handler?",
        options: [
          "Immer ganz am Ende zwingend",
          "Nach fehlgeschlagener Validierung",
          "Nur in Main",
          "Nie"
        ],
        correctIndex: 1,
        explanation: "Früh raus bei ungültiger Eingabe.",
        xp: 15
      },
      {
        id: "netfx-logic-trace-1",
        kind: "traceState",
        prompt: "txtPunkte = \"40\"",
        code: `int punkte = int.Parse("40");
string status;
if (punkte >= 50) status = "ok";
else status = "nein";`,
        question: "status?",
        options: ["ok", "nein", "40", "leer"],
        correctIndex: 1,
        explanation: "40 < 50.",
        xp: 15
      },
      {
        id: "netfx-logic-fill-1",
        kind: "fillBlank",
        prompt: "ListBox füllen.",
        code: `lstNamen.Items.____(txtName.Text);`,
        blanks: [{ id: "b1", answer: "Add" }],
        explanation: "Add hängt an.",
        xp: 10
      },
      {
        id: "netfx-logic-order-1",
        kind: "orderCode",
        prompt: "Ordne den Handler.",
        lines: [
          "if (!int.TryParse(txtA.Text, out int a)) { MessageBox.Show(\"?\"); return; }",
          "int ergebnis = a * 2;",
          "lblOut.Text = ergebnis.ToString();"
        ],
        correctOrder: [0, 1, 2],
        explanation: "Validieren → rechnen → anzeigen.",
        xp: 20
      }
    ]
  },
  {
    id: "netfx-ka1-boss",
    order: 6,
    title: "Boss: 1. Klassenarbeit Simulation (.NET Framework)",
    level: "Boss",
    path: ["netfx", "klassenarbeit"],
    examFocus: "1. Klassenarbeit Simulation",
    whyItMatters:
      "Jetzt prüfst du dich selbst: Gerüst, IO, if, Schleifen, WinForms — unter Zeit, mit Abgabe-Checkliste.",
    minutes: 50,
    analogy:
      "Die KA ist ein Parcours: Jede Station (Main, Parse, if, Schleife, Button) kennst du einzeln — jetzt läufst du sie hintereinander.",
    goals: [
      "Console- und WinForms-Muster sicher unterscheiden",
      "Typische Aufgaben end-to-end lösen",
      "Vor Abgabe systematisch prüfen"
    ],
    teacherTalk: [
      "Strategie: Aufgabe laut in eigenen Worten wiederholen. Dann Eingaben/Ausgaben auflisten. Dann ein Zahlenbeispiel. Dann code.",
      "Wenn du steckst: Schreib den Algorithmus auf Deutsch („solange i kleiner gleich n, addiere i zur Summe“). Danach übersetzen.",
      "Vor Abgabe die 4 Checks: Startet es? Grenzwerte? Parse sicher? Klammern bei Summenausgabe?",
      "Du darfst Teilpunkte sichern: lieber eine korrekte Schleife ohne Perfektion als eine leere Datei."
    ],
    proTips: [
      "Profi: Dieselbe Kernfunktion (Summe1BisN) in beiden Welten — Console Main und Button Click.",
      "Profi: Kommentiere nur Warum, nicht Was — in der KA sparsam und klar.",
      "Profi: Nach dem ersten grünen Lauf bewusst einen Fehlerfall testen."
    ],
    checkUnderstanding: [
      "Erkläre Console-Einstieg vs WinForms-Einstieg.",
      "Nenne drei Punktefresser der 1. KA.",
      "Wie testest du vor Abgabe?"
    ],
    theory: [
      "Console: Logik in Main/Methoden. WinForms: Logik in Event-Handlern.",
      "Punktefresser: Parse ohne Check, Integer-Division/Verkettung, Main ohne static, unbenannte Controls.",
      "Abgabe-Checkliste schlägt Panik-Coding."
    ],
    remember: [
      "Erst verstehen, dann tippen.",
      "UI und Logik trennen.",
      "Grenzfälle testen."
    ],
    codeExamples: [
      {
        title: "Console-Parcours",
        code: `using System;

namespace KA1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("n: ");
            int n = int.Parse(Console.ReadLine());
            int summe = 0;
            for (int i = 1; i <= n; i++)
                summe += i;
            Console.WriteLine("Summe: " + summe);
        }
    }
}`,
        note: "Lehrer: Für n=4 musst du im Kopf 10 erwarten."
      },
      {
        title: "WinForms-Parcours",
        code: `private void btnGo_Click(object sender, EventArgs e)
{
    int n;
    if (!int.TryParse(txtN.Text, out n) || n < 1)
    {
        MessageBox.Show("n >= 1 erforderlich");
        return;
    }
    int summe = 0;
    for (int i = 1; i <= n; i++) summe += i;
    lblOut.Text = "Summe: " + summe;
}`,
        note: "Profi: Gleiche Mathematik, bessere Eingabsicherung."
      }
    ],
    walkthrough: {
      title: "KA-Strategie",
      code: `// 1 Aufgabe auf Deutsch
// 2 I/O listen
// 3 Grenzfall wählen
// 4 Code schreiben
// 5 F5 + Trace`,
      steps: [
        {
          line: 1,
          title: "Verstehen",
          explain: "Lehrer: Wenn du es nicht erklären kannst, kannst du es nicht coden.",
          memory: "Ziel klar"
        },
        {
          line: 2,
          title: "I/O",
          explain: "Was kommt rein, was muss raus?",
          memory: "I/O-Liste"
        },
        {
          line: 3,
          title: "Rand",
          explain: "0, 1, Text statt Zahl — vorher überlegen.",
          memory: "Tests"
        },
        {
          line: 4,
          title: "Umsetzen",
          explain: "Gerüst + Logik.",
          memory: "Code"
        },
        {
          line: 5,
          title: "Prüfen",
          explain: "Beispiel + Fehlerfall.",
          memory: "OK/Fix"
        }
      ]
    },
    pitfalls: [
      "Sofort hacken ohne Beispiel",
      "Console und WinForms mischen",
      "Nur Happy Path"
    ],
    flashcards: [
      {
        front: "Console vs WinForms Einstieg?",
        back: "Console: Main. WinForms: Event-Handler."
      },
      {
        front: "3 Punktefresser?",
        back: "Parse ohne Check, Verkettung/Integer-Division, falsches Main/Gerüst."
      }
    ],
    exercises: [
      {
        id: "netfx-boss-mc-1",
        kind: "multipleChoice",
        prompt: "Was erwartet die Framework-KA typischerweise?",
        options: [
          "Top-Level-Statements Pflicht",
          "Klassisches Main- oder WinForms-Event-Muster",
          "Nur ASP.NET",
          "Ohne VS unmöglich zu denken"
        ],
        correctIndex: 1,
        explanation: "Klassische Struktur zählt.",
        xp: 20
      },
      {
        id: "netfx-boss-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `int n = 3;
int summe = 0;
for (int i = 1; i <= n; i++) summe += i;
Console.WriteLine(summe);`,
        options: ["3", "6", "4", "0"],
        correctIndex: 1,
        explanation: "1+2+3=6.",
        xp: 15
      },
      {
        id: "netfx-boss-trace-1",
        kind: "traceState",
        prompt: "Nach dem Stück.",
        code: `string t = "12";
int x;
bool ok = int.TryParse(t, out x);
string msg = ok ? (x * 2).ToString() : "fail";`,
        question: "msg?",
        options: ["12", "24", "fail", "true"],
        correctIndex: 1,
        explanation: "12*2=24.",
        xp: 20
      },
      {
        id: "netfx-boss-order-1",
        kind: "orderCode",
        prompt: "Abgabe-Checkliste ordnen.",
        lines: [
          "Aufgabe in eigenen Worten",
          "Grenzfälle notieren",
          "Code in Main/Handler",
          "F5 + Beispielwerte prüfen"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Verstehen → Rand → Code → Test.",
        xp: 20
      },
      {
        id: "netfx-boss-bug-1",
        kind: "spotBug",
        prompt: "Gerüst-Bug finden.",
        code: `namespace KA1
{
    class Program
    {
        void Main(string[] args)
        {
            Console.WriteLine("KA");
        }
    }
}`,
        buggyLine: 5,
        fix: "static void Main(string[] args)",
        explanation: "Einstieg muss static sein.",
        xp: 25
      }
    ],
    badgeHint: "csharp-algo"
  }
];
