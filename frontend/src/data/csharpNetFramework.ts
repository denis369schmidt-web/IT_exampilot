import type { CsharpModule } from "./csharpTypes";

/**
 * .NET Framework Fokus für die erste Klassenarbeit:
 * Visual Studio, klassische Program/Main-Struktur, Console, WinForms.
 * Keine Top-Level-Statements, kein modernes SDK-only .NET.
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
      "In der Schule startest du fast immer mit Visual Studio und einem .NET-Framework-Projekt. Wer Solution, Projekt und Program.cs verwechselt, verliert Zeit, bevor der erste Code läuft.",
    minutes: 25,
    goals: [
      "Solution (.sln) vs Projekt (.csproj) unterscheiden",
      "Richtige Vorlage wählen: Konsolen-App (.NET Framework) oder Windows Forms (.NET Framework)",
      "Program.cs / Form1.cs im Solution Explorer finden",
      "Build (Kompilieren) vs Start (F5) erklären"
    ],
    theory: [
      "Eine Solution ist der Ordnerrahmen für ein oder mehrere Projekte. Dateiendung: `.sln`.",
      "Ein Projekt enthält deinen Code und Einstellungen (Ziel-Framework, Ausgabetyp). Unter .NET Framework oft `.csproj` mit TargetFrameworkVersion wie v4.7.2 / v4.8.",
      "Wichtige Vorlagen in Visual Studio: „Konsolen-App (.NET Framework)“ und „Windows Forms-App (.NET Framework)“. Nicht die modernen „.NET“-Vorlagen ohne „Framework“ verwechseln, wenn die Schule Framework verlangt.",
      "F5 startet mit Debugger. Strg+Umschalt+B baut nur. Fehlerfenster „Fehlerliste“ zeigt Compilerfehler mit Datei und Zeile.",
      "Ausgabe landet bei Console-Apps im Konsolenfenster, bei WinForms in einem Fenster (Form)."
    ],
    remember: [
      "Framework-Vorlage = oft „(.NET Framework)“ im Namen.",
      "Solution enthält Projekte, Projekt enthält .cs-Dateien.",
      "Erst Fehlerliste lesen, dann raten."
    ],
    codeExamples: [
      {
        title: "Was du im Solution Explorer siehst",
        code: `MeineSolution.sln
 └─ MeinProjekt (Console oder WinForms)
     ├─ Program.cs      // Einstieg bei Console
     ├─ Form1.cs       // Fenster-Logik bei WinForms
     ├─ Form1.Designer.cs
     └─ Properties / References`,
        note: "References zeigen, welche Bibliotheken (Assemblies) eingebunden sind — z. B. System, System.Windows.Forms."
      }
    ],
    walkthrough: {
      title: "Vom Doppelklick bis zur Ausgabe",
      code: `// 1 Visual Studio starten
// 2 Neues Projekt: Konsolen-App (.NET Framework)
// 3 In Main schreiben: Console.WriteLine("Hallo");
// 4 F5 drücken
// 5 Konsole zeigt: Hallo`,
      steps: [
        {
          line: 1,
          title: "IDE öffnen",
          explain: "Visual Studio ist die Werkstatt. Ohne Projekt gibt es nichts zum Starten.",
          memory: "IDE bereit"
        },
        {
          line: 2,
          title: "Framework-Vorlage",
          explain: "Du wählst bewusst .NET Framework, weil die Klassenarbeit das verlangt.",
          memory: "Projekt = Console .NET Framework"
        },
        {
          line: 3,
          title: "Code in Main",
          explain: "Der Einstiegspunkt Main wird ausgeführt, sobald das Programm startet.",
          memory: "Anweisung: WriteLine"
        },
        {
          line: 4,
          title: "Start",
          explain: "Compiler baut, Runtime startet, Main läuft.",
          memory: "Prozess gestartet"
        },
        {
          line: 5,
          title: "Ergebnis",
          explain: "Die Konsole zeigt die Ausgabe — Beweis, dass der Ablauf stimmt.",
          memory: "Ausgabe: Hallo"
        }
      ]
    },
    pitfalls: [
      "Moderne .NET-Vorlage statt .NET Framework gewählt",
      "Falsches Startprojekt in der Solution",
      "Compilerfehler ignorieren und immer wieder F5 hämmern"
    ],
    flashcards: [
      {
        front: "Was ist eine Solution?",
        back: "Der Rahmen (.sln), der ein oder mehrere Projekte zusammenhält."
      },
      {
        front: "Woran erkennst du die Schul-Vorlage?",
        back: "Oft am Zusatz „(.NET Framework)“ im Vorlagennamen."
      },
      {
        front: "Was macht F5?",
        back: "Baut und startet das Programm mit Debugger."
      }
    ],
    exercises: [
      {
        id: "netfx-vs-mc-1",
        kind: "multipleChoice",
        prompt: "Was gehört typischerweise zur .NET-Framework-Klassenarbeit in VS?",
        options: [
          "Nur dateibasierte Top-Level-Apps ohne Projekt",
          "Projektvorlage Konsolen-App oder WinForms (.NET Framework)",
          "Nur Blazor WebAssembly",
          "Nur Python Notebooks"
        ],
        correctIndex: 1,
        explanation: "Schulen starten mit Framework-Console oder WinForms in Visual Studio.",
        xp: 15
      },
      {
        id: "netfx-vs-mc-2",
        kind: "multipleChoice",
        prompt: "Unterschied Solution vs Projekt?",
        options: [
          "Dasselbe",
          "Solution kann mehrere Projekte enthalten; Projekt enthält den Code",
          "Projekt enthält Solutions",
          "Solution ist nur das .exe"
        ],
        correctIndex: 1,
        explanation: "Solution = Container, Projekt = Bau-Einheit mit Code.",
        xp: 15
      },
      {
        id: "netfx-vs-order-1",
        kind: "orderCode",
        prompt: "Ordne den Startweg.",
        lines: [
          "Visual Studio öffnen",
          "Neues Projekt (.NET Framework) anlegen",
          "Code in Main / Event-Handler schreiben",
          "F5 starten und Ergebnis prüfen"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Werkzeug → Projekt → Code → Test.",
        xp: 20
      },
      {
        id: "netfx-vs-fill-1",
        kind: "fillBlank",
        prompt: "Dateiendung der Solution?",
        code: `MeineApp.____`,
        blanks: [{ id: "b1", answer: "sln" }],
        explanation: ".sln = Solution-Datei.",
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
    examFocus: "1. Klassenarbeit · Programmstruktur .NET Framework",
    whyItMatters:
      "Unter .NET Framework schreibst du kein modernes Top-Level-C#. Du brauchst das klassische Gerüst mit namespace, class Program und static void Main.",
    minutes: 30,
    goals: [
      "using, namespace, class, Main Zeile für Zeile erklären",
      "Warum Main der Einstieg ist",
      "string[] args grob einordnen",
      "Eigenes Minimalprogramm aufbauen können"
    ],
    theory: [
      "`using System;` importiert den Namensraum System, damit du `Console` statt `System.Console` schreiben kannst.",
      "`namespace MeinProjekt { ... }` gruppiert deinen Code. In Framework-Vorlagen steht oft ein Projektname als Namespace.",
      "`class Program` ist die Klasse, die den Einstieg enthält. C# ist klassenbasiert — auch Console-Apps leben in Klassen.",
      "`static void Main(string[] args)` ist der Einstiegspunkt. `static` = ohne Objektaufruf startbar. `void` = kein Rückgabewert. `args` = optionale Kommandozeilenargumente.",
      "Alles, was beim Start passieren soll, steht (am Anfang) in Main — später ausgelagert in Methoden/Klassen."
    ],
    remember: [
      "Kein Top-Level in der Framework-KA: immer Main.",
      "using = Abkürzung für Namensräume.",
      "Main ohne static startet nicht als Einstieg."
    ],
    codeExamples: [
      {
        title: "Klassisches Framework-Gerüst",
        code: `using System;

namespace Klassenarbeit1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hallo .NET Framework");
            Console.Write("Name: ");
            string name = Console.ReadLine();
            Console.WriteLine("Hi " + name);
        }
    }
}`,
        note: "Genau so sehen Schulvorlagen unter .NET Framework aus."
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
          explain: "System-Typen wie Console werden kurz ansprechbar.",
          memory: "Import: System"
        },
        {
          line: 2,
          title: "namespace",
          explain: "Organisationsbox für Klassen des Projekts.",
          memory: "Namespace Demo"
        },
        {
          line: 4,
          title: "class Program",
          explain: "Bauplan der Startklasse.",
          memory: "Klasse Program"
        },
        {
          line: 6,
          title: "Main",
          explain: "Runtime sucht Main und startet hier.",
          memory: "Einstieg"
        },
        {
          line: 8,
          title: "Anweisung",
          explain: "Erste sichtbare Aktion: Text ausgeben.",
          memory: "Ausgabe Go"
        }
      ]
    },
    pitfalls: [
      "Main falsch geschrieben (main klein, oder ohne static)",
      "using vergessen und dann Console nicht gefunden",
      "Code außerhalb von Main/Methoden „frei“ hingeschrieben (Framework-Stil)"
    ],
    flashcards: [
      {
        front: "Was ist Main?",
        back: "Der Einstiegspunkt des Programms."
      },
      {
        front: "Wozu using System?",
        back: "Damit Klassen aus System (z. B. Console) kurz nutzbar sind."
      },
      {
        front: "Warum static bei Main?",
        back: "Damit Main ohne Objektinstanz gestartet werden kann."
      }
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
        explanation: "static void Main(string[] args) ist der Standard-Einstieg.",
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
        prompt: "Einstiegsmethode vervollständigen.",
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
        prompt: "Warum startet das nicht als Einstieg?",
        code: `class Program
{
    void Main(string[] args)
    {
        Console.WriteLine("Hi");
    }
}`,
        buggyLine: 3,
        fix: "static void Main(string[] args)",
        explanation: "Ohne static ist Main kein gültiger Einstiegspunkt.",
        xp: 25
      },
      {
        id: "netfx-main-trace-1",
        kind: "traceState",
        prompt: "Ablauf verstehen.",
        code: `static void Main(string[] args)
{
    int x = 1;
    x = x + 2;
    Console.WriteLine(x);
}`,
        question: "Was wird ausgegeben?",
        options: ["1", "2", "3", "x"],
        correctIndex: 2,
        explanation: "1+2=3 wird ausgegeben.",
        xp: 15
      }
    ]
  },
  {
    id: "netfx-console-io",
    order: 3,
    title: "Konsole unter .NET Framework: Ein- und Ausgabe",
    level: "Starter",
    path: ["netfx", "klassenarbeit"],
    examFocus: "1. Klassenarbeit · Console",
    whyItMatters:
      "Viele erste Aufgaben sind reine Console-Apps: Eingabe lesen, rechnen, ausgeben. ReadLine liefert string — Parsen ist Pflicht.",
    minutes: 30,
    goals: [
      "Write vs WriteLine sicher nutzen",
      "ReadLine → string → Parse nach int/double",
      "int.TryParse in Framework-Projekten einsetzen",
      "Einfache Dialoge in der Konsole bauen"
    ],
    theory: [
      "`Console.WriteLine(text)` gibt aus und springt in die nächste Zeile. `Write` bleibt in der Zeile — gut für Eingabeaufforderungen.",
      "`Console.ReadLine()` liest eine Zeile als `string` (kann null sein). In Schulcode oft direkt in `string eingabe = Console.ReadLine();`.",
      "Zahlen brauchst du per `int.Parse(eingabe)` oder sicherer `int.TryParse(eingabe, out int zahl)`.",
      "Verketten: `\"Summe: \" + summe` oder ab C# 6 auch `$\"Summe: {summe}\"` — je nach Compiler/Sprachversion der Schule. Framework 4.x mit VS unterstützt Interpolation ab C# 6."
    ],
    remember: [
      "ReadLine = immer Text zuerst.",
      "Parse kann knallen — TryParse ist robuster.",
      "Aufforderung mit Write, Ergebnis mit WriteLine."
    ],
    codeExamples: [
      {
        title: "Klassische Eingabe/Verarbeitung",
        code: `using System;

namespace Klassenarbeit1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Zahl 1: ");
            int a = int.Parse(Console.ReadLine());
            Console.Write("Zahl 2: ");
            int b = int.Parse(Console.ReadLine());
            Console.WriteLine("Summe: " + (a + b));
        }
    }
}`,
        note: "Sehr typische erste KA-Aufgabe."
      },
      {
        title: "Sicherer mit TryParse",
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
        note: "Zeigt Verständnis und Robustheit — Pluspunkte."
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
        { line: 1, title: "Prompt", explain: "User sieht die Aufforderung.", memory: "Warte auf Eingabe" },
        { line: 2, title: "Lesen+Parsen", explain: "Text wird zu int a.", memory: "a gesetzt" },
        { line: 3, title: "Prompt 2", explain: "Zweite Aufforderung.", memory: "warte b" },
        { line: 4, title: "b setzen", explain: "Zweiten Wert parsen.", memory: "a,b gesetzt" },
        { line: 5, title: "Ausgabe", explain: "Summe berechnen und anzeigen.", memory: "Ausgabe a+b" }
      ]
    },
    pitfalls: [
      "Zahl erwartet, aber Parse auf Buchstaben → FormatException",
      "WriteLine für Prompt → Cursor in nächster Zeile, wirkt unordentlich",
      "Klammern vergessen: \"Summe: \" + a + b vs \"Summe: \" + (a + b)"
    ],
    flashcards: [
      {
        front: "Was liefert ReadLine?",
        back: "Einen string (eine Zeile Eingabe)."
      },
      {
        front: "Wie wird aus Text eine Zahl?",
        back: "int.Parse oder int.TryParse."
      }
    ],
    exercises: [
      {
        id: "netfx-io-pred-1",
        kind: "predictOutput",
        prompt: "Was erscheint bei a=3 und b=4?",
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
        explanation: "Ohne Klammern wird verkettet: \"Summe: \" + 3 → \"Summe: 3\" + 4 → \"Summe: 34\".",
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
        prompt: "Warum ist TryParse oft besser als Parse?",
        options: [
          "Weil es schneller ist als alles andere",
          "Weil ungültige Eingaben keinen Absturz erzeugen",
          "Weil ReadLine sonst nicht funktioniert",
          "Weil Main sonst fehlt"
        ],
        correctIndex: 1,
        explanation: "TryParse gibt false zurück statt Exception.",
        xp: 15
      },
      {
        id: "netfx-io-bug-1",
        kind: "spotBug",
        prompt: "Finde den Verkettungsfehler-Risiko-Punkt.",
        code: `int a = 2;
int b = 5;
Console.WriteLine("Produkt: " + a * b);
Console.WriteLine("Summe: " + a + b);`,
        buggyLine: 4,
        fix: "Console.WriteLine(\"Summe: \" + (a + b));",
        explanation: "* bindet stärker (ok), + verkettet ohne Klammern falsch.",
        xp: 25
      }
    ]
  },
  {
    id: "netfx-winforms-basics",
    order: 4,
    title: "Windows Forms Grundlagen (.NET Framework)",
    level: "Azubi",
    path: ["netfx", "klassenarbeit"],
    examFocus: "1. Klassenarbeit · WinForms",
    whyItMatters:
      "Viele erste Klassenarbeiten sind WinForms: Button, TextBox, Label, Click-Event. Du musst Designer und Code verbinden können.",
    minutes: 40,
    goals: [
      "Form, Controls und Properties erklären",
      "Click-Event-Handler lesen und schreiben",
      "Text aus TextBox in Label/Variable übernehmen",
      "MessageBox für Rückmeldungen nutzen"
    ],
    theory: [
      "Eine Form ist das Fenster. Darauf legst du Controls: Button, TextBox, Label, ListBox, CheckBox, ComboBox.",
      "Properties (Eigenschaften) im Eigenschaftenfenster: Name, Text, Enabled, Visible, Size, Location. `Name` ist der Bezeichner im Code (`btnBerechnen`).",
      "Events: Doppelklick auf Button erzeugt `btnBerechnen_Click(object sender, EventArgs e)`. Darin steht die Reaktion auf den Klick.",
      "`textBox1.Text` ist der Inhalt der Textbox (string). Daraus Zahlen parsen wie in Console-Apps.",
      "`MessageBox.Show(\"Fertig\");` zeigt einen Dialog. Gut für Ergebnisse und Fehlermeldungen."
    ],
    remember: [
      "Name-Property = Variablenname im Code.",
      "Click-Handler = Reaktion auf Klick.",
      "TextBox.Text ist string."
    ],
    codeExamples: [
      {
        title: "Typischer Button-Click",
        code: `private void btnAdd_Click(object sender, EventArgs e)
{
    string name = txtName.Text;
    if (name.Trim() == "")
    {
        MessageBox.Show("Bitte Name eingeben");
        return;
    }
    lstNames.Items.Add(name);
    txtName.Text = "";
}`,
        note: "Lesen → prüfen → Liste füllen → Eingabe leeren."
      },
      {
        title: "Rechnung auf Button",
        code: `private void btnSumme_Click(object sender, EventArgs e)
{
    int a = int.Parse(txtA.Text);
    int b = int.Parse(txtB.Text);
    lblErgebnis.Text = "Summe: " + (a + b);
}`,
        note: "Gleicher Parse-Gedanke wie in der Konsole — nur UI statt Console."
      }
    ],
    walkthrough: {
      title: "Klick-Pfad verstehen",
      code: `// User tippt in txtA und txtB
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
          title: "Eingabe UI",
          explain: "Werte stehen als Text in den TextBoxen.",
          memory: "txtA.Text / txtB.Text"
        },
        {
          line: 2,
          title: "Event",
          explain: "Klick löst den Handler aus.",
          memory: "btnSumme_Click startet"
        },
        {
          line: 5,
          title: "Parsen",
          explain: "Strings werden zu ints.",
          memory: "a,b als int"
        },
        {
          line: 7,
          title: "Anzeige",
          explain: "Label-Text wird gesetzt — User sieht Ergebnis.",
          memory: "lblErgebnis aktualisiert"
        }
      ]
    },
    pitfalls: [
      "Control nicht benannt (immer button1) → unleserlich",
      "Parse ohne Prüfung bei leerer TextBox",
      "Logik in Designer-Datei schreiben statt in Form1.cs"
    ],
    flashcards: [
      {
        front: "Was ist ein Event-Handler?",
        back: "Eine Methode, die auf ein Ereignis (z. B. Click) reagiert."
      },
      {
        front: "Wo steht der Text einer TextBox?",
        back: "In der Property Text."
      },
      {
        front: "Wozu MessageBox.Show?",
        back: "Zeigt einen Dialog mit Information/Warnung."
      }
    ],
    exercises: [
      {
        id: "netfx-win-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Signatur hat ein typischer Button-Click unter WinForms?",
        options: [
          "void Click()",
          "private void btn_Click(object sender, EventArgs e)",
          "static void Main()",
          "string TextBox()"
        ],
        correctIndex: 1,
        explanation: "sender + EventArgs ist das WinForms-Standardmuster.",
        xp: 15
      },
      {
        id: "netfx-win-fill-1",
        kind: "fillBlank",
        prompt: "Text aus TextBox lesen.",
        code: `string eingabe = txtWert.____;`,
        blanks: [{ id: "b1", answer: "Text" }],
        explanation: "Text ist die Property für den Inhalt.",
        xp: 10
      },
      {
        id: "netfx-win-order-1",
        kind: "orderCode",
        prompt: "Ordne die WinForms-Klick-Logik.",
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
        prompt: "Warum ist das riskant?",
        code: `private void btn_Click(object sender, EventArgs e)
{
    int x = int.Parse(txtA.Text);
    lblOut.Text = x;
}`,
        buggyLine: 4,
        fix: "lblOut.Text = x.ToString(); (Text erwartet string)",
        explanation: "Label.Text ist string — int muss konvertiert werden (je nach Kontext Fehler/Warnung).",
        xp: 25
      },
      {
        id: "netfx-win-mc-2",
        kind: "multipleChoice",
        prompt: "Wozu dient die Name-Property eines Buttons?",
        options: [
          "Nur für die sichtbare Beschriftung",
          "Als Bezeichner im Code (z. B. btnStart)",
          "Nur für Farben",
          "Ersetzt Main"
        ],
        correctIndex: 1,
        explanation: "Text = Beschriftung, Name = Code-Bezeichner.",
        xp: 15
      }
    ],
    badgeHint: "csharp-starter"
  },
  {
    id: "netfx-winforms-logic",
    order: 5,
    title: "WinForms + C#-Logik: Rechnen, If, Listen",
    level: "Azubi",
    path: ["netfx", "klassenarbeit"],
    examFocus: "1. Klassenarbeit · UI trifft Algorithmus",
    whyItMatters:
      "Die KA prüft nicht nur Designer-Klicks, sondern ob du if/Schleifen/Arrays hinter dem Button beherrschst.",
    minutes: 35,
    goals: [
      "Eingaben validieren bevor gerechnet wird",
      "If/else in Event-Handlern nutzen",
      "ListBox/Items.Add verstehen",
      "Klar trennen: UI lesen → Logik → UI schreiben"
    ],
    theory: [
      "Muster für jede WinForms-Aufgabe: 1) Werte aus Controls lesen 2) prüfen/parsen 3) berechnen/entscheiden 4) Ergebnis in Controls schreiben.",
      "Validierung: leere TextBox, keine Zahl, Division durch 0, negative Werte — je nach Aufgabenstellung.",
      "`listBox1.Items.Add(text)` hängt einen Eintrag an. `Items.Clear()` leert. `SelectedItem` liest Auswahl.",
      "Zu viel Logik im Click-Handler wird unübersichtlich — kleine Hilfsmethoden in derselben Form-Klasse sind ok und zeigen Verständnis."
    ],
    remember: [
      "UI → Logik → UI.",
      "Erst prüfen, dann rechnen.",
      "Items.Add für ListBox-Einträge."
    ],
    codeExamples: [
      {
        title: "Notenbewertung per Button",
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
        note: "TryParse + if — klassisches Schulmuster."
      },
      {
        title: "ListBox füllen",
        code: `private void btnAdd_Click(object sender, EventArgs e)
{
    if (txtItem.Text.Trim() == "")
        return;
    lstItems.Items.Add(txtItem.Text.Trim());
    txtItem.Clear();
}`,
        note: "Trim verhindert leere/space-only Einträge."
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
          title: "Parse-Versuch",
          explain: "Wenn Text keine Zahl ist → false.",
          memory: "TryParse"
        },
        {
          line: 4,
          title: "Abbruch",
          explain: "User informieren und Handler verlassen.",
          memory: "return"
        },
        {
          line: 7,
          title: "Fachlogik",
          explain: "Erst jetzt ist punkte sicher eine Zahl.",
          memory: "punkte gültig"
        }
      ]
    },
    pitfalls: [
      "Ergebnis berechnen bevor Parse geprüft wurde",
      "Visible-Logik mit Fachlogik vermischen ohne Struktur",
      "ListBox mit Array verwechseln"
    ],
    flashcards: [
      {
        front: "4 Schritte jeder WinForms-Aufgabe?",
        back: "Lesen → Prüfen → Rechnen/Entscheiden → Anzeigen."
      },
      {
        front: "Items.Add?",
        back: "Fügt einen Eintrag in ListBox/ComboBox hinzu."
      }
    ],
    exercises: [
      {
        id: "netfx-logic-mc-1",
        kind: "multipleChoice",
        prompt: "Wann solltest du return im Click-Handler nutzen?",
        options: [
          "Immer ganz am Ende zwingend",
          "Nach fehlgeschlagener Validierung, um nicht weiterzurechnen",
          "Nur in Main",
          "Nie"
        ],
        correctIndex: 1,
        explanation: "Früh raus, wenn Eingabe ungültig ist.",
        xp: 15
      },
      {
        id: "netfx-logic-trace-1",
        kind: "traceState",
        prompt: "txtPunkte.Text = \"40\"",
        code: `int punkte = int.Parse("40");
string status;
if (punkte >= 50) status = "ok";
else status = "nein";`,
        question: "Wert von status?",
        options: ["ok", "nein", "40", "leer"],
        correctIndex: 1,
        explanation: "40 < 50 → nicht bestanden.",
        xp: 15
      },
      {
        id: "netfx-logic-fill-1",
        kind: "fillBlank",
        prompt: "Eintrag in ListBox.",
        code: `lstNamen.Items.____(txtName.Text);`,
        blanks: [{ id: "b1", answer: "Add" }],
        explanation: "Add hängt den Text an.",
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
    title: "Boss: 1. Klassenarbeit .NET Framework Simulation",
    level: "Boss",
    path: ["netfx", "klassenarbeit"],
    examFocus: "1. Klassenarbeit Simulation",
    whyItMatters:
      "Hier trainierst du gemischt genau das, was in der ersten Framework-KA zählt: Gerüst, Ein-/Ausgabe, if, Schleifen, WinForms-Events.",
    minutes: 45,
    goals: [
      "Console- und WinForms-Muster sicher unterscheiden",
      "Typische KA-Aufgaben end-to-end lösen",
      "Fehlerquellen vor dem Abgeben checken"
    ],
    theory: [
      "Checkliste vor Abgabe: Läuft F5? Alle Controls benannt? Parse abgesichert? Grenzwerte getestet? Main/Handler nicht durcheinander?",
      "Console-KA: alles in Main/Methoden. WinForms-KA: Logik in Event-Handlern + Properties.",
      "Punktefresser Nr.1: Integer-Division, fehlende Klammern bei Verkettung, leere TextBox + Parse, Main ohne static."
    ],
    remember: [
      "Framework-Gerüst beachten.",
      "UI und Logik klar trennen.",
      "Vor Abgabe mental tracen."
    ],
    codeExamples: [
      {
        title: "Mini-Console-KA",
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
        note: "Summe 1..n — Klassiker."
      },
      {
        title: "Mini-WinForms-KA",
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
        note: "Dieselbe Logik, andere Oberfläche."
      }
    ],
    walkthrough: {
      title: "KA-Strategie",
      code: `// 1 Aufgabe auf Deutsch nacherzählen
// 2 Eingaben/Ausgaben listen
// 3 Grenzfall wählen
// 4 Code schreiben
// 5 F5 + Trace`,
      steps: [
        { line: 1, title: "Verstehen", explain: "Ohne Aufgabenverständnis kein Code.", memory: "Ziel klar" },
        { line: 2, title: "I/O", explain: "Was kommt rein, was muss raus?", memory: "I/O-Liste" },
        { line: 3, title: "Rand", explain: "0, 1, negativ, Text statt Zahl.", memory: "Tests" },
        { line: 4, title: "Umsetzen", explain: "Gerüst + Logik.", memory: "Code" },
        { line: 5, title: "Prüfen", explain: "Starten und mit Beispiel vergleichen.", memory: "OK/Fix" }
      ]
    },
    pitfalls: [
      "Sofort hacken ohne Beispiel",
      "WinForms-Text und Console-WriteLine mischen",
      "Nur Happy Path testen"
    ],
    flashcards: [
      {
        front: "Console vs WinForms Einstieg?",
        back: "Console: Main. WinForms: Event-Handler auf der Form."
      },
      {
        front: "3 Punktefresser der 1. KA?",
        back: "Parse ohne Check, Integer-Division/Verkettung, falsches Gerüst/Main."
      }
    ],
    exercises: [
      {
        id: "netfx-boss-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Aussage ist für .NET-Framework-KA richtig?",
        options: [
          "Top-Level-Statements sind Pflicht",
          "Klassisches Main- oder WinForms-Event-Muster wird erwartet",
          "Nur ASP.NET zählt",
          "Ohne Visual Studio unmöglich zu denken"
        ],
        correctIndex: 1,
        explanation: "Schulen erwarten klassische Struktur.",
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
        prompt: "Nach dem Handler-Logikstück.",
        code: `string t = "12";
int x;
bool ok = int.TryParse(t, out x);
string msg = ok ? (x * 2).ToString() : "fail";`,
        question: "Wert von msg?",
        options: ["12", "24", "fail", "true"],
        correctIndex: 1,
        explanation: "Parse ok, 12*2=24.",
        xp: 20
      },
      {
        id: "netfx-boss-order-1",
        kind: "orderCode",
        prompt: "Ordne die Abgabe-Checkliste.",
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
        prompt: "Framework-Gerüst-Bug.",
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
