import type { CsharpModule } from "./csharpTypes";

export const csharpCatalogPart2: CsharpModule[] = [
  {
    id: "cs-oop-basics",
    order: 5,
    title: "OOP: Klassen, Properties, Konstruktoren",
    level: "Azubi",
    examFocus: "AP2 · Objektorientierung",
    whyItMatters:
      "OOP ist Prüfungsklassiker: Klasse mit Properties, Konstruktor und Kapselung musst du schreiben und erklären können.",
    minutes: 35,
    goals: [
      "Klasse vs Objekt unterscheiden",
      "Auto-Properties und Konstruktor schreiben",
      "private/public begründen",
      "Einfache Domänenklasse modellieren (Artikel, Kunde, Ticket)"
    ],
    theory: [
      "Eine Klasse ist der Bauplan, ein Objekt die Instanz. Eigenschaften halten Zustand, Methoden Verhalten.",
      "Kapselung: Felder `private`, Zugriff über Properties. So schützt du Invarianten (z. B. Preis darf nicht negativ sein).",
      "Konstruktor initialisiert ein Objekt beim `new`. Überladene Konstruktoren sind üblich.",
      "Typische Prüfungsdomains: Artikelverwaltung, Bibliothek, Mitglieder, Parkhaus, Ticketsystem."
    ],
    remember: [
      "Klasse = Bauplan, Objekt = Instanz.",
      "get/set Properties sind Standard in C#.",
      "private set schützt kritische IDs."
    ],
    codeExamples: [
      {
        title: "Artikel-Klasse",
        code: `public class Artikel
{
    public int Artikelnummer { get; private set; }
    public string Bezeichnung { get; set; }
    public decimal Preis { get; set; }

    public Artikel(int nr, string name, decimal preis)
    {
        Artikelnummer = nr;
        Bezeichnung = name;
        Preis = preis;
    }
}`,
        note: "Genau dieses Muster taucht in vielen IHK-Szenarien auf."
      }
    ],
    pitfalls: [
      "Alles public ohne Begründung",
      "Vergessener Konstruktor bei Pflichtfeldern",
      "Business-Logik nur in Main statt in der Klasse"
    ],
    flashcards: [
      { front: "Was ist Kapselung?", back: "Interne Daten schützen und nur kontrolliert freigeben." },
      { front: "Was macht ein Konstruktor?", back: "Initialisiert ein neues Objekt." },
      { front: "Klasse vs Objekt?", back: "Bauplan vs konkrete Instanz." }
    ],
    exercises: [
      {
        id: "cs-oop-mc-1",
        kind: "multipleChoice",
        prompt: "Was erzeugt `new Artikel(1, \"Maus\", 15m)`?",
        options: ["Eine Klasse", "Ein Objekt/eine Instanz", "Einen Namespace", "Einen Datentyp"],
        correctIndex: 1,
        explanation: "new erzeugt eine Instanz der Klasse.",
        xp: 15
      },
      {
        id: "cs-oop-fill-1",
        kind: "fillBlank",
        prompt: "Property mit privatem Setter.",
        code: `public int Id { get; ______ set; }`,
        blanks: [{ id: "b1", answer: "private" }],
        explanation: "private set verhindert spätere externe Änderung.",
        xp: 20
      },
      {
        id: "cs-oop-order-1",
        kind: "orderCode",
        prompt: "Ordne eine minimale Kundenklasse.",
        lines: [
          "public class Kunde",
          "{",
          "    public string Name { get; set; }",
          "    public Kunde(string name)",
          "    {",
          "        Name = name;",
          "    }",
          "}"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
        explanation: "Klassenkopf → Property → Konstruktor.",
        xp: 25
      },
      {
        id: "cs-oop-bug-1",
        kind: "spotBug",
        prompt: "Welcher Fehler steckt in der Kapselung?",
        code: `public class Konto
{
    public decimal saldo;
    public void Einzahlen(decimal betrag)
    {
        saldo += betrag;
    }
}`,
        buggyLine: 3,
        fix: "private decimal saldo; und Property/Methoden dafür nutzen.",
        explanation: "Öffentliche Felder brechen Kapselung.",
        xp: 25
      }
    ],
    badgeHint: "csharp-oop"
  },
  {
    id: "cs-oop-inheritance",
    order: 6,
    title: "Vererbung, Polymorphie, abstract & interface",
    level: "Prüfungsnah",
    examFocus: "AP2 · OOP Vertiefung",
    whyItMatters:
      "Vererbung, override und Interfaces gehören seit Jahren fest zur Prüfung. Du musst Code schreiben und in 2–3 Sätzen erklären.",
    minutes: 40,
    goals: [
      "Basisklasse und abgeleitete Klasse modellieren",
      "virtual/override verstehen",
      "Interface vs abstrakte Klasse abgrenzen",
      "Polymorphie an einem Beispiel erklären"
    ],
    theory: [
      "Vererbung (`class Azubi : Mitarbeiter`) übernimmt Mitglieder der Basisklasse. `virtual` Methoden können in Kindklassen mit `override` ersetzt werden.",
      "Polymorphie: Über eine Basisvariable wird zur Laufzeit die passende überschriebene Methode aufgerufen.",
      "Abstrakte Klassen können abstrakte Mitglieder ohne Implementierung haben und nicht instanziert werden.",
      "Interfaces sind Verträge (`IComparable`, eigene `ISpeicherbar`). Eine Klasse kann mehrere Interfaces implementieren, aber nur von einer Klasse erben."
    ],
    remember: [
      "Komposition oft besser als tiefe Vererbung.",
      "Interface = Vertrag, abstract class = Teil-Implementierung.",
      "override nur auf virtual/abstract/override-Mitglieder."
    ],
    codeExamples: [
      {
        title: "Polymorphie",
        code: `public class Mitarbeiter
{
    public virtual decimal Gehalt() => 3000m;
}

public class Azubi : Mitarbeiter
{
    public override decimal Gehalt() => 1100m;
}

Mitarbeiter m = new Azubi();
Console.WriteLine(m.Gehalt()); // 1100`,
        note: "Zur Laufzeit zählt der echte Objekttyp."
      },
      {
        title: "Interface",
        code: `public interface IDruckbar
{
    void Drucke();
}

public class Rechnung : IDruckbar
{
    public void Drucke() => Console.WriteLine("Rechnung");
}`,
        note: "Interfaces eignen sich für austauschbares Verhalten."
      }
    ],
    pitfalls: [
      "new statt override (versteckt statt überschreibt)",
      "Interface-Methoden vergessen zu implementieren",
      "Zu tiefe Vererbungshierarchien"
    ],
    flashcards: [
      { front: "Polymorphie?", back: "Gleiche Schnittstelle, unterschiedliches Verhalten zur Laufzeit." },
      { front: "Interface vs abstract?", back: "Interface: nur Vertrag (mehrfach). Abstract: kann Code enthalten, Einfachvererbung." },
      { front: "virtual/override?", back: "Basismethode überschreibbar machen und in Kindklasse ersetzen." }
    ],
    exercises: [
      {
        id: "cs-inh-mc-1",
        kind: "multipleChoice",
        prompt: "Wann eher Interface statt Basisklasse?",
        options: [
          "Wenn Code und Felder geteilt werden sollen",
          "Wenn nur ein Verhalten vertraglich vorgeschrieben wird",
          "Wenn private Felder vererbt werden müssen",
          "Immer"
        ],
        correctIndex: 1,
        explanation: "Interfaces definieren Verträge ohne Implementierungszwang der Basisklasse.",
        xp: 20
      },
      {
        id: "cs-inh-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `class A { public virtual string Info() => "A"; }
class B : A { public override string Info() => "B"; }
A x = new B();
Console.WriteLine(x.Info());`,
        options: ["A", "B", "AB", "Compilerfehler"],
        correctIndex: 1,
        explanation: "override + virtuelle Bindung → B.",
        xp: 25
      },
      {
        id: "cs-inh-fill-1",
        kind: "fillBlank",
        prompt: "Methode überschreiben.",
        code: `public class Hund : Tier
{
    public ______ string Sprich() => "Wuff";
}`,
        blanks: [{ id: "b1", answer: "override" }],
        explanation: "override ersetzt die virtuelle Basismethode.",
        xp: 20
      },
      {
        id: "cs-inh-bug-1",
        kind: "spotBug",
        prompt: "Warum ist das keine echte Polymorphie?",
        code: `class Basis
{
    public string Test() => "Basis";
}
class Kind : Basis
{
    public new string Test() => "Kind";
}`,
        buggyLine: 7,
        fix: "In Basis virtual, in Kind override verwenden.",
        explanation: "`new` versteckt die Methode, überschreibt sie nicht polymorph.",
        xp: 30
      }
    ],
    badgeHint: "csharp-oop"
  },
  {
    id: "cs-exceptions",
    order: 7,
    title: "Exceptions & robuste Eingaben",
    level: "Prüfungsnah",
    examFocus: "AP2 · Fehlerbehandlung",
    whyItMatters:
      "FormatException nach Parse ist Prüfungsstandard. Falsche catch-Reihenfolge kostet Punkte.",
    minutes: 25,
    goals: [
      "try/catch/finally erklären",
      "FormatException und NullReference typisch einordnen",
      "catch von speziell nach allgemein ordnen",
      "Eingaben absichern"
    ],
    theory: [
      "Im `try`-Block steht riskanter Code. `catch` fängt Exceptions. `finally` läuft immer (Aufräumen).",
      "Spezielle Exceptions zuerst (`FormatException`), allgemeine (`Exception`) zuletzt — sonst unerreichbarer Code.",
      "Klassiker: `int.Parse(Console.ReadLine())` mit Buchstaben-Eingabe.",
      "Nicht jede Situation braucht Exceptions: Validierung vorher ist oft klarer."
    ],
    remember: [
      "Speziell vor allgemein catchen.",
      "Parse → FormatException.",
      "finally für Cleanup."
    ],
    codeExamples: [
      {
        title: "try/catch",
        code: `try
{
    Console.Write("Zahl: ");
    int zahl = int.Parse(Console.ReadLine()!);
    Console.WriteLine(zahl * 2);
}
catch (FormatException)
{
    Console.WriteLine("Bitte eine Zahl eingeben.");
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}`,
        note: "FormatException vor Exception."
      }
    ],
    pitfalls: [
      "catch (Exception) zuerst",
      "Leere catch-Blöcke, die Fehler verschlucken",
      "Exceptions für normalen Kontrollfluss überbrauchen"
    ],
    flashcards: [
      { front: "Wann FormatException?", back: "Wenn Text nicht in den Zieltyp passt, z. B. int.Parse(\"x\")." },
      { front: "catch-Reihenfolge?", back: "Von speziell nach allgemein." }
    ],
    exercises: [
      {
        id: "cs-ex-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Reihenfolge ist korrekt?",
        options: [
          "catch(Exception) dann catch(FormatException)",
          "catch(FormatException) dann catch(Exception)",
          "nur catch(Exception) doppelt",
          "catch ohne Typ zuerst"
        ],
        correctIndex: 1,
        explanation: "Spezielle Exception muss vor der allgemeinen stehen.",
        xp: 20
      },
      {
        id: "cs-ex-bug-1",
        kind: "spotBug",
        prompt: "Finde den catch-Fehler.",
        code: `try { int.Parse("x"); }
catch (Exception) { }
catch (FormatException) { }`,
        buggyLine: 2,
        fix: "FormatException-catch nach oben, Exception nach unten.",
        explanation: "Der zweite catch ist unerreichbar.",
        xp: 30
      },
      {
        id: "cs-ex-fill-1",
        kind: "fillBlank",
        prompt: "Fange Formatfehler.",
        code: `try { int.Parse(text); }
catch (____________)
{
    Console.WriteLine("ungueltig");
}`,
        blanks: [{ id: "b1", answer: "FormatException" }],
        explanation: "Genau dieser Typ kommt bei Parse-Fehlern.",
        xp: 20
      },
      {
        id: "cs-ex-pred-1",
        kind: "predictOutput",
        prompt: "Was passiert?",
        code: `try
{
    Console.WriteLine(int.Parse("7"));
}
catch (FormatException)
{
    Console.WriteLine("fail");
}`,
        options: ["7", "fail", "nichts", "Compilerfehler"],
        correctIndex: 0,
        explanation: "Parse gelingt, catch wird nicht betreten.",
        xp: 15
      }
    ]
  },
  {
    id: "cs-algorithms",
    order: 8,
    title: "Algorithmen: Suche, Min/Max, Filtern, Zählen",
    level: "Prüfungsnah",
    examFocus: "AP2 · Entwicklung und Umsetzung von Algorithmen",
    whyItMatters:
      "Das ist dein Hauptkampfplatz: auf Papier Logik schreiben — Summe, Min/Max, lineare Suche, Schwellenwerte, Zähler.",
    minutes: 45,
    goals: [
      "Lineare Suche implementieren",
      "Min/Max und Durchschnitt berechnen",
      "Zählen/Filtern mit Schleifen",
      "Randfälle nennen (leer, ein Element, keine Treffer)"
    ],
    theory: [
      "Ein Algorithmus ist eine eindeutige Schrittfolge. In der Prüfung zählt klare Logik mehr als perfekte Syntax.",
      "Lineare Suche: jedes Element prüfen, bei Treffer merken/abbrechen.",
      "Min/Max: Startwert mit erstem Element, dann vergleichen.",
      "Auch ohne Sortierzwang brauchst du algorithmisches Denken: Zerlegen, Schleifen, Bedingungen, Testdaten."
    ],
    remember: [
      "Immer Randfälle: leer, 1 Element, kein Treffer.",
      "foreach reicht oft statt kompliziertem Index.",
      "Vorher Pseudocode/Schritte skizzieren."
    ],
    codeExamples: [
      {
        title: "Lineare Suche in List",
        code: `Artikel? gefunden = null;
foreach (Artikel a in lager)
{
    if (a.Artikelnummer == nummer)
    {
        gefunden = a;
        break;
    }
}
if (gefunden != null)
    Console.WriteLine(gefunden.Bezeichnung);
else
    Console.WriteLine("nicht gefunden");`,
        note: "Klassisches IHK-Muster Artikelverwaltung."
      },
      {
        title: "Min & Durchschnitt",
        code: `int min = werte[0];
int summe = 0;
foreach (int w in werte)
{
    if (w < min) min = w;
    summe += w;
}
double schnitt = summe / (double)werte.Length;`,
        note: "Cast nicht vergessen."
      }
    ],
    pitfalls: [
      "Min mit 0 initialisieren statt erstem Element",
      "Kein else-Zweig bei 'nicht gefunden'",
      "Integer-Division beim Durchschnitt"
    ],
    flashcards: [
      { front: "Lineare Suche?", back: "Elemente nacheinander prüfen, bis Treffer oder Ende." },
      { front: "Warum min = werte[0]?", back: "Sonst sind Startwerte wie 0 bei negativen Zahlen falsch." },
      { front: "Welche Randfälle?", back: "Leere Menge, ein Element, keine Treffer, Duplikate." }
    ],
    exercises: [
      {
        id: "cs-algo-mc-1",
        kind: "multipleChoice",
        prompt: "Warum ist `int min = 0;` riskant?",
        options: [
          "Weil 0 verboten ist",
          "Weil alle Werte > 0 sein könnten und min falsch bleibt, oder negative Werte unterschätzt werden",
          "Weil Arrays bei 1 beginnen",
          "Weil foreach das verbietet"
        ],
        correctIndex: 1,
        explanation: "Besser mit dem ersten Element initialisieren.",
        xp: 20
      },
      {
        id: "cs-algo-order-1",
        kind: "orderCode",
        prompt: "Ordne die lineare Suche.",
        lines: [
          "string? treffer = null;",
          "foreach (string name in namen)",
          "{",
          "    if (name == gesucht) { treffer = name; break; }",
          "}",
          "Console.WriteLine(treffer ?? \"nicht gefunden\");"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        explanation: "Initialisieren → iterieren → vergleichen → ausgeben.",
        xp: 30
      },
      {
        id: "cs-algo-pred-1",
        kind: "predictOutput",
        prompt: "Ausgabe?",
        code: `int[] w = { 4, 9, 2, 9 };
int c = 0;
foreach (int x in w) if (x == 9) c++;
Console.WriteLine(c);`,
        options: ["1", "2", "9", "4"],
        correctIndex: 1,
        explanation: "Zwei Neunen → 2.",
        xp: 15
      },
      {
        id: "cs-algo-fill-1",
        kind: "fillBlank",
        prompt: "Abbruch nach Treffer.",
        code: `if (a.Id == id)
{
    gefunden = a;
    ______;
}`,
        blanks: [{ id: "b1", answer: "break" }],
        explanation: "break beendet die Schleife früh.",
        xp: 15
      },
      {
        id: "cs-algo-bug-1",
        kind: "spotBug",
        prompt: "Finde den Algorithmus-Bug.",
        code: `int[] werte = { -3, -8, -1 };
int max = 0;
foreach (int w in werte)
{
    if (w > max) max = w;
}
Console.WriteLine(max);`,
        buggyLine: 2,
        fix: "int max = werte[0];",
        explanation: "Mit Start 0 bleibt max fälschlich 0.",
        xp: 30
      }
    ],
    badgeHint: "csharp-algo"
  },
  {
    id: "cs-linq-basics",
    order: 9,
    title: "LINQ-Grundlagen (Pluspunkt)",
    level: "Azubi",
    examFocus: "Projektarbeit & modernes C# · in AP oft optional",
    whyItMatters:
      "In der schriftlichen AP reichen oft foreach-Lösungen. LINQ ist trotzdem ein Pluspunkt und in Projekten extrem nützlich.",
    minutes: 25,
    goals: [
      "Where/Select/OrderBy lesen",
      "LINQ vs foreach abwägen",
      "Einfache Filterungen schreiben"
    ],
    theory: [
      "LINQ = Language Integrated Query. Du fragst Collections deklarativ ab.",
      "`Where` filtert, `Select` projiziert, `OrderBy` sortiert, `Sum/Count/Any` aggregieren.",
      "Prüfungsstrategie: Wenn unsicher, lieber klare foreach-Lösung. Wenn sicher, LINQ als elegante Variante."
    ],
    remember: [
      "LINQ ist Plus, foreach ist Pflichtsicherheit.",
      "Where = Filter, Select = Transformation.",
      "LINQ ist lazy bis zur Materialisierung (ToList, foreach, Count...)."
    ],
    codeExamples: [
      {
        title: "Filter & Projektion",
        code: `var teuer = artikel
    .Where(a => a.Preis > 50)
    .OrderBy(a => a.Preis)
    .Select(a => a.Bezeichnung)
    .ToList();`,
        note: "Gleiche Logik könntest du mit foreach schreiben."
      }
    ],
    pitfalls: [
      "LINQ erzwingen, obwohl foreach klarer wäre",
      "Mehrfaches Enumerieren teurer Queries",
      "Null in lambdas nicht bedenken"
    ],
    flashcards: [
      { front: "Where?", back: "Filtert Elemente nach Bedingung." },
      { front: "Select?", back: "Transformiert jedes Element." }
    ],
    exercises: [
      {
        id: "cs-linq-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Methode filtert?",
        options: ["Select", "Where", "OrderBy", "ToList"],
        correctIndex: 1,
        explanation: "Where ist der Filter.",
        xp: 15
      },
      {
        id: "cs-linq-pred-1",
        kind: "predictOutput",
        prompt: "Ergebnis von Count?",
        code: `int[] n = { 1, 2, 3, 4 };
int c = n.Where(x => x % 2 == 0).Count();
Console.WriteLine(c);`,
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        explanation: "2 und 4 → Count 2.",
        xp: 20
      },
      {
        id: "cs-linq-fill-1",
        kind: "fillBlank",
        prompt: "Nur Namen länger als 3.",
        code: `var kurz = namen.______(n => n.Length > 3);`,
        blanks: [{ id: "b1", answer: "Where" }],
        explanation: "Where filtert.",
        xp: 15
      }
    ]
  },
  {
    id: "cs-exam-boss",
    order: 10,
    title: "Boss-Fight: IHK Artikelverwaltung",
    level: "Boss",
    examFocus: "AP2 Simulation · Klassen + List + Suche + Exceptions",
    whyItMatters:
      "Viele Prüfungen kombinieren genau dieses Muster: Klasse, Liste, Eingabe, Suche, Fehlerbehandlung.",
    minutes: 40,
    goals: [
      "Ein komplettes Szenario end-to-end denken",
      "Typische Stolperfallen vermeiden",
      "Handschriftlich erklärbare Lösung skizzieren"
    ],
    theory: [
      "Bauplan einer Prüfungsaufgabe: 1) Modellklasse 2) Testdaten in List 3) Eingabe lesen 4) suchen 5) Ergebnis/Fehler ausgeben.",
      "Erkläre im Fachgespräch: Warum private set? Warum List? Warum break nach Treffer? Warum FormatException?",
      "Übe auf Papier ohne IntelliSense — genau so läuft die schriftliche Prüfung."
    ],
    remember: [
      "Muster speichern > auswendig Frameworks pauken.",
      "Drei Fehlerkiller: break im switch, Integer-Division, catch-Reihenfolge.",
      "Randfall 'nicht gefunden' nie vergessen."
    ],
    codeExamples: [
      {
        title: "Skelett der Boss-Aufgabe",
        code: `List<Artikel> lager = new()
{
    new Artikel(1, "Tastatur", 25.90m),
    new Artikel(2, "Monitor", 189.00m)
};

try
{
    int nr = int.Parse(Console.ReadLine()!);
    Artikel? hit = null;
    foreach (var a in lager)
    {
        if (a.Artikelnummer == nr) { hit = a; break; }
    }
    Console.WriteLine(hit?.Bezeichnung ?? "nicht gefunden");
}
catch (FormatException)
{
    Console.WriteLine("ungueltige Eingabe");
}`,
        note: "Dieses Skelett auf andere Domains übertragen."
      }
    ],
    pitfalls: [
      "Zu viel Zeit an Syntax verlieren, Logik vergessen",
      "Keine Testdaten/Beispiele angeben",
      "Nur Happy Path beschreiben"
    ],
    flashcards: [
      { front: "Welche 4 Bausteine hat die Boss-Aufgabe?", back: "Klasse, List, Suche/Schleife, Exception-Handling." },
      { front: "Nenne 3 Punktefresser.", back: "switch ohne break, Integer-Division, falsche catch-Reihenfolge." }
    ],
    exercises: [
      {
        id: "cs-boss-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Kombi trifft das IHK-Kernmuster am besten?",
        options: [
          "WPF + Entity Framework",
          "Klasse + List + foreach-Suche + try/catch",
          "Nur LINQ ohne Modell",
          "Nur SQL ohne C#"
        ],
        correctIndex: 1,
        explanation: "Frameworks sind kaum Thema — Kernsprache und Algorithmus schon.",
        xp: 25
      },
      {
        id: "cs-boss-order-1",
        kind: "orderCode",
        prompt: "Ordne den Prüfungsablauf.",
        lines: [
          "List mit Beispieldaten anlegen",
          "Benutzereingabe lesen und parsen",
          "Liste linear durchsuchen",
          "Treffer oder Fehlermeldung ausgeben"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "Daten → Input → Algorithmus → Output.",
        xp: 25
      },
      {
        id: "cs-boss-bug-1",
        kind: "spotBug",
        prompt: "Welcher Prüfungsfehler steckt hier?",
        code: `int summe = 0;
foreach (var a in lager) summe += (int)a.Preis;
double schnitt = summe / lager.Count;
Console.WriteLine(schnitt);`,
        buggyLine: 3,
        fix: "summe als decimal/double und durch (double)lager.Count teilen.",
        explanation: "Integer-Division verfälscht den Durchschnitt.",
        xp: 35
      },
      {
        id: "cs-boss-pred-1",
        kind: "predictOutput",
        prompt: "Was passiert bei Eingabe 'x'?",
        code: `try { int.Parse("x"); Console.WriteLine("ok"); }
catch (FormatException) { Console.WriteLine("fail"); }`,
        options: ["ok", "fail", "beides", "Crash ohne catch-Text"],
        correctIndex: 1,
        explanation: "Parse wirft FormatException → fail.",
        xp: 20
      },
      {
        id: "cs-boss-fill-1",
        kind: "fillBlank",
        prompt: "Nicht-gefunden-Fall.",
        code: `Console.WriteLine(gefunden?.Bezeichnung ____ \"nicht gefunden\");`,
        blanks: [{ id: "b1", answer: "??", alternatives: ["??"] }],
        explanation: "Null-Coalescing-Operator liefert Fallback.",
        xp: 25
      }
    ],
    badgeHint: "csharp-algo"
  }
];
