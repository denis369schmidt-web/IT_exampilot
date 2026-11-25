import type { CsharpModule } from "./csharpTypes";

export const csharpCatalogPart1: CsharpModule[] = [
  {
    id: "cs-basics-types",
    order: 21,
    title: "Datentypen, Variablen & Operatoren",
    level: "Starter",
    examFocus: "AP2 Algorithmen · Grundlagen",
    whyItMatters:
      "In fast jeder IHK-Aufgabe legst du zuerst Typen fest. Ohne sichere Grundlagen verlierst du Punkte bei Parse, Modulo und Integer-Division.",
    minutes: 25,
    goals: [
      "int, double, decimal, string, bool und char sicher zuordnen",
      "Wert- vs. Referenztypen grob erklären",
      "Parse, Cast und Convert gezielt einsetzen",
      "Modulo und Integer-Division nicht verwechseln"
    ],
    theory: [
      "C# ist stark typisiert: Jede Variable hat einen Typ. `int` speichert ganze Zahlen, `double` Gleitkommazahlen, `decimal` Geldbeträge, `string` Text, `bool` Wahrheitswerte.",
      "`var` leitet den Typ aus dem rechten Ausdruck ab, ändert aber nichts an der Typsicherheit. `var x = 5;` ist weiterhin ein `int`.",
      "Werttypen (z. B. int, bool, struct) speichern den Wert direkt. Referenztypen (string, class, arrays, List) speichern eine Referenz auf den Heap.",
      "Umwandlungen: `(double)zahl` ist ein Cast, `int.Parse(\"42\")` und `Convert.ToInt32` machen aus Text Zahlen. Bei unsicheren Eingaben ist `int.TryParse` robuster.",
      "Der Modulo-Operator `%` liefert den Rest einer Division. Klassiker: gerade/ungerade, Schaltjahr, Restaufgaben in Algorithmen."
    ],
    remember: [
      "5 / 2 ergibt in C# 2 (Integer-Division), 5 / 2.0 ergibt 2.5.",
      "Geld: lieber decimal als double.",
      "Parse wirft FormatException bei ungültigem Text — TryParse nicht."
    ],
    codeExamples: [
      {
        title: "Typen & Modulo",
        code: `int alter = 21;
double preis = 19.9;
decimal gehalt = 1200.50m;
bool bestanden = alter >= 18;
int rest = 17 % 5; // 2
string name = "Azubi";`,
        note: "m hinter der Zahl markiert decimal-Literale."
      },
      {
        title: "Parse vs TryParse",
        code: `string eingabe = "42";
int a = int.Parse(eingabe);

if (int.TryParse(eingabe, out int b))
{
    Console.WriteLine(b);
}`,
        note: "In der Prüfung reicht oft Parse + try/catch — TryParse ist in der Praxis besser."
      }
    ],
    pitfalls: [
      "Integer-Division bei Durchschnittsberechnungen",
      "Vergleich von doubles auf exakte Gleichheit",
      "string mit == vergleichen ist ok, aber Kulturen/Leerzeichen beachten"
    ],
    flashcards: [
      { front: "Was macht int.Parse?", back: "Wandelt einen String in int um oder wirft FormatException." },
      { front: "Was ergibt 7 % 2?", back: "1 — Rest der Division." },
      { front: "Warum decimal für Geld?", back: "Weil Rundungsfehler von double bei Geldbeträgen problematisch sind." },
      { front: "Was ist Integer-Division?", back: "Division zweier ints schneidet Nachkommastellen ab: 5/2 == 2." }
    ],
    exercises: [
      {
        id: "cs-basics-mc-1",
        kind: "multipleChoice",
        prompt: "Welcher Typ eignet sich am besten für Geldbeträge in C#?",
        options: ["float", "double", "decimal", "int"],
        correctIndex: 2,
        explanation: "decimal ist für Währung und präzise Dezimalwerte gedacht.",
        xp: 15
      },
      {
        id: "cs-basics-mc-2",
        kind: "multipleChoice",
        prompt: "Was ergibt der Ausdruck 5 / 2 in C#?",
        options: ["2.5", "2", "2.0 als double", "Compilerfehler"],
        correctIndex: 1,
        explanation: "Beide Operanden sind int → Integer-Division → 2.",
        xp: 20
      },
      {
        id: "cs-basics-pred-1",
        kind: "predictOutput",
        prompt: "Was wird ausgegeben?",
        code: `int a = 10;
int b = 3;
Console.WriteLine(a % b);
Console.WriteLine(a / b);`,
        options: ["1 und 3", "3 und 1", "1 und 3.33", "0 und 3"],
        correctIndex: 0,
        explanation: "10 % 3 = 1, 10 / 3 = 3.",
        xp: 20
      },
      {
        id: "cs-basics-fill-1",
        kind: "fillBlank",
        prompt: "Vervollständige die sichere Umwandlung.",
        code: `string text = "17";
if (int.______(text, out int zahl))
{
    Console.WriteLine(zahl);
}`,
        blanks: [{ id: "b1", answer: "TryParse", alternatives: ["tryparse"] }],
        explanation: "TryParse gibt false zurück statt zu crashen.",
        xp: 25
      },
      {
        id: "cs-basics-bug-1",
        kind: "spotBug",
        prompt: "Welche Zeile enthält den typischen Prüfungsfehler?",
        code: `int punkte = 45;
int anzahl = 10;
double schnitt = punkte / anzahl;
Console.WriteLine(schnitt);`,
        buggyLine: 3,
        fix: "double schnitt = punkte / (double)anzahl;",
        explanation: "Ohne Cast bleibt die Division ganzzahlig (4 statt 4.5).",
        xp: 30
      }
    ],
    badgeHint: "csharp-starter"
  },
  {
    id: "cs-control-flow",
    order: 22,
    title: "Kontrollstrukturen: if, switch, Schleifen",
    level: "Starter",
    examFocus: "AP2 Algorithmen · Ablaufsteuerung",
    whyItMatters:
      "Ohne if/for/while kannst du keine Algorithmus-Aufgabe lösen. switch ohne break ist ein Klassiker-Punktefresser.",
    minutes: 30,
    goals: [
      "if/else und switch korrekt schreiben",
      "for, while, do-while und foreach unterscheiden",
      "break und continue gezielt einsetzen",
      "Randfälle in Schleifen mitdenken"
    ],
    theory: [
      "`if` prüft Bedingungen. Mehrere Zweige verknüpfst du mit `else if` und `else`. Bedingungen liefern bool.",
      "`switch` vergleicht einen Ausdruck mit mehreren cases. In klassischem C#-switch braucht jeder case ein `break` oder `return`, sonst Fall-through-Fehler.",
      "`for` eignet sich bei bekannter Anzahl, `while` bei unbekannter Abbruchbedingung, `do-while` läuft mindestens einmal, `foreach` iteriert Collections.",
      "Schleifen in Prüfungen: Summe, Min/Max, Zählen, Filtern, lineare Suche. Immer leere Listen und ein Element mitdenken."
    ],
    remember: [
      "switch-case braucht break (außer return/throw).",
      "foreach ändert die Collection während der Iteration nicht.",
      "Endlosschleifen entstehen oft durch vergessene Zähler-Updates."
    ],
    codeExamples: [
      {
        title: "if & switch",
        code: `int note = 2;
if (note <= 4) Console.WriteLine("bestanden");
else Console.WriteLine("nicht bestanden");

switch (note)
{
    case 1:
    case 2:
        Console.WriteLine("gut");
        break;
    default:
        Console.WriteLine("ok");
        break;
}`,
        note: "Mehrere cases können denselben Block teilen."
      },
      {
        title: "Schleifen",
        code: `int summe = 0;
for (int i = 1; i <= 5; i++) summe += i;

int[] werte = { 3, 8, 2 };
foreach (int w in werte)
{
    if (w > 5) Console.WriteLine(w);
}`,
        note: "foreach liest sich oft prüfungsfreundlich."
      }
    ],
    pitfalls: [
      "switch ohne break",
      "Off-by-one: i <= n vs i < n",
      "while-Bedingung wird nie false"
    ],
    flashcards: [
      { front: "Wann for, wann while?", back: "for bei bekannter Anzahl; while bei bedingungsgetriebenem Abbruch." },
      { front: "Was passiert ohne break im switch?", back: "Compilerfehler CS0163 bzw. unerwünschter Fall-through." },
      { front: "Was macht continue?", back: "Springt zum nächsten Schleifendurchlauf." }
    ],
    exercises: [
      {
        id: "cs-flow-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Schleife läuft garantiert mindestens einmal?",
        options: ["for", "while", "do-while", "foreach"],
        correctIndex: 2,
        explanation: "do-while prüft die Bedingung erst nach dem ersten Durchlauf.",
        xp: 15
      },
      {
        id: "cs-flow-bug-1",
        kind: "spotBug",
        prompt: "Finde den switch-Fehler.",
        code: `int menue = 1;
switch (menue)
{
    case 1:
        Console.WriteLine("Anlegen");
    case 2:
        Console.WriteLine("Loeschen");
        break;
}`,
        buggyLine: 5,
        fix: "Nach case 1 ein break; setzen.",
        explanation: "Ohne break ist der case ungültig bzw. fällt durch.",
        xp: 30
      },
      {
        id: "cs-flow-order-1",
        kind: "orderCode",
        prompt: "Ordne den Code für die Summe 1..n.",
        lines: [
          "int summe = 0;",
          "for (int i = 1; i <= n; i++)",
          "{",
          "    summe += i;",
          "}",
          "Console.WriteLine(summe);"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        explanation: "Initialisieren → Schleife → akkumulieren → ausgeben.",
        xp: 25
      },
      {
        id: "cs-flow-pred-1",
        kind: "predictOutput",
        prompt: "Was wird ausgegeben?",
        code: `int i = 0;
while (i < 3)
{
    Console.Write(i);
    i++;
}`,
        options: ["012", "123", "0123", "Endlosschleife"],
        correctIndex: 0,
        explanation: "i läuft 0,1,2.",
        xp: 20
      },
      {
        id: "cs-flow-fill-1",
        kind: "fillBlank",
        prompt: "Vervollständige die foreach-Schleife.",
        code: `List<string> namen = new List<string> { "Ada", "Linus" };
______ (string name in namen)
{
    Console.WriteLine(name);
}`,
        blanks: [{ id: "b1", answer: "foreach" }],
        explanation: "foreach iteriert über jede Collection, die IEnumerable implementiert.",
        xp: 20
      }
    ]
  },
  {
    id: "cs-methods",
    order: 23,
    title: "Methoden, Parameter & Rückgaben",
    level: "Azubi",
    examFocus: "AP2 · Zerlegung von Problemen",
    whyItMatters:
      "Prüfungen verlangen oft Methoden statt alles in Main. Saubere Signaturen zeigen, dass du algorithmisch zerlegen kannst.",
    minutes: 25,
    goals: [
      "Methodensignatur lesen und schreiben",
      "void vs. Rückgabetyp unterscheiden",
      "Parameter, Überladung und out/ref grob kennen",
      "Hilfsmethoden für Suche/Summe bauen"
    ],
    theory: [
      "Eine Methode bündelt wiederverwendbare Logik: `Rückgabetyp Name(Parameter) { ... }`.",
      "`void` bedeutet: kein Rückgabewert. Sonst lieferst du mit `return` einen Wert zurück.",
      "Überladung: gleicher Name, unterschiedliche Parameterlisten. Der Compiler wählt anhand der Argumente.",
      "`out`-Parameter eignen sich, wenn eine Methode mehrere Ergebnisse liefern soll (z. B. TryParse). `ref` übergibt eine Variable referenziert."
    ],
    remember: [
      "Methoden klein und prüfbar halten.",
      "Name sollte Tun beschreiben: BerechneSumme, FindeMax.",
      "Früh returnen macht Code oft klarer."
    ],
    codeExamples: [
      {
        title: "Methode mit Rückgabe",
        code: `static int FindeMax(int[] werte)
{
    int max = werte[0];
    for (int i = 1; i < werte.Length; i++)
    {
        if (werte[i] > max) max = werte[i];
    }
    return max;
}`,
        note: "Klassische Min/Max-Methode für die Prüfung."
      }
    ],
    pitfalls: [
      "Vergessener return-Pfad",
      "Nebenwirkungen in 'Berechnungs'-Methoden",
      "Array-Index ohne Längenprüfung"
    ],
    flashcards: [
      { front: "Was bedeutet void?", back: "Die Methode gibt keinen Wert zurück." },
      { front: "Was ist Überladung?", back: "Gleicher Methodenname mit unterschiedlicher Signatur." }
    ],
    exercises: [
      {
        id: "cs-meth-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Signatur passt zu einer Methode, die den Durchschnitt zurückgibt?",
        options: [
          "void Durchschnitt(int[] werte)",
          "double Durchschnitt(int[] werte)",
          "int[] Durchschnitt(double wert)",
          "string Durchschnitt()"
        ],
        correctIndex: 1,
        explanation: "Durchschnitt ist typischerweise double und braucht die Werte als Input.",
        xp: 15
      },
      {
        id: "cs-meth-order-1",
        kind: "orderCode",
        prompt: "Ordne eine Methode zur Summe.",
        lines: [
          "static int Summe(int[] werte)",
          "{",
          "    int s = 0;",
          "    foreach (int w in werte) s += w;",
          "    return s;",
          "}"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        explanation: "Signatur → Körper → Akkumulation → return.",
        xp: 25
      },
      {
        id: "cs-meth-fill-1",
        kind: "fillBlank",
        prompt: "Vervollständige die Rückgabe.",
        code: `static bool IstGerade(int zahl)
{
    ______ zahl % 2 == 0;
}`,
        blanks: [{ id: "b1", answer: "return" }],
        explanation: "Ohne return fehlt der Rückgabewert.",
        xp: 15
      },
      {
        id: "cs-meth-pred-1",
        kind: "predictOutput",
        prompt: "Was wird ausgegeben?",
        code: `static int Doppelt(int x) => x * 2;
Console.WriteLine(Doppelt(4));`,
        options: ["4", "8", "2", "Compilerfehler"],
        correctIndex: 1,
        explanation: "Expression-bodied Method liefert 8.",
        xp: 15
      }
    ]
  },
  {
    id: "cs-arrays-collections",
    order: 24,
    title: "Arrays, List, Dictionary, Stack & Queue",
    level: "Azubi",
    examFocus: "AP2 · Datenstrukturen",
    whyItMatters:
      "Laut IHK-Vorbereitung sind Array, List und Dictionary Pflicht. Stack/Queue solltest du konzeptionell erklären können (LIFO/FIFO).",
    minutes: 35,
    goals: [
      "Array vs List unterscheiden",
      "List-Methoden Add/Remove/Count nutzen",
      "Dictionary für Schlüssel-Suche einsetzen",
      "FIFO und LIFO erklären"
    ],
    theory: [
      "Ein Array hat feste Länge (`int[] a = new int[5];`). Gut, wenn die Größe bekannt ist.",
      "`List<T>` ist dynamisch: `Add`, `Remove`, `Count`, Indexzugriff. In Prüfungen der Allrounder.",
      "`Dictionary<TKey,TValue>` speichert Paare. Schnelle Suche über Schlüssel, z. B. Artikelnummer → Artikel.",
      "`Queue` = FIFO (First In First Out), `Stack` = LIFO (Last In First Out). Typisch für Warteschlangen und Undo."
    ],
    remember: [
      "List ist prüfungssicherer Alltagsheld.",
      "Dictionary-Schlüssel müssen eindeutig sein.",
      "Queue.Enqueue/Dequeue, Stack.Push/Pop."
    ],
    codeExamples: [
      {
        title: "List & Dictionary",
        code: `List<string> topics = new List<string>();
topics.Add("C#");
topics.Add("SQL");

Dictionary<int, string> artikel = new Dictionary<int, string>();
artikel[1001] = "Tastatur";
if (artikel.ContainsKey(1001))
{
    Console.WriteLine(artikel[1001]);
}`,
        note: "ContainsKey vor dem Zugriff verhindert KeyNotFoundException."
      },
      {
        title: "Queue & Stack",
        code: `Queue<string> warteschlange = new Queue<string>();
warteschlange.Enqueue("Ticket A");
string naechstes = warteschlange.Dequeue();

Stack<string> undo = new Stack<string>();
undo.Push("Tippen");
string letzter = undo.Pop();`,
        note: "FIFO vs LIFO — oft mündlich/konzeptionell gefragt."
      }
    ],
    pitfalls: [
      "IndexOutOfRange bei Arrays",
      "Dictionary-Zugriff ohne ContainsKey",
      "List während foreach verändern"
    ],
    flashcards: [
      { front: "FIFO?", back: "First In First Out — Queue." },
      { front: "LIFO?", back: "Last In First Out — Stack." },
      { front: "Array vs List?", back: "Array feste Größe, List dynamisch." }
    ],
    exercises: [
      {
        id: "cs-col-mc-1",
        kind: "multipleChoice",
        prompt: "Welche Struktur passt zu einer Support-Warteschlange?",
        options: ["Stack", "Queue", "HashSet", "nur Array"],
        correctIndex: 1,
        explanation: "Warteschlangen sind FIFO → Queue.",
        xp: 15
      },
      {
        id: "cs-col-mc-2",
        kind: "multipleChoice",
        prompt: "Was liefert list.Count bei einer List mit 3 Elementen?",
        options: ["2", "3", "4", "Length"],
        correctIndex: 1,
        explanation: "List nutzt Count, Arrays Length.",
        xp: 10
      },
      {
        id: "cs-col-fill-1",
        kind: "fillBlank",
        prompt: "Element zur Liste hinzufügen.",
        code: `List<int> zahlen = new List<int>();
zahlen.______ (42);`,
        blanks: [{ id: "b1", answer: "Add" }],
        explanation: "Add hängt am Ende an.",
        xp: 15
      },
      {
        id: "cs-col-pred-1",
        kind: "predictOutput",
        prompt: "Was wird ausgegeben?",
        code: `List<int> x = new List<int> { 1, 2, 3 };
x.Remove(2);
Console.WriteLine(string.Join(",", x));`,
        options: ["1,2,3", "1,3", "2,3", "1,2"],
        correctIndex: 1,
        explanation: "Remove entfernt den Wert 2.",
        xp: 20
      },
      {
        id: "cs-col-bug-1",
        kind: "spotBug",
        prompt: "Finde den Dictionary-Bug.",
        code: `Dictionary<int, string> map = new Dictionary<int, string>();
map[1] = "Eins";
Console.WriteLine(map[2]);`,
        buggyLine: 3,
        fix: "Vorher ContainsKey(2) prüfen oder TryGetValue nutzen.",
        explanation: "Schlüssel 2 existiert nicht → Exception.",
        xp: 25
      }
    ]
  }
];
