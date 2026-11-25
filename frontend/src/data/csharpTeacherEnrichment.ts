import type { CsharpModule } from "./csharpTypes";

type Enrichment = Pick<
  CsharpModule,
  "analogy" | "teacherTalk" | "proTips" | "checkUnderstanding"
>;

/** Lehrer- + Profi-Stimme für Foundation- und Kernmodule */
export const csharpTeacherEnrichment: Record<string, Enrichment> = {
  "cs-zero-program": {
    analogy:
      "Ein Programm ist wie ein Kochrezept: Zeile für Zeile. Der Computer ist ein sehr gehorsamer Koch — er denkt nicht mit, er folgt exakt.",
    teacherTalk: [
      "Bevor wir Syntax pauken: Du gibst Befehle, der Computer führt sie der Reihe nach aus. Verstehst du die Reihenfolge, verstehst du Bugs.",
      "Unter .NET Framework steht dein Rezept in Main. Alles andere (using, namespace, class) ist die Küche drumherum.",
      "WriteLine ist „sag etwas und geh in die nächste Zeile“. ReadLine ist „hör zu und merke dir den Text“."
    ],
    proTips: [
      "Profi: Kleine Programme zuerst beweisen (eine Ausgabe), dann erweitern.",
      "Profi: Bei Fehlern zuerst die Zeilennummer in der Fehlerliste lesen."
    ],
    checkUnderstanding: [
      "Was passiert, wenn zwei WriteLine untereinander stehen?",
      "Warum starten wir in Main?",
      "Was ist der Unterschied zwischen Compilerfehler und Laufzeitfehler?"
    ]
  },
  "cs-zero-variables": {
    analogy:
      "Eine Variable ist eine beschriftete Schublade: Name außen, Wert innen. Zuweisung heißt: alten Inhalt raus, neuen rein.",
    teacherTalk: [
      "Lies `x = x + 1` von rechts nach links: Nimm den alten Wert, addiere 1, lege das Ergebnis wieder in x.",
      "Der Typ sagt, was in die Schublade darf. int = ganze Zahlen. string = Text. bool = ja/nein.",
      "Zwei ints kopieren Werte. Wenn a=5 und b=a, dann b=5 — aber danach sind a und b unabhängig."
    ],
    proTips: [
      "Profi: Sprechende Namen (summe, nicht s).",
      "Profi: Initialisiere lokale Variablen bewusst."
    ],
    checkUnderstanding: [
      "Was bedeutet Deklaration vs Initialisierung?",
      "Warum liest man Zuweisung von rechts nach links?",
      "Was passiert bei int b = a; danach a = 9;?"
    ]
  },
  "cs-zero-operators": {
    analogy:
      "Operatoren sind die Verben der Sprache: rechnen, vergleichen, verknüpfen. `==` fragt, `=` legt ab.",
    teacherTalk: [
      "Vergleiche erzeugen bool — true oder false. Das füttert später if und while.",
      "`&&` braucht beide Seiten wahr. `||` reicht eine. `!` dreht um.",
      "Modulo `%` ist der Rest. 10 % 3 = 1. Super für gerade/ungerade."
    ],
    proTips: [
      "Profi: Bei Unsicherheit Klammern setzen — Lesbarkeit schlägt Cleverness.",
      "Profi: `=` in if ist der Klassikerfehler — immer `==` prüfen."
    ],
    checkUnderstanding: [
      "Unterschied = und ==?",
      "Was ergibt true && false?",
      "Was bedeutet 17 % 5?"
    ]
  },
  "cs-zero-branches": {
    analogy:
      "if/else ist eine Weggabelung: Trifft die Bedingung zu, gehst du links, sonst rechts.",
    teacherTalk: [
      "Die erste passende else-if-Bedingung gewinnt — danach wird nicht weitergeprüft.",
      "Grenzfälle trainieren: genau 18, genau 50, 0. Genau diese Werte kommen in der KA.",
      "Immer `{ }` setzen. Ein gefährliches Semikolon nach if (...) bricht die Logik."
    ],
    proTips: [
      "Profi: Formuliere die Bedingung erst auf Deutsch, dann in Code.",
      "Profi: Höhere Schwellen zuerst bei Noten/Rabatten."
    ],
    checkUnderstanding: [
      "Wann läuft else?",
      "Warum ist die Reihenfolge bei else if wichtig?",
      "Was passiert bei if (x > 5); mit Semikolon?"
    ]
  },
  "cs-zero-loops": {
    analogy:
      "Eine Schleife ist ein Hamsterrad mit Ausstiegbedingung: immer wieder denselben Block, bis die Bedingung false ist.",
    teacherTalk: [
      "for (Start; Bedingung; Update) — lerne diese drei Teile getrennt.",
      "Tracing-Technik: Tabelle mit Durchlauf | i | Ausgabe. Das ist die beste Übung gegen Angst vor Schleifen.",
      "Endlosschleifen entstehen, wenn die Variable sich nie so ändert, dass die Bedingung false wird."
    ],
    proTips: [
      "Profi: Off-by-one mit Beispielwerten prüfen (n=0, n=1, n=3).",
      "Profi: foreach zum Lesen, for mit Index zum Schreiben/Tauschen."
    ],
    checkUnderstanding: [
      "Wie oft läuft for (i=0; i<5; i++)?",
      "Unterschied while und do-while?",
      "Was bewirkt break?"
    ]
  },
  "cs-zero-arrays": {
    analogy:
      "Ein Array ist eine Reihe nummerierter Fächer. Das erste Fach hat Nummer 0 — nicht 1.",
    teacherTalk: [
      "Length ist die Anzahl. Der letzte Index ist Length - 1. a[a.Length] knallt.",
      "Wenn du Max suchst: Starte mit a[0], nicht mit 0 — sonst scheiterst du bei negativen Zahlen.",
      "for (i=0; i<a.Length; i++) ist das Standardmuster."
    ],
    proTips: [
      "Profi: Leere Arrays und Length==0 vor a[0] prüfen.",
      "Profi: foreach wenn du nur lesen willst."
    ],
    checkUnderstanding: [
      "Welche Indizes hat new int[4]?",
      "Was ist der letzte Index bei Length 7?",
      "Warum max = a[0] statt 0?"
    ]
  },
  "cs-zero-methods-school": {
    analogy:
      "Eine Methode ist ein Mitarbeiter: Du gibst Auftrag (Argumente), er liefert Ergebnis (return) oder erledigt etwas (void).",
    teacherTalk: [
      "Definition = Arbeitsvertrag. Aufruf = „Bitte jetzt erledigen“.",
      "Parameter sind Platzhalter in der Definition. Argumente sind die echten Werte beim Aufruf.",
      "return beendet die Methode und schickt den Wert zurück an den Aufrufer."
    ],
    proTips: [
      "Profi: Main bleibt dünn — Arbeit in Methoden auslagern.",
      "Profi: Methodennamen als Verben: BerechneSumme, FindeMax."
    ],
    checkUnderstanding: [
      "Unterschied Parameter und Argument?",
      "Was bedeutet void?",
      "Was passiert nach return?"
    ]
  },
  "cs-ka-training": {
    analogy:
      "Die Klassenarbeit ist ein Parcours aus Stationen, die du einzeln schon kannst — jetzt hintereinander.",
    teacherTalk: [
      "Strategie: Aufgabe nacherzählen → Beispiel wählen → Randfälle → Code → Trace.",
      "Auf Deutsch skizzieren rettet dich, wenn Syntax stockt.",
      "Teilpunkte sichern ist klug: eine korrekte Schleife zählt mehr als Panik-Löschen."
    ],
    proTips: [
      "Profi: Nach dem Happy Path bewusst einen Fehlerfall testen.",
      "Profi: Dieselbe Kernlogik in Console und WinForms wiedererkennen."
    ],
    checkUnderstanding: [
      "Nenne die 4 Schritte der KA-Strategie.",
      "Was tust du bei Blockade?",
      "Welche Randfälle prüfst du immer?"
    ]
  }
};

export function applyTeacherEnrichment(module: CsharpModule): CsharpModule {
  const extra = csharpTeacherEnrichment[module.id];
  if (!extra) return module;
  return {
    ...module,
    analogy: module.analogy ?? extra.analogy,
    teacherTalk: module.teacherTalk ?? extra.teacherTalk,
    proTips: module.proTips ?? extra.proTips,
    checkUnderstanding: module.checkUnderstanding ?? extra.checkUnderstanding
  };
}
